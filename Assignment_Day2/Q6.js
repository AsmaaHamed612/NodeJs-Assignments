// var fs=require('fs');

// fs.writeFile('info.txt','hello iti',(Error)=>{
//     if(Error)
//     {throw Error;}

//     else{
//     console.log('Done')
//     }
// });

////////////////////////////////  Bonus  Creat Directory

var fs=require('fs');

fs.mkdir('NodeJsDirectory',(Error)=>{
    if(Error)
    {throw Error;}

    else{
    console.log('Directory Created')
    }
});
