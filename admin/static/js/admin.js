function autoScrollToTop(){
    document.documentElement.scrollTop = 0;
}

// takes the name and id of the blog then displays them in the delete modal

function delfunc(blog_title, post_id){
    document.getElementById('warning-p').innerHTML = 'You Are About To Delete:' + "<br>" + blog_title + '!';
    document.getElementById('warning-a').href = '/blog/delete_post/' + post_id;
}


