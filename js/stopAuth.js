$( document ).ready(function() {
 
    if (typeof(Storage) !== "undefined") {
    
    $.ajax({
      
        type: "GET",
        url: "http://localhost:51940/api/UserPermission",
        dataType: 'json',
         headers :{
          'Authorization':'basic '+btoa(localStorage.logUsername + ':' + localStorage.logPassword)
         },
    
    success: function (data) {
     console.table(data);
   

     
    },
    error: function (jqXHR,xhr, ajaxOptions, thrownError) {
        console.log("+++++++++++++++++++++++++  Bot notification failed, error is '" + thrownError + "'");
        alert('check !');
        window.location.href = "index.html";
    }
});


      } else {
       console.log("localStorage error");
      }
    
});