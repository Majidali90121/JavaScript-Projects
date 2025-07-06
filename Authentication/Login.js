function validationform(event){
    event.preventDefault()
    let name =  document.getElementById('name').value;
    let password  =  document.getElementById('password').value;
    let correctname = "Majid ali"
    let correctpassword = "Majid123"
    if(name==="" || password===""){
        alert('input is empty')
    }
    else    if(name === correctname && password == correctpassword){
        alert('Authenticaton successfully')
    }else if (name != correctname){
        alert("Invalid user name")
    }else{
        alert('Incorrect password')
    }
}