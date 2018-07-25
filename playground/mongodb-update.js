//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
 
 /*db.collection('Todos').findOneAndUpdate({
   _id:new ObjectID("5b57563e4d625900ccff9a4f")
 },{
  $set: {
    completed:true
  }
 }, {
   returnOriginal:false
 }).then((result)=>{
   console.log(result);

 });*/

  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID("5b5759522e9033379435c882")
  },{
    $set:{
      name:'Simanto'
    }
  }, 
  {
    $inc: {
      age:1
    }
  }).then((result)=>{
    console.log(result);
  })
});