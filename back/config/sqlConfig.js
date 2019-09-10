const config = require('./goten-config');
module.exports = {
    development: {
    username: config.db.mysql.usr,
    password: config.db.mysql.pass,
    database: config.db.mysql.dbname,
    host: config.db.mysql.host,
    dialect: "mysql"
    },
    test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
    },
    production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
    }
}
