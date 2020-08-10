const app = require('./src/config/server');
const dbConfig = require('./src/infra/dbConfig');
const connection = dbConfig();

const init = require('./src/infra/table');

connection.connect(error => {

    if (error) {
        console.log(error);

    } else {
        init();
        app.listen(8080, () => console.log('Está funcionando na porta 8080!'));
    }
})