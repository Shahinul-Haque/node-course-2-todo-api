const {ObjectID} = require('mongodb');
const {Todo} = require('./../../model/todo');
const {User} = require('./../../model/user');
const jwt = require('jsonwebtoken');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
  _id:userOneId,
  email:'Shahinjava@gmail.com',
  password:'userone',
  tokens:[{
    access:'auth',
    token: jwt.sign({_id:userOneId,access:'auth'},'abc123').toString()
  }]
},{
  _id:userTwoId,
  email:'Tuhinitbd@gmail.com',
  password:'usertwo'
 
}]

const todos =[{
    _id:new ObjectID(),
    text:'First test todo',
    completed:false,
    completedAt:null
}, {
    _id:new ObjectID(),
    text:'Second test todo',
    completed:true,
    completeAt:333
}];  


const populateTodos=function(done) { // dont use arrow function to use this.timeout
    this.timeout(5000); // override default 2000 ms
  
    Todo.remove({}).then(() => {
      return Todo.insertMany(todos);
    }).then((docs) => {
      done();
    });
  }

  const populateUsers = function(done){
    this.timeout(5000); // override default 2000 ms
    User.remove({}).then(()=>{
      var userOne = new User(users[0]).save();
      var userTwo = new User(users[1]).save();
  
      return Promise.all([userOne,userTwo]);
    }).then((docs)=>{
      done();
    })
  }
  module.exports ={todos,populateTodos,users,populateUsers};