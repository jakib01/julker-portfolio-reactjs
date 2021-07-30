import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './css/resume.min.css';
import Navbar from './components/Navbar'
import About from './components/About';
import Publications from './components/Publications';
import WorkingExperience from './components/WorkingExperience';
import Research from './components/Research';
import Education from './components/Education';
import Skills from './components/Skills';
import WebProjects from './components/WebProjects';
import HardwareProjects from './components/HardwareProjects';
import Awards from './components/Awards';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <div className="container-fluid p-0">
                    <Switch>
                        <Route exact path="/" component={About}/>
                        <Route exact path="/publications" component={Publications}/>
                        <Route exact path="/working-experience" component={WorkingExperience}/>
                        <Route exact path="/research" component={Research}/>
                        <Route exact path="/education" component={Education}/>
                        <Route exact path="/skills" component={Skills}/>
                        <Route exact path="/web-projects" component={WebProjects}/>
                        <Route exact path="/hardware-projects" component={HardwareProjects}/>
                        <Route exact path="/awards" component={Awards}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
