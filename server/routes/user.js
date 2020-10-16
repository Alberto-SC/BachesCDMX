'use strict';
const passport = require('passport');
const auth     = require('../models/user');
const userController = require('../controllers/user');
const mysql = require('mysql');
const config = require('../config/mysql');

const connection = mysql.createConnection(config.configDB);

const register = (router) => {

    router.post('/login', (req, res, next) => {

        passport.authenticate('local', (err, user) => {
            console.log(err);
            if (err) {return res.status(403).json({err: err, authUser: user}); }
            if (!user) { return res.status(403).json({err: err, authUser: user}); }
            req.logIn(user, (err) => {
                if (err) { return res.status(403).json({err: err, authUser: user}); }
                res.status(200).json({err: null, authUser: {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    fullname: user.fullname,
                    created_at: user.created_at,
                    modified_at: user.modified_at
                }});
            });
        })(req, res, next);
    });

    router.get('/getData',(req,res) => {
        connection.query("SELECT * FROM `baches` , `report_baches` ,`users`  where report_baches.id_user = users.id_user and baches.id_bache = report_baches.id_bache", (err, rows) => {
            if (err)
                return res.json(err);
            return res.json(rows);
        });
    });

    router.get('/getMyData/',(req,res) => {
        console.log(req.query);
        connection.query("SELECT * FROM `baches` , `report_baches` ,`users`  where report_baches.id_user = users.id_user and baches.id_bache = report_baches.id_bache and users.id_user = "+req.query.user+" " , (err, rows) => {
            if (err)
                return res.json(err);
            return res.json(rows);
        });
    });
    

    router.get('/logout', (req, res) =>{
        req.session.destroy()
        req.logout();
        res.status(200).json({err: null, authUser: {}})
    });

}


module.exports = register;
