// UI Components (Nav Icons)

/*
input_ico_locate.addEventListener("click",function(){
    API_request();
});
*/

// UI Component (Buttons)

/*

input_btn_now.addEventListener("click",function(){
    get_forecast("now");
});
input_btn_hourly.addEventListener("click",function(){
    get_forecast("hourly");
});
input_btn_daily.addEventListener("click",function(){
    get_forecast("daily");
});
input_btn_previous.addEventListener("click",function(){
    get_forecast("previous");
});
input_btn_next.addEventListener("click",function(){
    get_forecast("next");
});
input_btn_getforecast.addEventListener("click",function(){
    API_request();
});
input_btn_settings.addEventListener("click",function(){
    router("view_settings");
});

*/

/* jQuery Example Event Listener - Similar to plain Javascript example above
$("#input_ico_locate").on('click',function(){
  API_request();  
})
*/

intro_link.addEventListener("click",function(){
    console.log("Hello World! intro_link is being listened to.");
    router("intro_container");
});

instructionaldesign_link.addEventListener("click",function(){
    console.log("Hello World! instructionaldesign_link is being listened to.");
    router("instructionaldesign_container");
});

digitalpublishing_link.addEventListener("click",function(){
    console.log("Hello World! digitalpublishing_link is being listened to.");
	router("digitalpublishing_container");
});

webdevelopment_link.addEventListener("click",function(){
    console.log("Hello World! webdevelopment_link is being listened to.");
	router("webdevelopment_container");
});

videoproduction_link.addEventListener("click",function(){
    console.log("Hello World! videoproduction_link is being listened to.");
	router("videoproduction_container");
});

graphicdesign_link.addEventListener("click",function(){
    console.log("Hello World! graphicdesign_link is being listened to.");
	router("graphicdesign_container");
});

curriculumvitae_link.addEventListener("click",function(){
    console.log("Hello World! curriculumvitae_link is being listened to.");
	router("curriculumvitae_container");
});

contact_link.addEventListener("click",function(){
    console.log("Hello World! contact_link is being listened to.");
	router("contact_container");
});
