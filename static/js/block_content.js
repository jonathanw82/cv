"use strict";

window.onload = (event) =>{
    nav('index');
}

let title = document.getElementById("block_title");
let content = document.getElementById("block_content");
let foot = document.getElementById('footer');
let page_from;

function nav(page){
    remove_static();
    
    page_from = page;
    
    if(page_from != 'github'){
       foot.innerHTML = page_footer;
    }else{
        foot.innerHTML = "";
    }
  
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
    // create the links to js and css and append them to the dom for that page
    let script = document.createElement('script');
    script.src = `./static/js/${page}.js`;
    script.id = 'temp_js_page';

    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = `./static/css/${page}.css`;
    link.id = 'temp_css_page'
    document.head.appendChild(link);
    document.head.appendChild(script);
}

function remove_static(){
    // remove the injected static files from the dom so they are not multiples of the same page
    if(document.getElementById('temp_css_page')){
        let link = document.getElementById('temp_css_page');
        link.remove();
    }
    if(document.getElementById('temp_js_page')){
        let script = document.getElementById('temp_js_page');
        script.remove();
    }
}