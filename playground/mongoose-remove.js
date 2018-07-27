const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/model/todo');
const {User} =require('./../server/model/user');

 
// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

Todo.findByIdAndRemove('5b5af9140652ac72a32f7875').then((todo)=>{
    console.log(todo);
})