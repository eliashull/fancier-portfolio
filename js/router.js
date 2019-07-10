function router(value){
    hide_all_views();
    
    switch(value){
        case "intro_container":
            // Add in function to show the view
            intro_container.classList.remove("d-none");
            break;
        case "instructionaldesign_container":
            instructionaldesign_container.classList.remove("d-none");
        break;     
    }
}

function hide_all_views(){
    // add in functions to hide the views
    intro_container.classList.add("d-none");
    instructionaldesign_container.classList.add("d-none");
}




/* VARIABLES GO HERE
intro_container
instructionaldesign_container
*/