a=10;
console.log(a);
var a=20;
var a=30;

console.log(a);
{
    var a=90;
console.log(a);
}console.log(a);

//var
let b=24;
{
let b=30;
console.log(b);
}
console.log(b);
b=50;
console.log(b);
//const

const v=56;
{

    const v=78;
    console.log(v);
}
console.log(v);

//identifiers
let firstname= 'Maya';
let FirstName='Jiya';
console.log(firstname);

//DataTypes--case sensitive
console.log(typeof(firstname));
let isavailable=true;
console.log(typeof(isavailable));
var x;
console.log(typeof(x));//undefined
var st='';
console.log(typeof(st));
var n=null;
console.log(typeof(n));
let arr=[1,2,3,'deepthi'];
console.log(typeof(arr));
console.log(arr[3]);

//js objects
let person=
{
    name: 'deepthi',
    age: 32,
    place: 'tvm'
}
console.log(person.name);
console.log(person);
//using new keyword

let car= new Object();
car.brand='BMW';
car.model='I10';
car.color='red';
console.log(car);

//array of objects
var arr_obj= [{nam: 'rama', age: 32} , {nam:'renu', age:18} ];
console.log(arr_obj[1].nam);

//operators-assignment
let r=8;
console.log( r+=3);
//incrment/decrement operator

var s=8;
t=s--;
console.log( 'second value'+t);
console.log('first value'+s);

//comparison operator
 let y=8;
 let z=10;
 if (y>z) {console.log("y is greater than z");


    
 } else {if (y==z) {console.log("both are egual");
    
 } else {console.log("z is greater than y");
    
 }
    
 }
let inc=7;
let inc1='7';
if(inc===inc1)
{
    console.log("datatype and vallue same")

}else
{console.log("datatype  vallue different");
    
 }
//logical operator
if((inc==10) ||(inc1===inc))
{
    console.log("datatype and vallue same")

}else
{console.log("datatype or vallue different");
    
 }

 //precedance

 let u=10;
 let w=20;
 let m=(u+w*u) + (8**2);
 console.log("precedance result"+m);




 //function
 function addvalue(ad1,ad2)
{
    var sum=ad1+ad2;
    console.log('sum is'+sum);
}addvalue(10,20);

function subvalue(sub1, sub2)
{
    var sub=sub1-sub2;
    return(sub);

}var subresult= subvalue(50,20);
console.log('sub result is '  +subresult);

function mulvalue(mul1, mul2)
{
    var mul=mul1*mul2;
    return(mul);

}var mulresult= mulvalue(50,2);
console.log('multiplication result is '  +mulresult);


function divvalue(div1, div2)
{
    var div=div1/div2;
    return(div);

}var divresult= divvalue(50,2);
console.log('division result is '  +divresult);







