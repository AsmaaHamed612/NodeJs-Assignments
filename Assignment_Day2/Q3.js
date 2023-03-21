var fs=require('fs');
fs.rename('test.txt','info.txt',(error)=>{
    if(error)
    {throw error;}

    else{
    console.log('Successfull...!')
    }
});

////////////////// Q 4 -Remove file info.txt ////////////////////////////

// var fs=require('fs');

// fs.unlink('info.txt',(error)=>{
//     if(error)
//     {throw error;}

//     else{
//     console.log('Deleted...!')
//     }
// });