//////////////////// Q 5 -Read data from data.josn  as sync

// var fs=require('fs');

// try{
//     var data=fs.readFileSync('data.json');
//     var readJsonData=JSON.parse(data);
//     console.log(readJsonData);
// }catch(Error)
// {
//     console.log(Error);
// }

////////////////////////////// Q 5 -Read data from data.josn  as Async  //////////////////////////////

var fs=require('fs');

async function ReadData(){
try{
    var data= await fs.promises.readFile('data.json','utf-8');
    var readJsonData=JSON.parse(data);
    console.log(readJsonData);
}catch(Error)
{
    console.log(Error);
}
}

ReadData();
