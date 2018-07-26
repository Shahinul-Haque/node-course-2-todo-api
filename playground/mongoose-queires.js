const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/model/todo');
const {User} =require('./../server/model/user');

var id = "5b57e60add42a0a8275d3ded";

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}

/*Todo.find({
    _id:id
}).then((todos)=>{
   console.log('Todos',todos);
});

Todo.findOne({
    _id:id
}).then((todo)=>{
   console.log('Todos',todo);
});

Todo.findById(id).then((todo)=>{
    if(!todo){
        console.log('Id not found');
    }
    console.log('Todo',todo);
}).catch((e)=>{ console.log(e)}); */

User.findById(id).then((user)=>{
     if(!user){
         return console.log('Unable to find user');
     }
     console.log(JSON.stringify(user,undefined,2));
}).catch((e)=>{ console.log(e)});