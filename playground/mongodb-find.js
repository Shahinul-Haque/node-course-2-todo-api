//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
 
 /* db.collection('Todos').find().count().then((count)=>{
    console.log('Todos');
    console.log(`Count : ${count}`);
  }, (err)=> {
      console.log('Unable to fetch docs',err)
  })*/

  db.collection('Users').find({name:'Tuhin'}).toArray().then((docs)=>{
     console.log(JSON.stringify(docs, undefined, 2));
  })
 
   
});