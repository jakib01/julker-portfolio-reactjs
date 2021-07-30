import React from "react";

function Navbar(props) {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Julker Nien Akib</span>
                <span className="d-none d-lg-block">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="images/profile.jpg" alt=""/>
      </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger text-justify float-left" href="#about">About</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger text-justify float-left"
                           href="#publications">publications</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger text-justify float-left" href="#workingExperience">Working
                            Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger text-justify float-left" href="#research">Research</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger text-justify float-left"
                           href="#education">Education</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger text-justify float-left" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger text-justify float-left" href="#webProjects">Web
                            Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger text-justify float-left" href="#projects">Hardware
                            Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger text-justify float-left"
                           href="#awards">Awards/Achievement</a>
                    </li>
                </ul>
            </div>
        </nav>


    );
}

export default Navbar;