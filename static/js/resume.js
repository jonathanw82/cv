"use strict";

/* Selectjob function takes the onclick on the company cards and uses the company name as
the parameter to pass through to company, depending on what name as been passed, the if statments
manipulate the dom with the relavent infomation */

function selectjob(company) {
    if(company == 'lettusgrow'){
        document.getElementById('jobinfo').innerHTML = lettusgrowjobroll;
    }
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
    else if (company == 'stage') {
        document.getElementById('jobinfo').innerHTML = stagejobroll;
    }

    document.getElementById('jobinfo').className = "row show";
    document.getElementById('workhistory').className = "hide";
    document.getElementById('backbutton').className = "show";
}

function back(back) {
    // The Back function changed the class names to adjust the css to 
    // hide or show parts of the dom. In this case it hides the jobinfo and displays the work history.
    document.getElementById('workhistory').className = "row show";
    document.getElementById('jobinfo').className = "hide";
    document.getElementById(back).scrollIntoView({behavior: 'smooth'});
}

// There variables contain the relevent infomation for each job roll and when
// called are displayed in the dom. 

let lettusgrowjobroll = `<div class="col-lg-4 card-col" >
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="./static/images/lettusgrow.jpg" alt="lettusgrow image">
                            <div class="card-body">
                                <h5 class="card-title">LettUs Grow Ltd</h5>
                                <h6 class="card-subtitle mb-2 text-muted">April 2021 – current</h6>
                                <p class="card-text">Maintenance Manager</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 mobilCompanyInfo" id="lettusgrow">
                        <h3 class="jobrespon" id="lineUpToResp">LettUs Grow</h3>
                        <div><a href="https://www.lettusgrow.com" target="_blank">https://www.lettusgrow.com</a></div>
                        <span>Unit 4, Avon Valley Business Park, Chapel Way, Brislington, Bristol BS4 4EU</span>
                        <h4 >Responsibilities: Maintenance Manager</h4>
                        <li>
                            Manage maintenance engineers schedules, well-being, learning and development including, 
                            holding regular 1:1, deligating jobs, managing holiday and sic days and finding the best learning and development projets for each individual engineer.
                        </li>
                        <li>
                            Fault finding and repair of cutting edge Aeroponic vertical farms, including Glass houses.
                        </li>
                        <li>
                            Design, build and write code for prototype projects such as fanspeed controllers and Hvac controllers.
                        </li>
                        <li>
                            Make bespoke wiring looms for customers specialized needs. 
                        </li>
                        <li>
                            Build Drop&Grow &trade; containers 
                        </li>
                        <div class="backToTopButton">
                        <span class="hide" id="backbutton"><a class="btn btn-info backbutton" onclick="back('slx-start')"><i
                        class="fas fa-arrow-left"></i> Back to Employment</a></span></div></div>`;


let slxjobroll = `<div class="col-lg-4 card-col" >
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="/static/images/slx.jpg" alt="Slx hire image">
                            <div class="card-body">
                                <h5 class="card-title">SLX Hire</h5>
                                <h6 class="card-subtitle mb-2 text-muted">February 2019 – current</h6>
                                <p class="card-text">Freelance Theatre Technician</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 mobilCompanyInfo" id="slx">
                        <h3 class="jobrespon" id="lineUpToResp">SLX Hire & Events</h3>
                        <div><a href="https://www.slx.co.uk/" target="_blank">https://www.slx.co.uk/</a></div>
                        <span>Unit 115, Severnside Trading Estate, Burcott Rd, Avonmouth, Bristol BS11 8AF</span>
                        <h4 >Responsibilities: Freelance Theatre Technician</h4>
                        <li>
                            Fault finding and repair of top-line theatre equipment (Including digital moving head lighting,
                            led par cans, audio equipment, stage rigging and high intensity power distribution.
                        </li>
                        <li>
                            Inspect, test and clean all parts ready for hire. 
                        </li>
                        <li>
                            Make bespoke wiring looms for customers specialized needs. 
                        </li>
                        <li>
                            Pick orders for specific shows.
                        </li>
                        <li>
                            Demonstrate equipment in preshow area.
                        </li>
                        <li>
                            Load & unload kit to meet shows tight time criteria.
                        </li>
                        <div class="backToTopButton">
                        <span class="hide" id="backbutton"><a class="btn btn-info backbutton" onclick="back('slx-start')"><i
                        class="fas fa-arrow-left"></i> Back to Employment</a></span></div></div>`;
                        


let woganjobroll = ` <div class="col-lg-4 card-col">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="/static/images/wogan.jpg" alt="Wogan coffee image">
                        <div class="card-body">
                            <h5 class="card-title">Wogan Coffee</h5>
                            <h6 class="card-subtitle mb-2 text-muted">June 2018 – February 2019</h6>
                            <p class="card-text">Mobile Service Engineer</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-8 mobilCompanyInfo" id="wogan">
                    <h3 class="jobrespon" id="lineUpToResp">Wogan Coffee</h3>
                        <div><a href="https://wogancoffee.com/" target="_blank">https://wogancoffee.com</a></div>
                        <span>Roastery & Production Headquarters, 5-8 Elton Street, Bristol, BS2 9EH</span>
                        <h4 >Responsibilities: Mobile Service Engineer</h4>
                            <li>
                                Fault finding and repair of Espresso machines, Coffee Grinders, Water Boilers.
                            </li>
                            <li>
                                Full restoration stripdown and rebuild of Espresso machines.
                            </li>
                            <li>
                                Installation of new and used machinery. 
                            </li>
                            <li>
                                Customer liaison, providing face to face and phone advice and technical support.
                            </li>
                            <li>
                                Running preventative maintenance schedules and on-call evening and weekend service.
                            </li>
                            <li>
                                Stock management of spare parts.  
                            </li>
                     <div class="backToTopButton">
                    <span class="hide" id="backbutton"><a class="btn btn-info backbutton" onclick="back('wogan-start')"><i
                                class="fas fa-arrow-left"></i> Back to Employment</a></span></div></div>`;


