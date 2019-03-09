const config = require('../config/environments');
const Sqeuelize = require('sequelize');
const sequelize = new Sqeuelize(
    config.mysql.database,
    config.mysql.username,
    config.mysql.password,
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);
// DB 이름, 계정명, 비밀번호 순.

const User = sequelize.define('user', {
    name: Sqeuelize.STRING
})

module.exports = {
    sequelize,
    User
}