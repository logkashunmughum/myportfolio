
import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import logo from './logo.jpg'

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                         <h2> Logka Shunmughum</h2>
                         <img
                            src={logo}
                            alt="logo"
                            style={{height:250}}    ></img>    
                            <p style={{width: '75%', margin:'auto', paddingTop:'1em'}}>
                                Thanks a lot for visting my portfolio!<br/>
                                If you feel I can some way render my service to your organization please feel free to contact me!
                            </p>
                    
                    </Cell> 
                    <Cell col={6}> 
                        <h2> Contact Me </h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style= {{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className ="fa fa-phone" aria-hidden="true"/>
                                     +353899761922
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent style= {{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className ="fa fa-linkedin" aria-hidden="true"/>
                                    Logkashunmughum C
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent style= {{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className ="fa fa-envelope" aria-hidden="true"/>
                                    logkashunmughum@gmail.com
                                </ListItemContent>
                            </ListItem>
                            </List>
                        </div>
                    </Cell> 

                </Grid>
               
            </div>
        )
    }
}

export default Contact;