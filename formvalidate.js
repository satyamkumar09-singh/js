function validate(){
    let name = document.getElementById('name').value 
    let age = document.getElementById('age').value
    let contact = document.getElementById('contact').value
    if(name == ""){
        alert('please fill the name')
        document.getElementById('name').focus()
        
        return false
    }
    else if(age == ""){
        let erage = document.getElementById('errorage')
        erage.innerHTML = "please fill this field"
        document.getElementById('age').focus()
        return false
    }

    else if( isNaN(age)){
        let erage = document.getElementById('errorage')
        erage.innerHTML = "Age should be in number"
        document.getElementById('age').focus()
        return false
    }
    else if(isNaN(age)){
        let erage = document.getElementById('errorage')
        erage.innerHTML = "Age should be in number"
        document.getElementById('age')
        age.style.border="2px solid red"
        return false
    
}
else if(contact == ""){
    alert('please fill the contact number')
    document.getElementById('contact').focus()
    return false
}
else if( isNaN(contact)){
    alert('contact number should be in number')
    document.getElementById('contact').focus()
    return false
}
else if( contact.length>10 || contact.length<10 ){
    alert('contact number should be 10 digits')
    document.getElementById('contact').focus()
    return false
}
}

// here focus in the function which provide focused to the targate node