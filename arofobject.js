let emp=[
    {
        name:"satyam",age:20,id:336
    },
    {
        name:"aman",age:20,id:337
    },
    {
        name:"manish",age:20,id:338
    }
]
console.log(emp);
let newob={
    name:"amit",
    age:53,
    id:463
}
emp.push(newob)
console.log(emp);
emp.splice(1,0,newob)
console.log(emp);
emp.pop()
console.log(emp);
emp.shift(newob)
console.log(emp);