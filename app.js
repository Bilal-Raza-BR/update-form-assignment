var emailArrays = [];
var passwordArrays = [];
function insertValue() {
    var userEmail = document.getElementById("email").value;

    var userpassword = document.getElementById("password").value;

    emailArrays.push(userEmail);
    passwordArrays.push(userpassword);

// 1 row 

    document.getElementById("email1").innerHTML =  emailArrays[0]
    document.getElementById("password1").innerHTML =  passwordArrays[0]
    
    // 2 row 
    document.getElementById("email2").innerHTML =  emailArrays[1]
    document.getElementById("password2").innerHTML =  passwordArrays[1]
    
    // 3 row

    document.getElementById("email3").innerHTML =  emailArrays[2]
    document.getElementById("password3").innerHTML =  passwordArrays[2]
    
    // 4 row 
    document.getElementById("email4").innerHTML =  emailArrays[3]
    document.getElementById("password4").innerHTML =  passwordArrays[3]
    
    // 5 row 
    document.getElementById("email5").innerHTML =  emailArrays[4]
    document.getElementById("password5").innerHTML =  passwordArrays[4]
    
   


}

function pop() {
    var userEmail = document.getElementById("email").value;

    var userpassword = document.getElementById("password").value;

    emailArrays.pop();
    passwordArrays.pop();

    document.getElementById("email1").innerHTML =  emailArrays[0]
    document.getElementById("password1").innerHTML =  passwordArrays[0]
    
    // 2 row 
    document.getElementById("email2").innerHTML =  emailArrays[1]
    document.getElementById("password2").innerHTML =  passwordArrays[1]
    
    // 3 row

    document.getElementById("email3").innerHTML =  emailArrays[2]
    document.getElementById("password3").innerHTML =  passwordArrays[2]
    
    // 4 row 
    document.getElementById("email4").innerHTML =  emailArrays[3]
    document.getElementById("password4").innerHTML =  passwordArrays[3]
    
    // 5 row 
    document.getElementById("email5").innerHTML =  emailArrays[4]
    document.getElementById("password5").innerHTML =  passwordArrays[4]
    
   



    // document.write("Your Email ;",emailArrays,"<br><br>","Your Password ;",userpassword )


}

function shift() {
    var userEmail = document.getElementById("email").value;

    var userpassword = document.getElementById("password").value;

    emailArrays.shift();
    passwordArrays.shift();

    

    document.getElementById("email1").innerHTML =  emailArrays[0]
    document.getElementById("password1").innerHTML =  passwordArrays[0]
    
    // 2 row 
    document.getElementById("email2").innerHTML =  emailArrays[1]
    document.getElementById("password2").innerHTML =  passwordArrays[1]
    
    // 3 row

    document.getElementById("email3").innerHTML =  emailArrays[2]
    document.getElementById("password3").innerHTML =  passwordArrays[2]
    
    // 4 row 
    document.getElementById("email4").innerHTML =  emailArrays[3]
    document.getElementById("password4").innerHTML =  passwordArrays[3]
    
    // 5 row 
    document.getElementById("email5").innerHTML =  emailArrays[4]
    document.getElementById("password5").innerHTML =  passwordArrays[4]
    
   

    // document.write("Your Email ;",emailArrays,"<br><br>","Your Password ;",userpassword )


}


new assignment

