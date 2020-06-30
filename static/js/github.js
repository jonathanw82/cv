/* These Functions start automatically when the page is loaded and sends a request to the 
gitHub API, requesting all my repos in an array, I then iterate them out with a for loop
and inject them into the dom with template literals */

$(document).ready(function(getRepos){
    
    // loading Spinner
    document.getElementById('overlayBox').innerHTML = `<div id="overlay"><div class="spinner" id="spinner">
    <iframe onclick="none" src="https://giphy.com/embed/d9QiBcfzg64Io" frameBorder="0" class="pacmanSpinner">
    </iframe></div><span class="loadingText">LOADING PLEASE WAIT!</span>`;

    // Api call to GitHub to pull my repository data
    let api_request = new XMLHttpRequest();
    let endpoint = "https://api.github.com/users";
    let user = "jonathanw82";
    let query = "repos?page=1&per_page=50";

    // opens the request and sends the parameters
    api_request.open("GET", endpoint + "/" + user + "/" + query);
    // starts the request
    api_request.send();

    // Waiting for the api to return the data
    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let the_response = api_request.responseText;
            let github_repo_return = JSON.parse(the_response);
            displayGitHubData(github_repo_return);
            document.getElementById('overlayBox').innerHTML = "";
        }
        else if (this.status == 404){
            // The message warns us that the server has an error 404
            document.getElementById('overlayBox').innerHTML = "";
            document.getElementById('warning').innerHTML = `<span><h2>Look's like something went gone wrong try 
                                                                    refreshing or come back later!</h2></span>`;
        }
        else if (this.status == 403){
            // This message warns us we have exceeded out hourly limit of requests 403 to the
            // github server and display a time we can comeback and try again. 
            var resetTime = new Date(this.getResponseHeader('X-RateLimit-Reset')*1000);
            document.getElementById('overlayBox').innerHTML = "";
            document.getElementById('warning').innerHTML = `<span><h2>Oops looks like we have reached our limits 
                                                            please try again on <br> ${resetTime}<br>Sorry for any inconvenience!</h2></span>`;
        }

    };
});

function displayGitHubData(github_repo_return){
   // Total repos are displayed by this hTML injection
    let total_repos = github_repo_return.length;
    document.getElementById('repoNumbers').innerHTML = `<p>Total number of Repositories to display ${total_repos}</p>`;
    console.log(github_repo_return)
    for (let i = 0; i < github_repo_return.length; i++){
        // this for loop iterates through the array sent from github and disaplayes the data 
        // on the HTML page.
       let repoName = github_repo_return[i].name;
       let repoURL = github_repo_return[i].html_url;
       let created = github_repo_return[i].created_at;
       let updated = github_repo_return[i].updated_at;
       let language = github_repo_return[i].language;

        // if the programming language is not present display Language Not Detected.
       if (language == null){
           language = "Language Not Detected";
       }

       document.getElementById('displayRepos').innerHTML += `<div class="col-lg-4 col-md-6 mx-auto card-col"><a href="${repoURL}" target="_blank"><div class="card">
        <img class="card-img-top" id="cardImageSrc" src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="Card image cap">
        <div class="card-body"><h5 class="card-title">${repoName}</h5>
          <p class="card-text">Created: ${created} <br>Last Updated: ${updated}<br>${language}</p></div></div></a></div>`;
        };
    }
    
    //    document.getElementById('displayRepos').innerHTML += `<div class="col-sm-4"><div class=" diaplayRepos"><a href="${repoURL}" target="_blank">${repoName}</a><br> Created: ${created}
    //                                                 <br>Last Updated: ${updated}<br>${language}</div></div>`;
 