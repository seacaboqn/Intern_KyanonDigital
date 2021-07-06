const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utils/dal');



const Task = db.define('task', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    datecomplete: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('NEW', 'COMPLETE'),
        allowNull: false
    },
    datecreated: {
        type: DataTypes.DATE,
        allowNull: false
    },
    datemodified: {
        type: DataTypes.DATE,
        allowNull: false
    },
});

module.exports = Task;
