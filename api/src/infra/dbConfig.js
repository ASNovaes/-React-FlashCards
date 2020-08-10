const mysql = require('mysql');

const connection = () => {

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '524136',
        database: 'flashcardsystem'
    });
}

module.exports = function () { return connection() };

