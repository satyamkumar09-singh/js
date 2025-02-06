let person_student ={
name:"maharaj",
age:90,
contact:1232,
account_stat:{
account_balance:1200,
account_no: 67354
},
personal_details:{
    marital_status:"unmarried",
    dateofbirth:"12-jan-90"
},
document:[1234,"578HF7"],
 fun:function(name){
    Alert("inside object "+name)
 }

}
console.log(person_student.account_stat.account_balance);
console.log(person_student.document[1]);
person_student.fun("satyam");
