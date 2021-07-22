import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                         <h2> Logka Shunmughum</h2>
                         <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height:250}}    ></img>    
                            <p style={{width: '75%', margin:'auto', paddingTop:'1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scramble</p>
                    
                    </Cell> 
                    <Cell col={6}> half page</Cell> 

                </Grid>
               
            </div>
        )
    }
}

export default Contact;