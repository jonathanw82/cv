"use strict";

let page_footer = `		
<div class="container-fluid">
<div class="row">
    <div class="col-sm-12">
        <a href="https://www.linkedin.com/in/jonathan-wheway/" target="_blank"><i class="fab fa-linkedin footer-icon" aria-hidden="true"></i></a>
        <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-square footer-icon" aria-hidden="true"></i></a>
        <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube-square footer-icon" aria-hidden="true"></i></a>
        <a href="https://github.com/jonathanw82" target="_blank"><i class="fab fa-github-square footer-icon"></i></a><br>
        <div class="copyright-footer" >Copyright-&copy; 2019-<script> document.write(new Date().getFullYear()); </script><a> Jonwhewaycode</a></div>
    </div>
</div>
</div>`;

let index_page = `<div class="container">
<a href="#" class="scrollToTop"><i class="fas fa-arrow-up scrolltotopicon"></i></a>
<div class="row">
    <div class="col-sm-4 avatar-col">
        <img class="avatar-image" src="./static/images/avatar.jpg" alt="Avatar Image">
    </div>
    <div class="col-sm-8 title-text">
        <div class="title">Full Stack Developer</div>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm-12">
        <p class="about-heading">About Me & What I Can offer You</p>
        <p class="about-text">
            Formerly from a background in primarily engineering, I retrained as a web developer,
            bringing with me a love of problem-solving, strong attention to detail and a focus on UX.
            Throughout my career, I have worked in highly skilled roles that involved interacting with the public
            and colleagues to find practical solutions to technical problems. My career change was prompted by
            discovering a love for writing code to benefit my own projects working with microcontrollers and
            automation.
        </p>
        <p class="about-text">
            My current skill set is
            focused on HTML5, CSS3, Javascript, jQuery, Python3, Flask, Django, Mysql, MongoDB, AWS and C++, but I am
            currently upskilling in React.js and PHP. <br>I am a highly focused and driven individual who is used to
            working independently, however, I enjoy collaborative working and the opportunity to learn from others.
            I am a quick learner and always on the lookout for a new challenge, whether it be in coding, electronics
            or attempting to cultivate veg on my allotment.
        </p>
        <p class="about-heading">Contact Me</p>
        <p class="about-text">
            For more infomation contact me on <a href="#" onclick="nav('contact')"><span
                    class="email-address">Jonwhewaycode@gmail.com</span></a>.
        </p>
    </div>
</div>
</div>
<div class="emptyDiv"></div>`;

