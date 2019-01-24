

function fnLogin(){
var username = $('#txtUsername').val();
var password = $('#txtPassword').val();


    localStorage.setItem("logUsername", username);
    localStorage.setItem("logPassword", password);


checkLogin(localStorage.logUsername,localStorage.logPassword);
}

function checkLogin(username, password){
    console.log(password);

    $.ajax({
      
        type: "GET",
        url: "http://localhost:51940/api/UserPermission",
        dataType: 'json',
         headers :{
          'Authorization':'basic '+btoa(localStorage.logUsername + ':' + localStorage.logPassword)
         },
    
    success: function (data) {
        
        try {
            if (data[0].Permission.toLowerCase() === "admin") {
                window.location.href = "AHome.html";
            }else if(data[0].Permission.toLowerCase() === "manager"){
                window.location.href = "manager.html";
            }else{
                window.location.href = "user.html";
            }
          }
          catch(err) {
      
            alert(err.message);
          }

        
    },
    error: function (jqXHR,xhr, ajaxOptions, thrownError) {
        console.log("+++++++++++++++++++++++++  Bot notification failed, error is '" + thrownError + "'");
        alert('Failed to login user profile !');
        //window.location.href = "index.html";
    }
});
}


function fnLogout(){
    localStorage.removeItem("logUsername");
    localStorage.removeItem("logPassword");
  
    window.location.href = "index.html";
    alert("Logout success");
}

