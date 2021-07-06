const Sequelize = require('sequelize'); // library for mapping models

module.exports = new Sequelize('todo', process.env.DBUSER, '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    define: {
        timestamps: false, // only columun name you have, without = id, createdAt, updatedAt
       //freezeTableName: true // only table name you have, without = tablename(s)
    },
    logging: false
});