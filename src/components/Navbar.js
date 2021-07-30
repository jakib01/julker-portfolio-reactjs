import React from "react";
import { Link } from 'react-router-dom';

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
                        <Link className="nav-link js-scroll-trigger text-justify float-left"  to="/">About</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger text-justify float-left"
                              to="/publications">publications</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger text-justify float-left" to="/working-experience">Working Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger text-justify float-left" to="/research">Research</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger text-justify float-left" to="/education">Education</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger text-justify float-left" to="/skills">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger text-justify float-left" to="/web-projects">Web Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger text-justify float-left" to="/hardware-projects">Hardware Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger text-justify float-left" to="/awards">Awards/Achievement</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;