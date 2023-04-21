function register(event){
    event.preventDefault();
    // alert("working");

    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;

    if(name && email && password && confirmpassword){
        if(password.length>=8 && confirmpassword.length>=8){
            if(password==confirmpassword){
                var array=JSON.parse(localStorage.getItem("users")) || [];
                var flag=false;
                for(var i=0;i<array.length;i++){
                    if(array[i].uemail==email){
                        flag=true;
                    }
                }
                if(flag==false){
                    var userdata={uname:name,uemail:email,upassword:password,uconfirmpassword:confirmpassword}
                    array.push(userdata);
                    localStorage.setItem("users",JSON.stringify(array));
                    alert("User registered successfully");
                    window.location.href="./login.html"
                    document.getElementById("name").value=''
                    document.getElementById("email").value=''
                    document.getElementById("password").value=''
                    document.getElementById("confirmpassword").value=''
                }
                else{
                    alert("email already exist")
                }
            }
            else{
                alert("password not matched")
            }
        }
        else{
            console.log("Password should be minimum 8 digits")
        }
    }
    else{
        console.log("all fields are required")
    }
}


function login(event){
    event.preventDefault();
    // alert("working");
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var loginuser={}

    if(email && password){
        var array=JSON.parse(localStorage.getItem("users"))
        var flag=false;
        for(var i=0;i<array.length;i++){
             if(array[i].uemail==email && array[i].upassword==password){
            flag=true;
            loginuser=array[i];
        }
        }
        if(flag==true){
            localStorage.setItem("loginuser",JSON.stringify(loginuser));
            alert("logged in successfully");
            window.location.href="./home.html"
        }
        else{
            alert("credentilas not matched")
        }
    }
    else{
        console.log("both fields are required.")
    }
}