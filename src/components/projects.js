import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardMenu, CardTitle, IconButton, Button, CardText, CardActions} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

   
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
        <Card shadow= {5} style={{minWidth:'450', margin:'auto'}}>
        <CardTitle style={{color:'#fff', height:'176px', 
        background: 'url(https://hackernoon.com/hn-images/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover'}}>
        </CardTitle>
        <CardText>Random Text 1
        </CardText>
        <CardActions border>
            <Button colored> Github</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share">
            </IconButton>
        </CardMenu>
        </Card>

        <Card shadow= {5} style={{minWidth:'450', margin:'auto'}}>
        <CardTitle style={{color:'#fff', height:'176px', 
        background: 'url(https://hackernoon.com/hn-images/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover'}}>
        </CardTitle>
        <CardText>Random Text 2
        </CardText>
        <CardActions border>
            <Button colored> Github</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share">
            </IconButton>
        </CardMenu>
        </Card>

        </div>
      );
    } 
    
    else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1> This project is done using Java </h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1> This project is done using R </h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1> This project is done using Microservices </h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Java</Tab>
          <Tab>R</Tab>
          <Tab>Microservices</Tab>
        </Tabs>

        <section >
            <Cell col={12}>
                <div className='content'>
                {this.toggleCategories()}
                </div>
            </Cell>
            
            </section>
      </div>
    );
  }
}

export default Projects;
