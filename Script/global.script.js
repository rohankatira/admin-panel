$("#icons,#google,#profile,#table,#login,#register,#logout").hide();

$(".dashbord>button").on("click",function(){
    $("#Dashbord,#icons,#google,#profile,#table,#login,#register,#logout").hide();
    $($(this).attr("for")).show();
    
})

// counter.js
$(".counter").counter({
    autoStart:true,
    duration: 5000,
    countFrom: 1,
    countTo:350897

});