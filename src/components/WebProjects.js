import React from "react";

function WebProjects(props) {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="webProjects">
            <div className="w-100">
                <h2 className="mb-5">Projects</h2>


                <h3 className="header3">Web Project</h3>
                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <ul className="timeline">

                            <li>
                                <h3 className="mb-1">Smart Builder (ERP)</h3>
                                <div className="timeline-subHeading mb-3">ERP for real estate company. Master Builders
                                    Limited using this system.
                                </div>
                                <div className="timeline-subSubHeading">Technology : Laravel, JavaScript, Jquery, AJAX,
                                    MySQL, Bootstrap
                                </div>
                            </li>

                            <li>
                                <h3 className="mb-1">Mukut Kitchen (Warehouse Management)</h3>
                                <div className="timeline-subHeading mb-3">Warehouse management web application for Mukut
                                    Kitchen. It’s an automation of Warehouse management.
                                </div>
                                <div className="timeline-subSubHeading">Technology : Laravel, Jquery, AJAX, MySQL,
                                    Bootstrap
                                </div>
                            </li>

                            <li>
                                <h3 className="mb-1">EME Records - BANGLADESH ARMY (ERP)</h3>
                                <div className="timeline-subHeading mb-3">Bangladesh army is using this project. It’s an
                                    automation of Army management.
                                </div>
                                <div className="timeline-subSubHeading">Technology : ASP.NET, JavaScript, MSSQL</div>
                            </li>

                            <li>
                                <h3 className="mb-1">Dibbo (E-commerce)</h3>
                                <div className="timeline-subHeading mb-3">This is an E-commerce website.</div>
                                <div className="timeline-subSubHeading">Technology : Laravel, Jquery, AJAX, MySQL</div>
                            </li>

                            <li>
                                <h3 className="mb-1">Tourism</h3>
                                <div className="timeline-subHeading mb-3">This website is used for Tourism and user can
                                    hire tour guide
                                </div>
                                <div className="timeline-subSubHeading">Technology : PHP, MySQL</div>
                            </li>

                        </ul>
                    </div>
                </div>


                <h3 className="header3">React js</h3>
                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <ul className="timeline">
                            <li>
                                <h3 className="mb-1">Portfolio</h3>
                                <div className="timeline-subHeading mb-3">Single page without reload web application.
                                    This site is used for Portfolio
                                </div>
                                <div className="timeline-subSubHeading">Technology : React JS, MySQL, Bootstrap</div>
                            </li>
                        </ul>
                    </div>
                </div>


                <h3 className="header3">Mobile Application(Android)</h3>
                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <ul className="timeline">
                            <li>
                                <h3 className="mb-1">UIUBusLive</h3>
                                <div className="timeline-subHeading mb-3">This is a mobile application where google map
                                    fetch GPS data to point a vehicle
                                </div>
                                {/*<div className="timeline-subSubHeading">Technology : React JS, MySQL, Bootstrap</div>*/}
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default WebProjects;