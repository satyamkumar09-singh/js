let stu=[
    {
        name:"satyam",
        age:20,
        id:336,
        contact:987654321
    }
    
]
let showbtn= document.getElementById('show')
showbtn.addEventListener("click",showit)
function showit(){
    console.log(stu)
}