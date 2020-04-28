const Sequelize = require('sequelize');
const sequelize = new Sequelize('todoList','root','ind123',{
    host:'localhost',
    dialect:'mysql',
    pool: {
        max: 10,
        min: 5,
        idle: 10000
      },
 });

 const db = {};
 db.sequelize = sequelize;
 db.Sequelize = Sequelize;

 db.tasks = require('../models/tasks.js')(sequelize,Sequelize);

 module.exports = db;