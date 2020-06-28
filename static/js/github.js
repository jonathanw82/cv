

$(document).ready(function(getRepos){
    
    // Api call to GitHub to pull my repository data
    let api_request = new XMLHttpRequest();
    let endpoint = "https://api.github.com/users";
    let user = "jonathanw82";
    let query = "repos";

    document.getElementById('overlayBox').innerHTML = `<div id="overlay"><div class="spinner" id="spinner">
    <iframe onclick="none" src="https://giphy.com/embed/d9QiBcfzg64Io" frameBorder="0" class="pacmanSpinner"></iframe></div><span class="loadingText">LOADING PLEASE WAIT!</span>`;

    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let the_response = api_request.responseText;
            let github_repo_return = JSON.parse(the_response);
            displayGitHubData(github_repo_return);
            document.getElementById('overlayBox').innerHTML = "";
        }
        else if (this.status == 404){
            document.getElementById('overlayBox').innerHTML = "";
            document.getElementById('warning').innerHTML = `<span><h2>Look's like something went gone wrong try refreshing or come back later!</h2></span>`;
        }
        else if (this.status == 403){
            var resetTime = new Date(this.getResponseHeader('X-RateLimit-Reset')*1000);
            document.getElementById('overlayBox').innerHTML = "";
            document.getElementById('warning').innerHTML = `<span><h2>Oops looks like we have upset the server and reached out limits please try again on <br> ${resetTime}</h2></span>`;
        }

    };
    api_request.open("GET", endpoint + "/" + user + "/" + query);
    api_request.send();
});

function displayGitHubData(github_repo_return){
   
    let total_repos = github_repo_return.length;
    console.log(github_repo_return);
    

    for (let i = 0; i < github_repo_return.length; i++){

       let repoName = github_repo_return[i].name;
       let repoURL = github_repo_return[i].html_url;
       let created = github_repo_return[i].created_at;
       let updated = github_repo_return[i].updated_at;
       let language = github_repo_return[i].language;

       document.getElementById('displayRepos') = ` <div class="col-sm-4"><div class="diaplayRepos"><span><a href="${repoURL}" target="_blank">${repoName}</a><br>${created}<br>${updated}<br>${language}</span></div></div>`

    };
}
