////////////////////////////////  Question 1 

// var result = require('./Q 1');
//  console.log(result.add(1,3));
//  console.log(result.sub(10,5));
//  console.log(result.multi(2,3));

//  try{
//     console.log(result.add('A',3));
//  }
//  catch(error)
//  {console.log(error.message);}


//////////////////////////  Question 2 

var Birthdate=require('./Q 2');

try{
    var YourAge=Birthdate.showAge('Asmaa',new Date(2000,1,6));
    console.log(YourAge);
}
catch(error)
{
    console.error(error.message);
}