function name(){ //declare function
    console.log("hellos");
}

for(let s=0;s<3;s++)
{
    name(); //call function
}

//passing varaible to function
function vars(name,age)
{
    console.log(name,age);
}

vars("asdasd",23);

//recursive
var num = 1;
function recursive(){
console.log(num);
num++;
{
    if(num<0){
        recursive();
    }
}
}

recursive();