/* Selectjob function takes the onclick on the company cards and uses the company name as
the parameter to pass through to company, depending on what name as been passed, the if statments
manipulate the dom with the relavent infomation */

function selectjob(company) {

    if (company == 'slx') {
        document.getElementById('jobinfo').innerHTML = slxjobroll;
    }
    else if (company == 'wogan') {
        document.getElementById('jobinfo').innerHTML = woganjobroll;
    }
    else if (company == 'jnc') {
        document.getElementById('jobinfo').innerHTML = jncjobroll;
    }
    else if (company == 'mendip') {
        document.getElementById('jobinfo').innerHTML = mendipjobroll;
    }
    else if (company == 'avocet') {
        document.getElementById('jobinfo').innerHTML = avocetjobroll;
    }

    document.getElementById('jobinfo').className = "row show";
    document.getElementById('workhistory').className = "hide";
    document.getElementById('backbutton').className = "show";
};

function back() {
    // The Back function changed the class names to adjust the css to 
    // hide or show parts of the dom. In this case it hides the jobinfo and displays the work history.
    document.getElementById('workhistory').className = "row show";
    document.getElementById('jobinfo').className = "hide";
    document.getElementById('backbutton').className = "hide";
}

// There variables contain the relevent infomation for each job roll and when
// called are displayed in the dom. 

var slxjobroll = `<div class="col-lg-4 card-col">
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="/static/images/slx.jpg" alt="Slx hire image">
                            <div class="card-body">
                                <h5 class="card-title">SLX Hire</h5>
                                <h6 class="card-subtitle mb-2 text-muted">February 2019 – current</h6>
                                <p class="card-text">Freelance Theatre Technician</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 mobilCompanyInfo">
                        <h3 class="jobrespon" id="lineUpToResp">SLX Hire & Events</h3>
                        <div><a href="https://www.slx.co.uk/" target="_blank">https://www.slx.co.uk/</a></div>
                        <span>Unit 115, Severnside Trading Estate, Burcott Rd, Avonmouth, Bristol BS11 8AF</span>
                        <h4 >Responsibilities:</h4>
                        <li>
                            Fault finding and repair of top-line theatre equipment (Including digital moving head lighting,
                            led par cans, audio equipment, stage rigging and high intensity power distribution.
                        </li>
                        <li>
                            Inspect, test and clean all parts ready for hire. 
                        </li>
                        <li>
                            Make bespoke wiring looms for specific shows. 
                        </li>
                    </div>`;


var woganjobroll = ` <div class="col-lg-4 card-col">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="/static/images/wogan.jpg" alt="Wogan coffee image">
                        <div class="card-body">
                            <h5 class="card-title">Wogan Coffee</h5>
                            <h6 class="card-subtitle mb-2 text-muted">June 2018 – February 2019</h6>
                            <p class="card-text">Mobile Service Engineer</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-8 mobilCompanyInfo">
                    <h3 class="jobrespon" id="lineUpToResp">Wogan Coffee</h3>
                        <div><a href="https://wogancoffee.com/" target="_blank">https://wogancoffee.com</a></div>
                        <span>Roastery & Production Headquarters, 5-8 Elton Street, Bristol, BS2 9EH</span>
                        <h4 >Responsibilities:</h4>
                            <li>
                                Fault finding and repair of Espresso machines, Coffee Grinders, Water Boilers.
                            </li>
                            <li>
                                Installation of new and used machinery. 
                            </li>
                            <li>
                                Stock management of spare parts  
                            </li>
                    </div>`;


