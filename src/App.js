import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SignIn from './components/auth/SignIn';
import CountrySelector from './components/companyRevenue/countrySelector';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={CountrySelector} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
