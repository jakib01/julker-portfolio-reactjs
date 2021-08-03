import React from "react";

function WebProjects(props) {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="webProjects">
            <div className="w-100">
                <h2 className="mb-5">Projects</h2>
                <h3>Web Project</h3>
                <ul className="fa-ul mb-5">
                    <li>
                        <a href="https://github.com/jakib01/Gallary-Foods-Limited" >1.
                            E-commerce(Dibbo).</a>
                    </li>
                    <li>
                        <a href="https://github.com/jakib01/TourismBD" >2. Tourism.</a>
                    </li>
                    <li>
                        <a href="https://github.com/jakib01/Gallary-Foods-Limited" >3. ERP.</a>
                    </li>
                    <li>
                        <a href="https://github.com/jakib01/Gallary-Foods-Limited" >4.
                            Patient-Treatment.</a>
                    </li>
                </ul>
                <h3>React</h3>
                <ul className="fa-ul mb-5">
                    <li>
                        <a href="https://github.com/jakib01/CRUD-table-React" >1. React
                            table CRUD for with Restful API.</a>
                    </li>
                    <li>
                        <a href="https://github.com/jakib01/React-Learning" >2. React Best
                            Learning Practice.</a>
                    </li>
                </ul>
                <h3>Mobile Application(Android)</h3>
                <ul className="fa-ul mb-5">
                    <li>
                        <a href="https://github.com/jakib01/UIUBusLive">1. UIUBusLive</a>
                    </li>
                    {/*style="text-size: 5px"*/}
                </ul>

            </div>
        </section>
    );
}

export default WebProjects;