let jncjobroll = `<div class="col-lg-4 card-col">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="/static/images/jnc.jpg" alt="Jnc image">
                        <div class="card-body">
                            <h5 class="card-title">JNC Sales</h5>
                            <h6 class="card-subtitle mb-2 text-muted">October 2014 – June 2018</h6>
                            <p class="card-text">Service Engineer</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-8 mobilCompanyInfo" id="jnc">
                        <h3 class="jobrespon" id="lineUpToResp">JNC Sales</h3>
                        <div><a href="http://www.jnc-sales.co.uk/" target="_blank">http://www.jnc-sales.co.uk/</a></div>
                        <span>Unit 1 CCT Building, Greensplott Road, Chittening Trading Estate, Avonmouth, Bristol, BS11 0YB</span>
                        <h4 >Responsibilities: Service Engineer</h4>
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
                     <div class="backToTopButton">
                    <span class="hide" id="backbutton"><a class="btn btn-info backbutton" onclick="back('jnc-start')"><i
                                class="fas fa-arrow-left"></i> Back to Employment</a></span></div></div>`;


let mendipjobroll = `<div class="col-lg-4 card-col">
                    <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="/static/images/mendip.jpg" alt="Mendip image">
                        <div class="card-body">
                            <h5 class="card-title">Mendip Coin Co.</h5>
                            <h6 class="card-subtitle mb-2 text-muted">August 2007 – October 2014</h6>
                            <p class="card-text">Mobile Service Engineer</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-8 mobilCompanyInfo" id="mendip">
                        <h3 class="jobrespon" id="lineUpToResp">Mendip Coin Co.</h3>
                        <span>Barton Lower Farm Gosling St, Barton St. David, Somerton, TA11 6GS</span>
                        <h4 >Responsibilities: Mobile Service Engineer</h4>
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
                     <div class="backToTopButton">
                    <span class="hide" id="backbutton"><a class="btn btn-info backbutton" onclick="back('mendip-start')"><i
                                class="fas fa-arrow-left"></i> Back to Employment</a></span></div></div>`;


let avocetjobroll = `<div class="col-lg-4 card-col">
                    <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="/static/images/avocet.jpg" alt="Avocet image">
                        <div class="card-body">
                            <h5 class="card-title">Avocet Engineering</h5>
                            <h6 class="card-subtitle mb-2 text-muted">January 2002 – August 2007</h6>
                            <p class="card-text">Audio Visual Engineer</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-8 mobilCompanyInfo" id="avocet">
                        <h3 class="jobrespon" id="lineUpToResp">Avocet Engineering - StackaStage </h3>
                        <div><a href="https://www.avoeng.com" target="_blank">https://www.avoeng.com</a></div>
                        <div><a href="https://stackastage.com" target="_blank">https://stackastage.com</a></div>
                        <span>Unit 2, Elborough Farm, Banwell Road, Locking, Weston Super Mare, BS24 8PB</span>
                        <h4 >Responsibilities: Audio Visual Engineer</h4>
                            <li>
                                Design, build and manage installations of bespoke audio visual and lighting systems 
                                in a range of publicly accessible venues, including concert halls, schools and clubs. 
                                This work including hearing loop systems for local authority conference contracts.
                            </li>
                            <li>
                                Management of company eCommerce payment systems and the company website.
                            </li>
                            <li>
                                Management of warehouse and despatch operations and procedures.
                            </li>
                            <li>
                                Stock control, including purchasing.
                            </li>
                            <li>
                                Supervise repair & maintenance team.
                            </li> 
                            <li>
                                Repair and service of top-line audio visual equipment (Including, Martin, Abstract, Chauvet, le Maitre, 
                                Technics, Robe, Sennheiser, Denon, Pioneere, Rodec, Pearl, Thomas and Media theme). 
                            </li>               
                    <div class="backToTopButton">
                    <span class="hide" id="backbutton"><a class="btn btn-info backbutton" onclick="back('avocet-start')"><i
                                class="fas fa-arrow-left"></i> Back to Employment</a></span></div></div>`;    


let stagejobroll = `<div class="col-lg-4 card-col">
                    <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="/static/images/stage.jpg" alt="Stage image">
                        <div class="card-body">
                            <h5 class="card-title">Stage Electrics</h5>
                            <h6 class="card-subtitle mb-2 text-muted">January 2002 – August 2007</h6>
                            <p class="card-text">Audio Visual Engineer</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-8 mobilCompanyInfo" id="stage">
                        <h3 class="jobrespon" id="lineUpToResp">Stage Electrics </h3>
                        <div><a href="https://www.stage-electrics.co.uk" target="_blank">https://www.stage-electrics.co.uk</a></div>
                        <span>Stage Electrics, Encore House, Unit 3 Britannia Rd, Patchway Trading Estate, Patchway, Bristol, BS34 5TA</span>
                        <h4 >Responsibilities: Audio Visual Engineer</h4>
                            <li>
                                Receive hire equipment back into the warehouse sort and distribute to necessary teams.
                            </li>
                            <li>
                                Maintain Stock control.
                            </li>
                            <li>
                                Prepare power cables and lighting systems for hire.
                            </li>
                            <li>
                                Work within the service department repairing lighting and sound equipment
                            </li>             
                    <div class="backToTopButton">
                    <span class="hide" id="backbutton"><a class="btn btn-info backbutton" onclick="back('stage-start')"><i
                                class="fas fa-arrow-left"></i> Back to Employment</a></span></div></div>`;                      