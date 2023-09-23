var user = document.getElementById("name");
var check = document.getElementById("purchase");
var mail = document.getElementById("email");
var number = document.getElementById("phone");
var place = document.getElementById("address");

function ValidateForm(){
    if(user.value <= 0){
        error.innerHTML="Please Enter Your Name";
        return false;}

    if(number.value < 12){
        error.innerHTML="Invalid Phone Number";
        return false;
    }else if(number.value <=13){
        error.innerHTML="Phone Number is Valid";
        return true;
    }

    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!filter.test(email.value)){
        error.innerHTML="Email Address is not valid"
        email.focus;
        return false;
    }

    if(place.value <= 0){
        error.innerHTML="Please Enter Your Address";
        return false;}


}

function call(){
    console.log(user.value)
    console.log(number.value)
}