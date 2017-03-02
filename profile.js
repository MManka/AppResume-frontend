/**
 * Created by Marlin on 2/24/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

class Menu extends React.Component{
    render() {
        return(
            <div className = "menu-box">
                <h2 id = "resume">ResuME</h2>
                <icon><img src = {this.props.icon} height = {90}/></icon>
                <li><a href="index.html">Search Templates</a></li>
                <li><a href="#certifications">My Certifications</a></li>
                <li><a href="#applications">My Applications</a></li>
            </div>
        );
    }
}

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state={ height: 200
        };
    }

    render() {
        return(
            <div id = "profile">
                <h1 className = "profileStatus">{this.props.name}</h1>
                <h3 className = "profileStatus">{this.props.status}</h3>
                <h3 className = "profilework">{this.props.work}</h3>
                <img src = {this.props.pic} height = {this.state.height}/>
                <circularbtn onClick = {this.ProfileZoomIn.bind(this)}>+</circularbtn>
                <circularbtn2 onClick = {this.ProfileZoomOut.bind(this)}>-</circularbtn2>
                <circularbtn3><img src = {this.props.camera} height = {25} className="image"/></circularbtn3>

                <br/><br/>
                <btn><a href = "MyResumes.html">View My Resumes</a></btn>
                {/*<button onClick = {this.MyResumesButton.bind(this)}>View Resumes</button> */}
                <br/><br/>
            </div>
        );
    }

    ProfileZoomIn(){
        this.setState({height: this.state.height + 30});
    }

    ProfileZoomOut() {
        this.setState({height: this.state.height - 30});
    }
}

class ProfileInfo extends React.Component {
    render() {
        return(
            <div id = "profile">
                <br/>
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

ReactDOM.render(<Menu icon = "http://images.clipartpanda.com/stack-of-paper-vector-29343.png"/>, document.getElementById('menu'));
ReactDOM.render(<Profile name = "Marlin Manka" status = "Student at Western University"  work = "Part-time Librarian" pic = "https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-256.png" camera = "http://www.ensatt.fr/images/Graphisme/photo-icone.png"/>,document.getElementById('profile-box'));
ReactDOM.render(<ProfileInfo/>, document.getElementById('profile-info'));