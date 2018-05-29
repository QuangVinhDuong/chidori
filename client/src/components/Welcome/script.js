$(document).ready(function(e) {
    e.preventDefault;
    $("#btnLogin").click(function() {
        $.post(
            window.location.href+":3001/api/login",
            {
                user: $("#lo-u-name").val(),
                pass: $("#lo-pw").val()    
            },
            function(data) {
                if (data != '') {
                    window.localStorage.setItem("login", "user");
                }                
            }
        );
    });
});