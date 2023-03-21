var readline=require('readline');
var fs=require('fs');

var read=readline.createInterface({
    input:fs.createReadStream('data.json'),
    crlfDelay:Infinity
});

read.on('line',(line)=>{
    console.log(line);
});