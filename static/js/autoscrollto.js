function autoScrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
    // document.documentElement.scrollTop = 10000;
    console.log("Scroll to Bottom")
}

function autoScrollToTop(){
    document.documentElement.scrollTop = 0;
}