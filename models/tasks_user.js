const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utils/dal');
const user = require('./user');
const task = require('./task');



const Task_User = db.define('tasks_user', {
    // Model attributes are defined here
    userid: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    taskid: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
});

Task_User.belongsTo(user,{
    foreignKey: 'userid'
})

Task_User.belongsTo(task,{
    foreignKey: 'taskid'
})

module.exports = Task_User;
