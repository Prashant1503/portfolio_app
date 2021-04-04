/** @function : Register user  */
function registerUser() {

    var userId = document.getElementById("userId").value;
    var userName = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var password = document.getElementById("password").value;

    checkInputField(userId,userName,email,address,password);

}

/**@function : validating input field */
function checkInputField (userId,userName,email,address,password) {

    if(!userId  && !userName  && !email && !address && !password) {
        return alert('Provide input fields');
    }
    else {
        
    
        localStorage.setItem("userId",userId);
        localStorage.setItem("userName",userName);
        localStorage.setItem("email",email);
        localStorage.setItem("address",address);
        localStorage.setItem("password",password);

        return alert('User created success');
      
    }
}