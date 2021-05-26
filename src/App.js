

import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom'
import { Component } from 'react';

class App extends Component {
    render(){
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className = "header-color" title="Logka Shunmughum" scroll>
            <Navigation>
                <Link to ="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Logka Shunmughum">
            <Navigation>
                <a href="/">Resume</a>
                <a href="/">Projects</a>
                <a href="/">Aboutme</a>
                <a href="/">Contact</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}}

export default App;
