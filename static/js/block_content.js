"use strict";

window.onload = (event) =>{
    nav('index');
}

let title = document.getElementById("block_title");
let content = document.getElementById("block_content");

function nav(page){

    if(page == 'index'){
        content.innerHTML = index_page;
        title.innerHTML = 'Home';
        static_files('landingpage');
    }
    else if(page == 'resume'){
        content.innerHTML = resume_page;
        title.innerHTML = 'Resume';
        static_files('resume');
    }
    else if(page == 'github'){
        content.innerHTML = github_page;
        title.innerHTML = 'Github';
        static_files('github');
    }
    else if(page == 'blog'){
        content.innerHTML = blog_page;
        title.innerHTML = 'blog';
    }
    else if(page == 'contact'){
        content.innerHTML = contact_page;
        title.innerHTML = 'contact';
        static_files('contact');
    }

}


function static_files(page){
    let script = document.createElement('script');
    script.src = `./static/js/${page}.js`;
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = `./static/css/${page}.css`;
    document.head.appendChild(script);
    document.head.appendChild(link);
}