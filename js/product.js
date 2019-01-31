$(document).ready(function () {
    
    if (typeof (Storage) !== "undefined") {

        $.ajax({

            type: "GET",
            url: "http://localhost:60443/api/IN_Product",
            dataType: 'json',
            headers: {
                'Authorization': 'basic ' + btoa(localStorage.logUsername + ':' + localStorage.logPassword)
            },

            success: function (data) {
                console.table(data);
                $('#table_id').dataTable( {
                    "ajax": "data1.json"
                } );
                // for(var i = 0 ; i <= data.length ; i++){
                //     $( ".getMyProduct" ).append( "<p>"+data[i].ProductID +"</p>" );
                // }
            },
            error: function (jqXHR, xhr, ajaxOptions, thrownError) {
                console.log("+++++++++++++++++++++++++  Bot notification failed, error is '" + thrownError + "'");
                // alert('check !');

            }
        });


 


    } else {
        console.log("localStorage error");
    }

});