let resume_page = `<div class="container">
<a href="#" class="scrollToTop"><i class="fas fa-arrow-up scrolltotopicon"></i></a>
<div class="row">
    <div class="col-12">
        <h3 class="section-heading ">My Skills & Work History</h3>
    </div>
</div>
<div class="row">
    <div class="col-10 offset-1 offset-sm-0 col-sm-4 col-md-6">
        <div class="row">
            <div class="col-2">
                <i class="reasons-icon fas fa-tools" aria-hidden="true"></i>
            </div>
            <div class="col-10">
                <div class="reasons-heading ">Diagnosis and Fault Finding</div>
                <p> I have years of experience in diagnosis and fault finding of sound electronics,
                    audio equipment and coin-operated machinery.</p>
            </div>
        </div>
    </div>
    <div class="col-10 offset-1 offset-sm-0 col-sm-4 col-md-6">
        <div class="row">
            <div class="col-2">
                <i class="reasons-icon fas fa-wrench" aria-hidden="true"></i>
            </div>
            <div class="col-10">
                <div class="reasons-heading ">Other Skills</div>
                <p> Over the years I have gained experience in repair of white goods,
                    hot tub repair and maintenance, satellite installations and even
                    refurbishment of pool tables.
                </p>
            </div>
        </div>
    </div>
</div>

<hr> <!-- horizontal line  -->

<div class="row">
    <div class="col-12">
        <h3 class="section-heading">Wed Development</h3>
    </div>
</div>
<div class="row">
    <div class="col-10 offset-1 offset-sm-0 col-sm-4 col-md-6">
        <div class="row">
            <div class="col-2">
                <i class="reasons-icon fas fa-laptop-code" aria-hidden="true"></i>
            </div>
            <div class="col-10">
                <div class="reasons-heading ">Front End</div>
                <p>I'm skilled in User Experience Design using the trinity of HTML5, CSS3, Javascript,
                    with technologies such as jQuery, Bootstrap and Materialize.
                    I can also utilise wireframe software such as Balsamiq and graphics
                    software such as Photoshop.
                </p>
            </div>
        </div>
    </div>
    <div class="col-10 offset-1 offset-sm-0 col-sm-4 col-md-6">
        <div class="row">
            <div class="col-2">
                <i class="reasons-icon fas fa-cogs" aria-hidden="true"></i>
            </div>
            <div class="col-10">
                <div class="reasons-heading ">Back End</div>
                <p>
                    I have experience in data-driven web applications. Many of my projects utilise document-based
                    data.
                    I use Python and Flask in conjunction with MongoDB to process and present information.
                    Also Python and Django with MySQL for eCommerce web based applications.
                </p>
            </div>
        </div>
    </div>
</div>
<div class="row progress-section">
    <div class="col">
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                style="width:90%;">
                <span class="sr-only">90% complete</span>
            </div>
            <span class="progress-type">HTML5</span>
        </div>
        <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                aria-valuemax="100" style="width:80%;">
                <span class="sr-only">80% complete</span>
            </div>
            <span class="progress-type">CSS3</span>
        </div>
        <div class="progress">
            <div class="progress-bar bg-info" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                aria-valuemax="100" style="width:65%;">
                <span class="sr-only">65% complete</span>
            </div>
            <span class="progress-type">JavaScript / jQuery</span>
        </div>
        <div class="progress">
            <div class="progress-bar bg-secondary" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                aria-valuemax="100" style="width:50%;">
                <span class="sr-only">50% complete</span>
            </div>
            <span class="progress-type">C++</span>
        </div>
        <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                aria-valuemax="100" style="width:80%;">
                <span class="sr-only">80% complete</span>
            </div>
            <span class="progress-type">Django / Phython</span>
        </div>
        <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                aria-valuemax="100" style="width:60%;">
                <span class="sr-only">60% complete</span>
            </div>
            <span class="progress-type">SQL / MongoDB</span>
        </div>
    </div>
</div>
<hr> <!-- horizontal line  -->

<div class="whitespace"></div>
<!--=========================== Education Info ===========================-->

<div class="container">
    <div class="row">
        <div class="col-sm-12">
            <h3 class="section-heading">Education & Certification</h3>
        </div>
    </div>
    <div class="row educationRow">
        <div class="col-md-4 image-eduction">
            <img class="educationImages" src="./static/images/ci.png" alt="Code instute image">
        </div>
        <div class="col-md-8 educationInfo">
            <a href="https://codeinstitute.net/" target="_blank" class="educationclick">
                <h5 class="educationHeading">Code Institute</h5>
            </a>
            <div>Diploma in Full Stack Software Development <br><span class="text-muted"> Credit-Rated by Edinburgh
                    Napier University</span></div>
            <span class="text-muted">January 2020 - May 2020</span>
            <li>
                <a href="https://www.credential.net/90eded5b-5e65-48c5-9ba2-331cc224d92e#gs.ackeu7"
                    target="_blank">Diploma in Full Stack Software Development</a>
            </li>
            <li>
                <a href="https://www.credential.net/bf0dadb8-9ffe-4e26-935f-bcdea942e175#gs.955tkk"
                    target="_blank">Diploma in Tech Fundamentals</a>
            </li>
        </div>
    </div>
    <div class="row educationRow">
        <div class="col-md-4 image-eduction">
            <img class="educationImages" src="./static/images/bwc.jpg" alt="Bw College image">
        </div>
        <div class="col-md-8 educationInfo">
            <h5 class="educationHeading">Bridgwater College</h5>
            <div>City & Guilds in Sound Engineering <br> Parts 1 & 2</div>
            <span class="text-muted">September 1998 - June 2000</span>
            <li>
                City & Guilds Pass* (Highest Grade)
            </li>
        </div>
    </div>
</div>

<div class="whitespace"></div>
<!--========================== voluntary work ===========================-->

<div class="row">
    <div class="col-sm-12">
        <h3 class="section-heading">Voluntary Work</h3>
    </div>
</div>
<div class="row educationRow">
    <div class="col-md-4 image-eduction">
        <img class="educationImages" src="/static/images/ebh.jpg" alt="Est bristol Hops">
    </div>
    <div class="col-md-8 educationInfo">
        <h5 class="educationHeading">East Bristol Hops Community Project.</h5>
        <p>
            Mid-September 2020, I took the administration of a community project called East Bristol Hops Growers
            Association.
            <br>
            A collective of over 100 people, who grow hops at home, either in pots or in the ground, in their
            gardens or allotments, balconies etc. A local Bristol brewery then turns the hops into a fantastic
            tasting beer. My position, is to keep the database of growers up to date, organise events such as
            socials, hops collection, grower’s end of season party, public speaking at the events etc.
            <br>
            Since taking on the position, I have created a website, reignited interest in the social media outlets,
            started creating merchandise to push the brand and bring in needed funds, liaised with local news
            sources to cover our events and to bring interest to the project.
        </p>
        <li>
            <a href="http://www.eastbristolhops.co.uk" target="_blank">www.eastbristolhops.co.uk</a>
        </li>
    </div>
</div>


<!--============================ company Info ============================-->

<div class="whitespace"></div>
<!-- Html that is injected by javascript when a particular company is clicked on -->
<div class="row" id="jobinfo"></div>

<div class="row show" id="workhistory">
    <div class="col-sm-12">
        <h3 class="section-heading">Employment History</h3>
        <p class="sub-heading">Select the company for more infomation about responsibilities & infomation.</p>
    </div>
    <div class="col-lg-4 col-md-6 mx-auto card-col" id="slx-start">
    <!-- onclick will fire selectjob function with the company name as the parameter and Javascript will inject work history  -->
    <div class="card cardhover" onclick="selectjob('lettusgrow'); autoScrollToBottom('lettusgrow')" style="width: 18rem;">
        <img class="card-img-top" src="./static/images/lettusgrow.jpg" alt="lettusgrow image">
        <div class="card-body">
            <h5 class="card-title">LettUs Grow</h5>
            <h6 class="card-subtitle mb-2 text-muted">April 2021 – current</h6>
            <p class="card-text">Maintenance Manager</p>
        </div>
    </div>
</div>
    <div class="col-lg-4 col-md-6 mx-auto card-col" id="slx-start">
        <!-- onclick will fire selectjob function with the company name as the parameter and Javascript will inject work history  -->
        <div class="card cardhover" onclick="selectjob('slx'); autoScrollToBottom('slx')" style="width: 18rem;">
            <img class="card-img-top" src="./static/images/slx.jpg" alt="Slx hire image">
            <div class="card-body">
                <h5 class="card-title">SLX Hire</h5>
                <h6 class="card-subtitle mb-2 text-muted">February 2019 – January 2020</h6>
                <p class="card-text">Freelance Theatre Technician</p>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6 mx-auto card-col" id="wogan-start">
        <div class="card cardhover" onclick="selectjob('wogan'); autoScrollToBottom('wogan')" style="width: 18rem;">
            <img class="card-img-top" src="./static/images/wogan.jpg" alt="Wogan coffee image">
            <div class="card-body">
                <h5 class="card-title">Wogan Coffee</h5>
                <h6 class="card-subtitle mb-2 text-muted">June 2018 – February 2019</h6>
                <p class="card-text">Mobile Service Engineer</p>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6 mx-auto card-col" id="jnc-start">
        <div class="card cardhover" onclick="selectjob('jnc'); autoScrollToBottom('jnc')" style="width: 18rem;">
            <img class="card-img-top" src="./static/images/jnc.jpg" alt="Jnc image">
            <div class="card-body">
                <h5 class="card-title">JNC Sales</h5>
                <h6 class="card-subtitle mb-2 text-muted">October 2014 – June 2018</h6>
                <p class="card-text">Service Engineer</p>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6 mx-auto card-col" id="mendip-start">
        <div class="card cardhover" onclick="selectjob('mendip'); autoScrollToBottom('mendip')" style="width: 18rem;">
            <img class="card-img-top" src="./static/images/mendip.jpg" alt="Mendip image">
            <div class="card-body">
                <h5 class="card-title">Mendip Coin Co.</h5>
                <h6 class="card-subtitle mb-2 text-muted">August 2007 – October 2014</h6>
                <p class="card-text">Mobile Service Engineer</p>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6  mx-auto card-col" id="avocet-start">
        <div class="card cardhover" onclick="selectjob('avocet'); autoScrollToBottom('avocet')" style="width: 18rem;">
            <img class="card-img-top" src="./static/images/avocet.jpg" alt="Avocet image">
            <div class="card-body">
                <h5 class="card-title">Avocet Engineering</h5>
                <h6 class="card-subtitle mb-2 text-muted">November 2002 – August 2007</h6>
                <p class="card-text">Audio Visual Engineer</p>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6  mx-auto card-col" id="stage-start">
        <div class="card cardhover" onclick="selectjob('stage'); autoScrollToBottom('stage')" style="width: 18rem;">
            <img class="card-img-top" src="./static/images/stage.jpg" alt="Stage image">
            <div class="card-body">
                <h5 class="card-title">Stage Electrics</h5>
                <h6 class="card-subtitle mb-2 text-muted">January 2001 – November 2002</h6>
                <p class="card-text">Audio Visual Engineer</p>
            </div>
        </div>
    </div>
</div>

</div>

<div class="emptyDiv"></div>`;

