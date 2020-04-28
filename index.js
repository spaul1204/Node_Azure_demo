const express = require('express');
const bodyParser = require('body-parser')
const date = require('date-format')
const app = express();
const home = require('./routes/home.js');
const todos = require('./routes/todos.js');
const db = require('./config/db.js');


app.use(bodyParser.json());
let now = date.asString(new Date());

app.use('/',home);
// console.log("in index");
app.use('/todos',todos);


db.sequelize.sync({force:true}).then( async () =>{
    console.log("sync to database is complete");
    let firstRec = await db.tasks.create({taskDescription:'Complete the assignment',userID:'Sneha1204',addedDate: now, updatedDate: now, status : 'In progress'});
    let secondRec = await db.tasks.create({taskDescription:'Cook Lunch',userID:'Sneha1204',addedDate: now, updatedDate: now, status : 'Completed'});
    let thirdRec = await db.tasks.create({taskDescription:'Cook Dinner',userID:'Sneha1204',addedDate: now, updatedDate: now, status : 'Not Started'});
    let fourthRec = await db.tasks.create({taskDescription:'Clean utensils',userID:'John11',addedDate: now, updatedDate: now, status : 'Not Started'});
    console.log("4 records are added to database");
    app.listen(8000, () => {
      console.log("app has started on port",8000);
    })
  })
