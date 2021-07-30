
// import './css/bootstrap.min.css';
// import './css/all.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/resume.min.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
