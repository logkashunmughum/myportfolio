import React from 'react';

import LandingPage from './landing_page';
import Aboutme from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


import {Switch,Route} from 'react-router-dom';

const Main = () => 
(
    <Switch>
        <Route exact path ="/" component = {LandingPage} />
        <Route  path ="/aboutme" component = {Aboutme} />
        <Route  path ="/contact" component = {Contact} />
        <Route  path ="/projects" component = {Projects} />
        <Route  path ="/resume" component = {Resume} />
    </Switch>
)

export default Main;