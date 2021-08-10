import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import ActivityCreate from './components/ActivityCreate.jsx'
import Detail from './components/Details'
import ActCreated from './components/ActCreated';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= '/' component= {LandingPage}/>
        <Route exact path= '/home' component= {Home}/>   
        <Route path= '/activity' component= {ActivityCreate}/> 
        <Route path= '/home/:alpha3Code' exact render={({ match }) => {
          return <Detail>{match.params.alpha3Code}</Detail>
        }}/>
        <Route path= '/activities' component={ActCreated}/> 
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
