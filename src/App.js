import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './index.css';
import Services from './Services';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Front from './Front';
import Back from './Back';
import Android from './Android';
import Flutter from './Flutter';
import Blog from './Blog';
import Software from './Software';
import AboutMe from './AboutMe';
import AboutSkills from './AboutSkills';
import AboutLocation from './AboutLocation';
import AboutStats from './AboutStats';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about/me" component={AboutMe} />
        <Route exact path="/about/skills" component={AboutSkills} />
        <Route exact path="/about/stats" component={AboutStats} />
        <Route exact path="/about/location" component={AboutLocation} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/services/front" component={Front} />
        <Route exact path="/services/back" component={Back} />
        <Route exact path="/services/android" component={Android} />
        <Route exact path="/services/flutter" component={Flutter} />
        <Route exact path="/services/blog" component={Blog} />
        <Route exact path="/services/software" component={Software} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
