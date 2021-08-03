import React from "react";

function Research(props) {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="research">
            <div className="w-100">
                <h2 className="mb-5">Research</h2>

                <div className="resume-item d-flex flex-column ">


                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5 ">
                        <div className="resume-content">
                            <h3 className="mb-3">The Next Generation Multifunctional Window System</h3>
                            <p>In the era of digitalization and automation, individuals endlessly need to switch
                                previous manual operating systems. During this paper, Authors tend to describe the
                                Window automation system framework, and that they demonstrate here however it works and
                                additionally describes all functions. This window is one type of distinctive good window
                                that may gather its nearest condition info and end its activity like open, close, and
                                send knowledge to the man of affairs, using IoT. It tends to be controlled by physical
                                and autonomous (automated and internet applications). It will quantify the thickness of
                                residue, dampness, temperature, and it additionally will determine gas, water (rain or
                                snow), smoke, light, fire, dust, once distinguishing it took immediate actions supported
                                matters. Here, the actions are; open and close the window receive commands from the
                                user, and send collected knowledge to the user. At long last, authors have directed some
                                real tests of assorted kinds of the sensing element for the shrewd window framework.
                                <a href="https://doi.org/10.1007/978-981-16-2094-2_25"> paper link</a>
                            </p>
                            <div className="row">
                                <div className="col">
                                    <img className="img-fluid" width="80%" src="images/window.jpg" alt=""/>
                                </div>
                                <div className="col">
                                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                                    <iframe width="460" height="285"
                                            src="https://www.youtube.com/embed/EA6hQUu9bXQ?autoplay=0"/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-3">Road Surface Assessment Using Ultrasonic Sensor</h3>
                            <p>This work examines the method of classification of road surface based on
                                backscattered
                                ultrasonic signal analysis. The fancy of our study is the extraction of signal
                                features
                                for individual sections (sectioning) of the illuminated surface and the widespread
                                use
                                of statistics in real-way and off-road driving conditions. Defects caused by the
                                impact
                                of environmental conditions and the movement of vehicles were, analysed, and ways to
                                reduce them were suggested. The results demonstrate the feasibility of reliable
                                surface
                                classification using the proposed methodology. The current demand and the
                                still-unsolved
                                challenge is to provide remote real-time identification of road surface conditions
                                in
                                both complex environments (off-road terrain, liquid dirt etc.) and weather
                                conditions
                                (rain, spray, fog, snow etc.). In this paper, the feasibility of a short-range
                                ultrasonic sensing system is investigated. Along with other sensor technologies such
                                as
                                infrared, radar, LIDAR and visible light, the use of ultrasonic signal for surface
                                classification by roughness and surface textures has been investigated in many
                                studies.</p>

                        </div>
                    </div>


                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-3">Emotion Classification From Bangla Audio</h3>

                            <p>Speech recognition is now an area where a lot of research is being done. Our main
                                goal is to have emotion Detection by voice through the machine for Bangla language.
                                Bangla-Voice-DB is a database by which we can detect emotions. This database is the
                                gender balance where the audio clip of 20 actors has been collected. All the voices
                                have been recorded in the ongoing Bengali language where eight types of emotions can
                                detect. Speech includes neutral, calm, happy, sad, angry, fearful, surprise, and disgust
                                expressions. Every actor has recorded 60 audio clips and each clip has been recorded
                                for eight emotions, with eight different counters each. Total estimates have been made
                                from 1200 recordings of 20 people. In this paper, we used the high pass filter to get
                                good results. High pass filter is used to remove noise. Feature extraction is very
                                important for our paper, so we used mel Frequency cepstrum coefficient (MFCC) as feature
                                extraction. We have followed two methods as a feature selection, first, we have used
                                the random forest. We didn’t get very good results from the random forest, Then we used
                                the neural network to achieve good results as our main classifier is a feasible
                                technique for the emotional classification. The results show that the neural network
                                used as a
                                classifier is a potential technique for emotional classification.</p>
                            <div className="col" align="justify-content-center">
                                <img className="img-fluid" width="50%" src="images/Bangla.png" alt=""/>
                            </div>
                        </div>
                    </div>


                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-3">Doctors Handwriting Recognition Using Machine Learning</h3>
                            <p>Offline handwritten character recognition is a process where a machine will recognize
                                what is written in an image of handwritten script. We are going to recognize
                                doctor’s handwriting from a prescription. So the selection of a good feature extraction
                                method is the most important factor. Because if we want to achieve high recognition
                                performance with much better accuracy we must have to select good feature extraction
                                method. We
                                want to develop an OCR agent which will detect doctor’s handwriting from prescription.
                                Our main target is building a medicine website where people will upload their
                                prescription image and our agent will detect out the medicine names. So to do that we
                                have to
                                apply various techniques to extract information from images. Image Processing, Machine
                                Learning, and Machine Translation are some key part of our project.</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default Research;