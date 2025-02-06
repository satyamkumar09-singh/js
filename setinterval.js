//setInterval(()=>{document.write("vikashwa k papa..")},1000)


var st=0
function start(){
    var c=0
    let count =document.getElementById('count')
    st=setInterval(()=>{
        count.innerHTML=c++
    },1000)
}

    function stop(){
        clearInterval(st)
    }
