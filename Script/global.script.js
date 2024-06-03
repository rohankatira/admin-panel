$("#icons,#google,#profile,#table,#login,#register,#logout").hide();

$(".dashbord>button").on("click",function(){
    $("#Dashbord,#icons,#google,#profile,#table,#login,#register,#logout").hide();
    $($(this).attr("for")).show();
    
})