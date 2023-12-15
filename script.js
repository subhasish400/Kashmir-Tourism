let user = document.getElementById("user");
let loginBtn = document.getElementById("loginBtn");
let placeName = document.getElementById("placeName");
let submit = document.getElementById("submit");


// here we have given the functionality to the login page.

user.addEventListener("click", function(){
    document.querySelector(".login").classList.toggle("active1");
})
loginBtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if(email.value == "" && password.value == ""){
        alert("Plaese fill the details")
    }else{
        alert("You are logged in successfully")
        document.querySelector(".login").style.display="none";
    }
})
// Now we aer going to give functionality to the booking application
submit.addEventListener("click", function(){
    if(placeName.value == ""){
        alert("Please fill the details");
    }else{
        alert("Tour Booked");
    }
})
// Now we are going to give functionality to the contact us form
register.addEventListener("click", function(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let Name = document.getElementById("Name");

    if(email.value == "" && password.value == "" && Name.value == ""){
        alert("Plaese fill the details")
    }else{
        alert("You are registered  successfully")
        
    }
})