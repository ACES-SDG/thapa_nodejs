//  Prerequsites for node js

// basic and advanced js
//  ecma script
// client server model

// NODE runtime env 
// REPL
//  node core modules 


// const name_ ='me ';
// console.log(name_)

// const fs =require('fs');

// fs.writeFileSync('read.txt','welcome to node js')

// fs.writeFileSync('read.txt','welcome to node by mazhar')

// fs.appendFileSync('read.txt','\nokokok')


// const buf_data = fs.readFileSync('read.txt')
// console.log(buf_data)

//  Buffer is used to store binary data 

// org_data = buf_data.toString();

// console.log(org_data)

// fs.renameSync('read.txt','write.txt')

// file encoding

// Diff between NULL vs Undefined 

// var iAmuseless = null;
// // console.log(iAmuseless)
// console.log(typeof(iAmuseless))



// var iAmstandby ;
// // console.log(iAmstandby)    // undefien is also a data type
// console.log(typeof(iAmstandby))


//  what is NaN 

// NaN is a property of global object
//  the initial value of NaN is Not  a Number 

// var myPhoneNumber = 5348645135;
// var myname = ' mazhar'

// console.log(isNaN(myPhoneNumber))

// console.log(isNaN(myname))





//              Expressions ansd Opereators

//  5 + 20   
//          operend operrator

// we know all rest operrators 

// discuss about the increment and decrement opoerator

// //  i++ , ++i , i--, --i

// //  postfix and prefix

// var x= 15;
// var newX= x++;
// console.log(x);
// console.log(newX);


// var x= 14;
// var bnew = ++x;
// console.log(x);
// console.log(bnew)


//    comparision operator assignement operator Less then or equal to operator and greater than or equal operator 
//      logical operator &&(logical AND ) ||(logical OR) !  (logical NOT)


//  if else condiional operator in one line 
// var age=15;
// console.log((age>= 19)?'ok':'no');


//  Switch Statements

// swtich statement without break statement

// area_ = 'Circle'

// switch(area_){
//     case 'Circle':
//         console.log('the area of circle is');
//     case 'Triangle':
//         console.log('area of triangle' );
//     default:
//         console.log('defsult')
// }

//      Switch statement with break keyword as well,


// area_ = 'Triangle'

// switch(area_){
//     case 'Circle':
//         console.log('the area of circle is');
//         break
//     case 'Triangle':
//         console.log('area of triangle' );
//         break
//     default:
//         console.log('defsult')
//         break
// }

//  while loop and do while loop,
// var num= 0;

// while(num<=10){
//     console.log(num);
//     num++;
// }

// // do while loop
// var num= 0;
// do{
//     console.log(num);
//     num++;
// }
// while(num<=10);


//  for loop statement.
// for(var num = 0; num<=10;num++){
//     console.log(num);
// }

// Functions in javascript 

// var a=10;
// var b=20;
// var sum= a+b;
// console.log(sum);

// function sum(){
//     var b=20, a=10;
//     var total= a+b;
//     console.log(total);
// }

// sum()

// diff btw func params and arguments

// function sum(a,b){
//         var total= a+b;
//         console.log(total);
//     }
// sum(20,40);

//  what is function expression


// function sum(a,b){
//         var total= a+b;
//         console.log(total);
//     }

// var funcexp =sum(2,45);

// console.log(funcexp)

//  return keyword

// function sum(a,b){
//     return total= a+b;
// }

// var funcexp =sum(2,45);

// console.log(funcexp)

// Anonymus fucntions

// var funExp = function (a,b){
//     return total = a+b ;
// }

// console.log(funExp(5,6))


/***        ECMA SCRIPT 
 * 
    let and const 
    template strings
    default arguments
    rest operators
    destructuring
    object properties
    arrow functions
    spread operators
    
* ***/

// LET vs CONST vs VAR 

// var ==== functions scope
// const ==== block scope and constant variable cant be change.
// let ==== block scope

// function func(){
//      var name ='okname';
//      console.log(name);

//      if (true){
//         var my_name = 'mazhar';
//         console.log(name);
//         console.log(my_name)
//      }
// }

function func(){
    let name ='okname';
    console.log(name);

    if (true){
       let my_name = 'mazhar';
       console.log(name);
       console.log(my_name)
    }
    // console.log(my_name)   // error will come here
}

func()