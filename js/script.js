$(".fa").click(function(){
    $("ul").slideToggle(500)
});





function validation(){
    
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var textarea = document.getElementById("textarea").value;



if(user == ""){
    document.getElementById("username").innerHTML = "*Full name is required*";
    return false;


}

if(email == ""){
    document.getElementById("myemail").innerHTML = "*Email is required*";
    return false;
    

}

if(textarea == ""){
    document.getElementById("mytextarea").innerHTML = "*This field is required*";
    return false;
    

}

else{
    document.write("<h1>Congratulation your message has been sent</h1>");
}

}