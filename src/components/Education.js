
import React from "react";

function Education(props) {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div className="w-100">
                <h2 className="mb-5">Education</h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">United International university.</h3>
                        <div className="subheading mb-3">Bachelor of Science</div>
                        <div>Computer Science - Robotics, IoT and Mechine Learning Track</div>
                        {/*<p>GPA: 3.23</p>*/}
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">August 2014 - December 2019</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div className="resume-content">
                        <h3 className="mb-0">Saint Joseph Higher Secondary School</h3>
                        <div className="subheading mb-3">HSC. in Science</div>
                        {/*<p>GPA: 3.56</p>*/}
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">August 2011 -  August 2013</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div className="resume-content">
                        <h3 className="mb-0">Mohammadpur Model School And College</h3>
                        <div className="subheading mb-3">SSC. in Science</div>
                        {/*<p>GPA: 3.56</p>*/}
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">January 2000 -  December 2011</span>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Education;