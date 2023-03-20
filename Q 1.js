

var Add= function Add(x,y)
{
    if(isNaN(x) || isNaN(y))
    {
        return('must be numbers');
    }
    return x+y;
}

var Sub= function Sub(x,y)
{
    if(isNaN(x) || isNaN(y))
    {
        return('must be numbers');
    }
    return x-y;
}

var Multi= function Multi(x,y)
{
    if(isNaN(x) || isNaN(y))
    {
        return('must be numbers');
    }
    return x*y;
}






module.exports=
{
    add:Add,
    sub:Sub,
    multi:Multi
    
}