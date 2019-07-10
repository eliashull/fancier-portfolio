function router(value){
    hide_all_views();
    
    switch(value){
        case "intro_container":
            intro_container.classList.remove("d-none");
        break;
        case "instructionaldesign_container":
            instructionaldesign_container.classList.remove("d-none");
        break;
		case "digitalpublishing_container":
            digitalpublishing_container.classList.remove("d-none");
        break; 
		case "webdevelopment_container":
            webdevelopment_container.classList.remove("d-none");
        break; 
		case "videoproduction_container":
            videoproduction_container.classList.remove("d-none");
        break; 
		case "graphicdesign_container":
            graphicdesign_container.classList.remove("d-none");
        break; 
		case "curriculumvitae_container":
            curriculumvitae_container.classList.remove("d-none");
        break; 
		case "contact_container":
            contact_container.classList.remove("d-none");
        break; 
    }
}

function hide_all_views(){
    // add in functions to hide the views
    intro_container.classList.add("d-none");
    instructionaldesign_container.classList.add("d-none");
	digitalpublishing_container.classList.add("d-none");
	webdevelopment_container.classList.add("d-none");
	videoproduction_container.classList.add("d-none");
	graphicdesign_container.classList.add("d-none");
	curriculumvitae_container.classList.add("d-none");
	contact_container.classList.add("d-none");
}

/* VARIABLES LIST

introduction_link
instructionaldesign_link
digitalpublishing_link
webdevelopment_link
videoproduction_link
graphicdesign_link
curriculumvitae_link
contact_link

intro_container
instructionaldesign_container
digitalpublishing_container
webdevelopment_container
videoproduction_container
graphicdesign_container
curriculumvitae_container
contact_container

*/