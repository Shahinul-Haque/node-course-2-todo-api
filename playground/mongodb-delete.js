//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
 
 // delete Many
// db.collection('Todos').deleteMany({text: 'Time for Breakfast'}).then((result) => {
 // console.log(result);
//});


 // delete one

 /*db.collection('Todos').deleteOne({text:'Time for Breakfast'}).then((result)=>{
   console.log(result);
 });*/

 //finedeleteOne
 //db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
   // console.log(result);
 //})

 db.collection('Users').findOneAndDelete({
   _id:new  ObjectID("5b57571f5fc6101cdc09ed01")}).then((result)=>{
   console.log(JSON.stringify(result, undefined, 2)); 
 })

   
});