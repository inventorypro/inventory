$(document).ready(function () {
    function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#myfileUpload").change(function () {
       
        var fileName = document.getElementById("myfileUpload").value;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
            readURL(this);
            document.getElementById("loader").style.display = "block";

        } else {
            $('#myfileUpload').val("");
            alert("Only jpg/jpeg and png files are allowed!");
        }
    });

    $('input[type=file]').on("change", function () {

        var $files = $(this).get(0).files;

        if ($files.length) {

            // Reject big files
            if ($files[0].size > $(this).data("max-size") * 1024) {
                console.log("Please select a smaller file");
                return false;
            }

            // Replace ctrlq with your own API key
            var apiUrl = 'https://api.imgur.com/3/image';
            var apiKey = 'b8732e440376e3d';

            var formData = new FormData();
            formData.append("image", $files[0]);

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": apiUrl,
                "method": "POST",
                "datatype": "json",
                "headers": {
                    "Authorization": "Client-ID " + apiKey
                },
                "processData": false,
                "contentType": false,
                "data": formData,
                beforeSend: function (xhr) {
                    console.log("Uploading...");
                },
                success: function (res) {
                    document.getElementById("loader").style.display = "none";
             
                    console.log(res.data.link);
                    document.getElementById("addImgProduct").value = res.data.link ;
                    // $('body').append('<img src="' + res.data.link + '" />');
                },
                error: function () {
                    alert("Failed");
                }
            }
            $.ajax(settings).done(function (response) {
                console.log("Done");
            });
        }
    });




});

{/* <form id="imgur">
<input type="file" id="myfileUpload" class="imgur" accept="image/*" data-max-size="5000" />
<img id="blah" height="200" src="#" alt="your image" />
</form> */}