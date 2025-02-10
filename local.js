//browser storage:-
//1 http, https -> http://www.google.com
//2 .www,.fb,.com ->www.fb.com
//3 5500 ->3001


//its functions:

//1 setItem()      ->data store in localstorage
//2 getItem()      ->data retrive in localstorage
//3 removeItem()   ->particular data remove in localstoarge
//4 clear()        ->all data clear in localstorage


const multi=()=>{
    let userdata={
        name:document.querySelector('#name').value,
        email:document.querySelector('#email').value,
        password:document.querySelector('#password').value

    }
    localStorage.setItem("userdata",JSON.stringify(userdata))
}

let data=JSON.parse(localStorage.getItem('userdata'))
console.log(data);

function loginform(){
    let logindata={
        loginemail:document.querySelector('#loginemail').value,
        loginpassword:document.querySelector('#loginpassword').value,
    }
    if(data.email!=logindata.loginemail ||data.password != logindata.loginpassword){
        alert("user not found")
            return false
    }
}