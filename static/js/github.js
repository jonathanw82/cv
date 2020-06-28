

// $(document).ready(function(getGitHubUserInfo){

//     // Api call to GitHub to pull my User
//     let api_request = new XMLHttpRequest();
//     let endpoint = "https://api.github.com/users";
//     let user = "jonathanw82";
    

//     api_request.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             let the_response = api_request.responseText;
//             let github_user_return = JSON.parse(the_response);
//             displayGitHubData(github_user_return);
//         }
//     };
//     api_request.open("GET", endpoint + "/" + user);
//     api_request.send();
// });


$(document).ready(function(getRepos){
    
    // Api call to GitHub to pull my repository data
    let api_request = new XMLHttpRequest();
    let endpoint = "https://api.github.com/users";
    let user = "jonathanw82";
    let query = "repos";

    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let the_response = api_request.responseText;
            let github_repo_return = JSON.parse(the_response);
            displayGitHubData(github_repo_return);
        }
        else if (this.status == 404){
            console.log("SOMETHGING IS WRONG AT THE SERVER")
        }
        else if (this.status == 403){
            console.log("TO MANY REQUEST HAVE BEEN SENT TO SERVER");
            var resetTime = new Date(this.getResponseHeader('X-RateLimit-Reset')*1000);
            console.log(resetTime);
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
        console.log(repoName, repoURL);
    };
}
