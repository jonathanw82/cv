 $(document).ready(function(getRepos){

    let endpoint = "https://api.github.com/users";
    let user = "jonathanw82";
    let query = "repos";

    $.when(
        $.getJSON(`https://api.github.com/users/jonathanw82/repos`)
    ).then(
        function(response){
            var repoData = response;
            $("#gh-user-data").html(repoInfomationHTML(repoData));
        }, function(errorResponse) {
            if(errorResponse.status === 404){
                $("#gh-user-data").html(`<h2> No Data Found For User</h2>`)
            } else{
                console.log(errorResponse);
                $("#gh-user-data").html(`<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        })
});

function repoInfomationHTML(user){
    return `<h2>${user.name} <span>(@<a href="${user.html_url}" target="_blank">${user.login}</a>)</span></h2>
        <div>
            <p>Followers: ${user.followers} - Following ${user.following} <br> Repos: ${user.public_repos}</p>
        </div>`
}

// $(document).ready(function(getRepos){

//     let api_request = new XMLHttpRequest();
//     let endpoint = "https://api.github.com/users";
//     let user = "jonathanw82";
//     let query = "repos";

//     api_request.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             let the_response = api_request.responseText;
//             let github_return = JSON.parse(the_response);
//             displayGitHubData(github_return);
//             console.log(github_return);
//         }
//     };
//     api_request.open("GET", endpoint + "/" + user + "/" + query);
//     api_request.send();
// });

// function displayGitHubData(github_return){
//     let repos = [];
//     let total_repos = github_return.length;
//     console.log("i am in the funtion");

//     for (let i = 0; i < github_return.length[0], i++;){
//         console.log("The for loop is working");

//         // let repo_name = github_return[i].name;
//         // console.log(repo_names);

//         // repo_name.push(repos);
//     };
   
//     // let repo_list = document.getElementById("repoData");

//     // for (let i = 0; i < repos.length, i++;){
//     //     this_repo_list = `<span></span>`
//     //     repoData.innerHTML += repo_list;
//     // }
// }
