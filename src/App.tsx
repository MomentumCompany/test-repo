import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Docs from './Components/Documentation/Docs';
import NavBar from './Components/Navbar/Navbar';
import SignUp from './Components/Register/SignUp';
import Pricing from './Components/Pricing/Pricing';
import Dashboard from './Components/Dashboard/Dashboard';
import Token from './Components/Token/Token';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <NavBar />
      <Switch>
          <Route exact path="/" component={Docs} />
          <Route path="/register" component={SignUp} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/token" component={Token} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
