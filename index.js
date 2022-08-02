//  Prerequsites for node js

// basic and advanced js
//  ecma script
// client server model

// NODE runtime env 
// REPL
//  node core modules 


// const name_ ='me ';
// console.log(name_)

const fs =require('fs');

// fs.writeFileSync('read.txt','welcome to node js')

// fs.writeFileSync('read.txt','welcome to node by mazhar')

// fs.appendFileSync('read.txt','\nokokok')


// const buf_data = fs.readFileSync('read.txt')
// console.log(buf_data)

//  Buffer is used to store binary data 

// org_data = buf_data.toString();

// console.log(org_data)

fs.renameSync('read.txt','write.txt')