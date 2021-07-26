import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component{
    render(){
        return(
            <Grid>
                <Cell col = {4}> 
                    <p style = {{marginTop: '0px', fontFamily : 'sans-serif'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col = {4}>
                    <p style = {{marginTop: '0px', fontFamily : 'sans-serif'}}> {this.props.schoolName}</p>
                    
                </Cell>

                <Cell col = {4}>
                    <p style = {{marginTop : '0px', fontFamily : 'sans-serif'}}> {this.props.grades}</p>
                </Cell>

            </Grid>
        )
        
    }
}

export default Education;