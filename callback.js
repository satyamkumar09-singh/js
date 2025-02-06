let emp= [
    {
        name:"aman",age:21,id:345
    },
    {
        name:"vikash",age:32,id:346
    },
    {
        name:"manish",age:23,id:654
    }
]

//map function
let data=emp.map((e)=>{return e.name})
let age=emp.map((e)=>{return e.age})
console.log(data);
console.log(age);


//filter function
let fdata=emp.filter((e)=>{return e.age>22})
console.log(fdata);