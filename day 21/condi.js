//conditional statement
var name = 25
if(name<18){ //if else
    console.log("less than 18");
}else if(name==10){
    console.log("gether than 10");
}else{
    console.log("no");
}

let num =10;
switch(num){
    case true:{
        console.log(true);
        break;
    }
    case 1:{
        console.log(1);
    break;
    }
    case 10:{
        console.log(10);
    break;
    }
    default:{
        console.log("no option");
    }
    
}

//bollean statem
console.log(num==10?false:true);

//loop
//for loop
for(let n=0;n<5;n++)
{
    console.log(n);
}
//while
let s=0;
while(s<10){
    console.log(s);
    s++
}
//do while
s=0;
do{
console.log(s);
s++;
}while(s<9)

//continue


//break
s=0;
do{
console.log(s);
s++;
if(s==4)
{
    break;
}
}while(s<9)
