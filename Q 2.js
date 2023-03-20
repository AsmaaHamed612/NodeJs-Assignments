var ShowAge=function(name,BirthDate)
{
    const currDate=new Date();
    const difference=currDate.getFullYear()-BirthDate.getFullYear();

    if(difference <0)
    {
        throw new Error('Invalid');
    }
    else
    {return `Hello ${name},your age now is : ${difference}`};
    
}

module.exports={
    showAge:ShowAge
}