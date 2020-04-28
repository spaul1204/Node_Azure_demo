const express =require('express');
const router = express.Router();
const date = require('date-format')

const db = require('../config/db.js');

console.log("in todos");

let now = date.asString(new Date());

router.get('/', (req,res) => {
    console.log("inside todos function")
    db.tasks.findAll({
        attributes: ['taskDescription']
    }).then(data => {
        console.log('the todo items are ',data);
        res.json(data);
    })
    
} );


router.post('/add',(req,res) =>{
    console.log("request data is");
    let reqBody = req.body;
    
    console.log(req);
    // res.status(200).json({message:body})
    const id = reqBody.id;
    const taskDesc = reqBody.taskDesc;
    const userID = reqBody.userID;
    const addedDate = reqBody.addedDate;
    const updatedDate = reqBody.updatedDate;
    const status = reqBody.status;
    db.tasks.create({
        taskDescription:taskDesc,
        userID:userID,
        addedDate: addedDate,
        updatedDate: updatedDate,
        status : status
    }).then(data =>{
        
        res.send("Successfully added");
}).catch(error => console.log(error))

});


router.get('/update', (req,res) =>
{
    db.tasks.update({
        status : "In Progress",
        updatedDate : now
    },
    {
        where: {
          userID: 'John11'
        }
      }).then(data =>{
        
        res.send("Successfully updated");
      });
});

router.get('/delete', (req,res) =>
{
    id = req.query.id;
    db.tasks.destroy({
        where:{
            id:id
        }
    }).then(()=> res.send("Successfully deleted"))
});


// router.get('/:user', (req,res) => {
//     user = req.params.user;
//     db.tasks.findAll({
//         where : {
//             userID : user
//         },
//         attributes : ['taskDescription']
//     }).then(data =>{
//         console.log("Success");
//         res.json(data);
//     });
// })





module.exports = router;