let github_page = `<div class="container-fluid bg-image-github">
<div class="emptyDivTop"></div>

<div class="container">
  <a href="#" class="scrollToTop"><i class="fas fa-arrow-up scrolltotopicon"></i></a>
  <div class="row">
    <span id="overlayBox"></span>
    <div class="col-sm-12 git-heading">
      <h2><i class="fab fa-github"></i> GitHub <i class="fab fa-github"></i></h2>
      <p>Please note some of these repos are works in progress or for testing purpose only.<br>
        Direct link to my GitHub <a href="https://github.com/jonathanw82" target="_blank">Here.</a></p>
      <span id="repoNumbers"></span>
      <span id="warning"></span>
    </div>
  </div>
  <div class="row" id="displayRepos">
  </div>
</div>
<div class="emptyDiv"></div>
  <div class="row">
    <div class="col-sm-12 tempFooter" id="tempFooter">
      <a href="https://www.linkedin.com/in/jonathan-wheway/" target="_blank"><i class="fab fa-linkedin footer-icon"aria-hidden="true"></i></a>
      <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-square footer-icon" aria-hidden="true"></i></a>
      <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube-square footer-icon" aria-hidden="true"></i></a>
      <a href="https://github.com/jonathanw82" target="_blank"><i class="fab fa-github-square footer-icon"></i></a><br>
      <div class="copyright-footer" >Copyright-&copy; 2019-<script> document.write(new Date().getFullYear()); </script><a href="{{ url_for ('admin.login') }}" id="nameLoginLink"> Jonathan Wheway</a></div>
    </div>
  </div>
</div>`;

