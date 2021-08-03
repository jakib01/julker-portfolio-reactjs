import React from "react";

function HardwareProjects(props) {
    return (
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
            <div class="w-100">
                <h2 class="mb-5">Hardware Projects</h2>

                <div class="resume-item d-flex flex-column ">

                    <div class="resume-content">
                        <h3 class="mb-0">UIU Bus live Tracing System</h3>
                        <p>UIU Bus Live is a software to provide UIU Students & faculty members to provide live bus
                            locations during the journey from their home to UIU. This will also provide them real-time
                            bus
                            location & route plan along with a reminder to catch the bus. A mobile application will be
                            available to users & it will be connected to IoT Cloud. On the other hand, an IoT hardware
                            will
                            be installed on each car to track buses in real-time. It is a tool for organizing work
                            balance &
                            save time that before was interrupted by appearing earlier in the bus stand & calling
                            friends &
                            driver to know the bus location.</p>
                        <div class="row">
                            <div class="col">
                                <img class="" width="75%" src="images/gps.JPG" alt=""/>
                            </div>
                            <div class="col">
                                <iframe width="460" height="300"
                                        src="https://www.youtube.com/embed/xDj9efaJrb8?autoplay=0"/>
                            </div>
                        </div>
                    </div>
                    <div class="resume-item d-flex flex-column">
                        <div class="resume-content">
                            <h3 class="mb-0">Battle Bot</h3>
                            <p>This work examines the method of classification of road surface based on backscattered
                                ultrasonic signal analysis. The fancy of our study is the extraction of signal features
                                for
                                individual sections (sectioning) of the illuminated surface and the widespread use of
                                statistics in real-way and off-road driving conditions. Defects caused by the impact of
                                environmental conditions and the movement of vehicles were, analysed, and ways to reduce
                                them were suggested. The results demonstrate the feasibility of reliable surface
                                classification using the proposed methodology. The current demand and the still-unsolved
                                challenge is to provide remote real-time identification of road surface conditions in
                                both
                                complex environments (off-road terrain, liquid dirt etc.) and weather conditions (rain,
                                spray, fog, snow etc.). In this paper, the feasibility of a short-range ultrasonic
                                sensing
                                system is investigated. Along with other sensor technologies such as infrared, radar,
                                LIDAR
                                and visible light, the use of ultrasonic signal for surface classification by roughness
                                and
                                surface textures has been investigated in many studies.</p>
                            <div class="row">
                                <div class="col"><img class="img-fluid" width="80%" src="img/bot1.jpg" alt=""/>
                                </div>
                                <div class="col">
                                    <img class="" width="70%" src="img/bot2.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="resume-item d-flex flex-column">
                        <div class="resume-content">
                            <h3 class="mb-0">Robotic Arm with wheels</h3>
                            <p>This is my first project. The main idea of the project is to pick up some obstacle. This
                                small car can be used in Army or Industrial. Like the can be controlled with controller
                                and
                                detect a bomb or unusual thing that can be harmful for any human that time this car can
                                go
                                that place with the support of the live video stream and can pick up the unusual thing
                                to
                                move somewhere else like if we think of the bomb, this could be useful.</p>
                            <div class="col" align="justify-content-center">
                                <img class="img-fluid" width="30%" src="images/robo.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HardwareProjects;