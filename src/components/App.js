import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import './App.css';
import Profile from "./profile/Profile";
import About from "./about/About";
import AuthMain from "./auth/AuthMain";
import Review from "./review/Review";
import NotFound from "./NotFound";
import Landing from "./Landing/Landing"

function App() {
  return (
    <div className="App container-fluid">
      <Router>
       
        <div className="app_body">
          <Switch>
          <Route exact path="/" component={Landing} />
          
            <Route exact path="/home" component={Home} />
            <Route path="/review" component={Review} />
            <Route path="/profile" component={Profile} />
            <Route path="/about" component={About} />
            <Route path="/auth" component={AuthMain} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
