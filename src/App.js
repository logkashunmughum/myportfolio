

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
        <Header className = "header-color" title={<Link style = {{textDecoration : 'none', color: 'white', fontFamily:'sans-serif'
    }} to="/">My Portfolio</Link>} scroll>
            <Navigation >
                <Link to ="/resume" >Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer  title = "Logka shunmughum">
            <Navigation>
            <Link to ="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
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
