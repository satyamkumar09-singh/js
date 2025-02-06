let ar=[1,"anshu","B",true,35.5]
console.log(ar[4])

for(let a=0;a<5;a++){
    console.log(ar[a])
}

for(vl of ar){
    console.log(vl)
}
let b=[]
for(let b=0;b<5;b++){
    ar[b] =prompt("enter numbers in array")
}
console.log(ar)