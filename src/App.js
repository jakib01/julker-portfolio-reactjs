// import './css/bootstrap.min.css';
// import './css/all.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './css/resume.min.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <div className="container-fluid p-0">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
