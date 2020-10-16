'use strict';

const mysql = require('mysql');
const config = require('../config/mysql');

const connection = mysql.createConnection(config.configDB);


const _login = (User, password, done) => {
    connection.query("SELECT * FROM `users` WHERE `usuario` = '" + User + "'", (err, rows) => {
        if (err)
            return done(err);
        if (!rows.length) {
            return done({loginMessage: 'Invalid User or password.'});
        }
        if (!( rows[0].password == password))
            return done({loginMessage: 'Invalid User or password.'});

        return done(null,rows[0]);

    });
}


const _getData = (User, password, done) => {
    connection.query("SELECT * FROM `baches`", (err, rows) => {
        if (err)
            return done(err);
        return done(null,rows);
    });
}

const _getUserById = (id, done) => {
    connection.query("SELECT * FROM `users` WHERE `id` = '" + id + "'", (err, rows) => {
        if (err)
            return done(err);
        if (!rows.length) {
            return done({loginMessage: 'User not found.'});
        }
        return done(null, rows[0]);

    });
}


module.exports.login = _login;
module.exports.getData = _getData;
module.exports.getUserById = _getUserById;