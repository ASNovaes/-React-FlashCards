const mysql = require('mysql');

const connection = () => {

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'flashcardsystem'
    });
}

module.exports = function () { return connection() };