var jncjobroll = `<div class="col-lg-4 card-col">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="/static/images/jnc.jpg" alt="Jnc image">
                        <div class="card-body">
                            <h5 class="card-title">JNC Sales</h5>
                            <h6 class="card-subtitle mb-2 text-muted">October 2014 – June 2018</h6>
                            <p class="card-text">Mobile Service Engineer</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-8 mobilCompanyInfo">
                        <h3 class="jobrespon" id="lineUpToResp">JNC Sales</h3>
                        <div><a href="http://www.jnc-sales.co.uk/" target="_blank">http://www.jnc-sales.co.uk/</a></div>
                        <span>Unit 1 CCT Building, Greensplott Road, Chittening Trading Estate, Avonmouth, Bristol, BS11 0YB</span>
                        <h4 >Responsibilities:</h4>
                            <li>
                                Fault finding and restoration coin operated equipment (Including Fruit machines, 
                                Reel based and digital, Juke boxes; CD and Digital, Trivia machines, 
                                Children’s rides and pushers).
                            </li>
                            <li>
                                Graphic design production for advertising materials such as brochures and adverts, 
                                brand and machinery logo production. 
                            </li>
                            <li>
                                Proofing of vinyl printing and cutting products.
                            </li>
                            <li>
                                Supervision and training of new workshop staff.
                            </li>
                            <li>
                                Customer liaison, providing face to face and phone advice and technical support.
                            </li> 
                            <li>
                                Support maintenance of the workshop and workshop equipment. 
                            </li>                 
                    </div>`;


var mendipjobroll = `<div class="col-lg-4 card-col">
                    <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="/static/images/mendip.jpg" alt="Mendip image">
                        <div class="card-body">
                            <h5 class="card-title">Mendip Coin Co.</h5>
                            <h6 class="card-subtitle mb-2 text-muted">August 2007 – October 2014</h6>
                            <p class="card-text">Mobile Service Engineer</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-8 mobilCompanyInfo">
                        <h3 class="jobrespon" id="lineUpToResp">Mendip Coin Co.</h3>
                        <span>Barton Lower Farm Gosling St, Barton St. David, Somerton, TA11 6GS</span>
                        <h4 >Responsibilities:</h4>
                            <li>
                                Using diagnostic systems to fault find and repair electronic machines (Including
                                Fruit machines Reel based and digital, Juke boxes CD and Digital, Trivia machines 
                                and Lotto card machines).
                            </li>
                            <li>
                                Analysing and designing new systems and installing updated equipment (including sound
                                systems, coin operated machines, cctv, intruder alarms and satellite systems).
                            </li>
                            <li>
                                Running the on call system over the weekend, liaising with customers and police as required.
                            </li>
                            <li>
                                Servicing and running preventative maintenance schedules at regular intervals.
                            </li>
                            <li>
                                Occasional weekly collections from and empty machines (including re float on a regular basis) 
                                using collection dockets not data pack pods.
                            </li> 
                            <li>
                                Banking of large sums of cash responsibly and discreetly.
                            </li> 
                            <li>
                                Driving Vans (Including Luton) up to 3.5t to move machines.  
                            </li>               
                    </div>`;


var avocetjobroll = `<div class="col-lg-4 card-col">
                    <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="/static/images/avocet.jpg" alt="Avocet image">
                        <div class="card-body">
                            <h5 class="card-title">Avocet Engineering</h5>
                            <h6 class="card-subtitle mb-2 text-muted">January 2002 – August 2007</h6>
                            <p class="card-text">Audio Visual Engineer</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-8 mobilCompanyInfo">
                        <h3 class="jobrespon" id="lineUpToResp">Avocet Engineering - StackaStage </h3>
                        <div><a href="https://www.avoeng.com" target="_blank">https://www.avoeng.com</a></div>
                        <div><a href="https://stackastage.com" target="_blank">https://stackastage.com</a></div>
                        <span>Unit 2, Elborough Farm, Banwell Road, Locking, Weston Super Mare, BS24 8PB</span>
                        <h4 >Responsibilities:</h4>
                            <li>
                                Design, build and manage installations of bespoke audio visual and lighting systems 
                                in a range of publicly accessible venues, including concert halls, schools and clubs. 
                                This work including hearing loop systems for local authority conference contracts.
                            </li>
                            <li>
                                Management of company e-commerce payment systems and the company website.
                            </li>
                            <li>
                                Management of warehouse and despatch operations and procedures.
                            </li>
                            <li>
                                Stock control, including purchasing.
                            </li>
                            <li>
                                Supervise repair and maintenance team.
                            </li> 
                            <li>
                                Repair and service of audio visual equipment (Including, Martin, Abstract, Chauvet, le Maitre, 
                                Technics, Robe, Sennheiser, Denon, Pioneere, Rodec, Pearl, Thomas and Media theme). 
                            </li>               
                    </div>`;    