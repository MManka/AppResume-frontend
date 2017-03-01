/**
 * Created by Marlin on 2/24/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component{
    render() {
        return(
            <div className = "menu-box">
                <h2 id = "resume">ResuME</h2>
                <li><a href="#contact">Search Templates</a></li>
                <li><a href="#news">My Certifications</a></li>
                <li><a href="#home">My Applications</a></li>
            </div>
        );
    }
}

class Profile extends React.Component {
    render() {
        return(
            <div id = "profile">
                <h1 className = "profileStatus">{this.props.name}</h1>
                <h3 className = "profileStatus">{this.props.status}</h3>
                <h3 className = "profilework">{this.props.work}</h3>
                <img src = {this.props.pic} height = {200}/>

                <br/><br/><br/><br/>
                <button onClick = {this.MyResumesButton.bind(this)}>View Resumes</button>
            </div>
        );
    }

    MyResumesButton(){
        console.log(this);

    }
}



class ProfileInfo extends React.Component {
    render() {
        return(
            <div id = "profile">
                <h2 className = "profileInfoTitle">Work Experience</h2>
                <h3 className = "profileInfo">Shelf Organizer: September 2016- Present</h3>
                <h3 className = "profileInfo">Library Assistant: December 2014-2015</h3>

                <br/><br/>
                <hr></hr>

                <h2 className = "profileInfoTitle">Education</h2>
                <h3 className = "profileInfo">Western University: September 2015- Present</h3>
                <h3 className = "profileInfo">High School Secondary: September 2011- June 2015</h3>

                <br/><br/>
                <hr></hr>

            </div>
        );
    }
}

ReactDOM.render(<Menu/>, document.getElementById('menu'));
ReactDOM.render(<Profile name = "Marlin Manka" status = "Student at Western University"  work = "Part-time Librarian" pic = "https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-256.png"/>,document.getElementById('profile-box'));
ReactDOM.render(<ProfileInfo/>, document.getElementById('profile-info'));