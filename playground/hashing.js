const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bycrypt = require('bcrypt');

var password = 'abc123';
// bycrypt.genSalt(10, (err,salt)=>{
//   bycrypt.hash(password,salt, (err,hash)=>{
//       console.log(hash);
//   })
// })

var hashPassword ='$2b$10$cd/Ox2SU0BvA4CLVT60O3.61T5fbj1dcn023mmacdWPtuPL.VTchi';

bycrypt.compare(password,hashPassword,(err,res)=>{
    console.log(res);
})




// var data ={
//     id:10
// }
// var token = jwt.sign(data, '123abc');
// console.log(token);
// var decode = jwt.verify(token, '123abc');
// console.log('decode: ',decode);
// var  message = 'I am user number 3'
// var hash = SHA256(message).toString();
// console.log(`Message: ${message}`);
// console.log(`Hash :${hash}`);

// var data={
//     id:4
// }

// var token ={
//     data,
//     hash:SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
// token.data.id =5;

// var resultHash = SHA256(JSON.stringify(token.data)+ 'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('Data was not changed');
// }else{
//     console.log('Data was changed. Do not trust !');
// }