let blog_page = `
<div class="container">
<h2>Blog coming soon</h2>
</div>`

let contact_page = `
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
<script type="text/javascript">(function(){emailjs.init("user_1nquoO6SfyzGNziWhHIs4");})();</script>

<section class="container">
<div class="row formRow">
    <div class="col formBox">
        <span id="overlayBox"></span>
        <h3 class="contact-heading uppercase text-center">Got a project in mind?</h3>
        <h5 class="text-center uppercase">Let's work together!</h5>
        <div class="center-form">
            <form id="contact-form">
                <input type="hidden" name="contact_number">
                <input type="text" name="from_name" id="fullname" class="form-control" placeholder="Name" required>
                <input type="email" name="from_email" id="emailaddress" class="form-control" placeholder="Email" required>
                <textarea  rows="5" name="message_html" id="projectsummery" placeholder="Project description" class="form-control" required></textarea>
                <div class="form-row text-center">
                    <div class="col">
                        <div class="messageSent" id="messageSent"></div>
                        <button type="submit" class="btn btn-secondary" >Send Project Request</button>  
                    </div>
                </div>
            </form>
            <div class="row formHomeButRow" id="formHomeButRow"><a class="btn btn-secondary formHomeButton" href="{{ url_for('index') }}">Home</a></div>
        </div>
    </div>
</div>
</section>`