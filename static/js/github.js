
/* These Functions start automatically when the page is loaded and sends a request to the 
gitHub API, requesting all my repos in an array, I then iterate them out with a for loop
and inject them into the dom with template literals */

$(document).ready(function (getRepos) {

    // loading Spinner
    document.getElementById('overlayBox').innerHTML = `<div id="overlay"><div class="spinner" id="spinner">
    <iframe onclick="none" src="static/images/pacman.gif" frameBorder="0" class="pacmanSpinner" >
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
        else if (this.status == 404) {
            // The message warns us that the server has an error 404
            document.getElementById('overlayBox').innerHTML = "";
            document.getElementById('warning').innerHTML = `<span><h2>Look's like something went gone wrong try 
                                                                    refreshing or come back later!</h2></span>`;
        }
        else if (this.status == 403) {
            // This message warns us we have exceeded out hourly limit of requests 403 to the
            // github server and display a time we can comeback and try again. 
            var resetTime = new Date(this.getResponseHeader('X-RateLimit-Reset') * 1000);
            document.getElementById('overlayBox').innerHTML = "";
            document.getElementById('warning').innerHTML = `<span><h2>Oops looks like we have reached our limits 
                                                            please try again on <br> ${resetTime}<br>Sorry for any inconvenience!</h2></span>`;
        }

    };
});

function displayGitHubData(github_repo_return) {
   
    // this for loop iterates through the array sent from github and displayes the data 
    // on the HTML page.
    for (let i = 0; i < github_repo_return.length; i++) {
        
        // declare the objects {} to be pushed into the array
        var repN = [], selectRepo = {};
        selectRepo.repoName = github_repo_return[i].name;
        selectRepo.repoURL = github_repo_return[i].html_url;
        selectRepo.description = github_repo_return[i].description;

        // Push only selected repos in to repN so Portfolio only has the items i want them to see
        if(selectRepo.repoName == "Can_Share" || selectRepo.repoName == "bristol-central-gym" || selectRepo.repoName == "HydroBigTent"
            || selectRepo.repoName == "myfavoritetune" || selectRepo.repoName == "Soil_Watering" || selectRepo.repoName == "the-honey-pot"
            || selectRepo.repoName == "cv" || selectRepo.repoName == "monster-rolodex" || selectRepo.repoName == "blog" || selectRepo.repoName == "Coffee"
            || selectRepo.repoName == "Coffee" || selectRepo.repoName == "eastbristolhops" || selectRepo.repoName == "network_test" 
            || selectRepo.repoName == 'thehoneycombAM' || selectRepo.repoName == "solarterrestrialdata"
            || selectRepo.repoName == "fanControlReadMe" || selectRepo.repoName == "Hvac_controlReadme" ){
            repN.push(selectRepo.repoName);
        }
        makeRepo(repN);
    }

    function makeRepo(repN){
        for(let i = 0; i < repN.length; i++){

            let repoImage;
           
            if (selectRepo.repoName == "Can_Share") {
                repoImage = "./static/images/canshareRepoImage.jpg";
            }
            else if (selectRepo.repoName == "bristol-central-gym") {
                repoImage = "./static/images/bristCentralRepoImage.jpg";
            }
            else if (selectRepo.repoName == "HydroBigTent") {
                repoImage = "./static/images/hydroRepoImage.jpg";
            }
            else if (selectRepo.repoName == "myfavoritetune") {
                repoImage = "./static/images/musicTrackRepoImage.jpg"
            }
            else if (selectRepo.repoName == "Soil_Watering") {
                repoImage = "./static/images/soilwaterRepoImage.jpg";
            }
            else if (selectRepo.repoName == "the-honey-pot") {
                repoImage = "./static/images/honeypotrepoImage.jpg";
            }
            else if (selectRepo.repoName == "cv") {
                repoImage = "./static/images/cvrepoiamgegithub.jpg";
            }
            else if (selectRepo.repoName == "monster-rolodex") {
                repoImage = "./static/images/rolodex.png";
            }
            else if (selectRepo.repoName == "blog") {
                repoImage = "./static/images/blog.jpg";
            }
            else if (selectRepo.repoName == "Coffee") {
                repoImage = "./static/images/coffeerepoimage.jpg";
            }
            else if (selectRepo.repoName == "eastbristolhops") {
                repoImage = "./static/images/ebh.jpg";
            }
            else if (selectRepo.repoName == "network_test") {
                repoImage = "./static/images/intcon.jpg";
            }    
            else if (selectRepo.repoName == "fanControlReadMe") {
                repoImage = "./static/images/fan.jpg";
            }
            else if (selectRepo.repoName == "Hvac_controlReadme") {
                repoImage = "./static/images/hvac.jpg";
            }    
            else if (selectRepo.repoName == "solarterrestrialdata") {
                repoImage = "./static/images/solaRepoImage.jpg";
            }   
            else {
                repoImage = "https://image.flaticon.com/icons/svg/25/25231.svg";
            }

            document.getElementById('displayRepos').innerHTML += `<div class="col-lg-4 col-md-6 mx-auto card-col"><a class="card-a" 
            href="${selectRepo.repoURL}" target="_blank"><div class="card">
            <img class="card-img-top" id="cardImageSrc" src="${repoImage}" alt="repo image">
            <div class="card-body"><h5 class="card-title">${selectRepo.repoName}</h5>
            <p class="card-text">${selectRepo.description}</p></div></div></a></div>`;
        }
    }
    // Shows the new footer
    document.getElementById('tempFooter').classList.add("tempFooterShow");
}
