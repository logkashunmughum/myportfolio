import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Experience extends Component{
    render(){
        return(
            <Grid>
                <Cell col = {4}>
                    <p>{this.props.startDate} - {this.props.endDate}</p>
                </Cell>
                <Cell col = {8}>
                    <h4 style = {{marginTop : '0px', float:'right', fontFamily: 'sans-serif'}}> {this.props.companyName}</h4>
                    <h4 style = {{marginTop : '0px', float:'left', fontFamily: 'sans-serif'}}> {this.props.jobName}</h4>
                    <p style = {{ float: 'left'}}> {this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;