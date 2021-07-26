import React, { Component } from "react";
import {Grid,Cell} from "react-mdl";
import logo from './logo.jpg';
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

 class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col = {4}>
            <div style = {{textAlign:'center'}}>
              <img
                src = {logo}
                alt = "Profile_Picture"
                style = {{height : '200px'}}
                />
              </div>
              <h2 style={{paddingTop: '2em', fontWeight: 'bold', fontFamily : 'sans-serif'}}> Logka Shunmughum</h2>
              <h4 style = {{color: 'grey', fontWeight: 'bold', fontFamily : 'sans-serif'}}> Full Stack Web Developer</h4>
              <hr style = {{borderTop : '3px solid #833fb2', width : 'auto'}}/>
              <p> Full stack web developer with an overall experience of 4 years. 
                Experienced working in the backend of back-office systems, making integrations with external API’s,
                 and collaborating with developers to integrate applications in order to improve the systems overall performance. Designed 
                 interactive websites and built new features for existing applications using frontend frameworks such as React and Angular.
              </p>
              <hr style = {{borderTop : '3px solid #833fb2', width: 'auto'}}/>
              <h5 style= {{fontWeight :'bolder', color : 'black', fontFamily : 'sans-serif'}}> Address</h5>
              <p>cork, Ireland</p>
              <h5 style= {{fontWeight :'bolder', color : 'black', fontFamily : 'sans-serif'}}>Phone</h5>
              <p>+353899761922</p>
              <h5 style= {{fontWeight :'bolder', color : 'black', fontFamily : 'sans-serif'}}>Mail</h5>
              <p>logkashunmughum@gmail.com</p>
              <h5 style= {{fontWeight :'bolder', color : 'black', fontFamily : 'sans-serif'}}>Website</h5>
              <p>Myswebsite.com</p>
              <hr style = {{borderTop : '3px solid #833fb2', width: 'auto'}}/>


          </Cell>
          <Cell className= "resume-right-col" col = {8}>
            <h2 style= {{fontFamily : 'sans-serif'}}> Experience</h2>
            <Experience
            startDate = "Mar 2017"
            endDate = "Aug 2019"
            companyName = "Wipro Technologies"
            jobName = "Software developer"
            jobDescription = "Developed a stand-alone application that would gather data from the user and validate with 
            the existing data to provide more accurate results. Used Java 8, spring boot, Kafka, and Mongo DB to build the application."
            />

            <Experience
            startDate = "Sep 2019"
            endDate = "Mar 2021"
            companyName = "Infosys Limited"
            jobName = "Senior Software developer"
            jobDescription = "Developed a stand-alone application that would gather data from the user and validate with 
            the existing data to provide more accurate results. Used Java 8, spring boot, Kafka, and Mongo DB to build the application."
            />


          <hr style = {{borderTop : '3px solid #e22947'}} />
          <h2  style= {{fontFamily : 'sans-serif'}}>Education</h2>
       

              <Education
              startYear = "Sep 2020"
              endYear = "Aug 2021"
              schoolName = "University College Cork" 
              schoolDescription = ""
              grades = "1H1 Expected"

                />
              

            <Education
            startYear = "Aug 2012"
            endYear = "May 2016" 
            schoolName = "Anna University " 
            schoolDescription = ""
            grades = {7.67}

            />
          <hr style = {{borderTop : '3px solid #e22947'}} />

          <h2 style= {{fontFamily : 'sans-serif'}}> Skills</h2>
          <Skills
          skills = "Java"
          progress= {80} 
          
/>
          <Skills
          skills = "Springboot"
          progress= {70} 
          
/>
          <Skills
          skills = "Microservices"
          progress= {80} 
          
/>
        <Skills
                  skills = "MongoDB"
                  progress= {60} 
                  
        />
        <Skills
                  skills = "SQL"
                  progress= {70} 
                  
        />
        <Skills
                  skills = "React"
                  progress= {70} 
                  
        />
        <Skills
                  skills = "Angular"
                  progress= {70} 
                  
        />
        <Skills
                  skills = "AWS"
                  progress= {50} 
                  
        />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
