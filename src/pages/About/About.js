import React from 'react';
import anime from 'animejs';
import Java from '../../icon-components/Java';
import MySQL from '../../icon-components/MySQL';
import ReactIcon from '../../icon-components/ReactIcon';
import Node from '../../icon-components/Node';
import './style.css';
import JavaScript from '../../icon-components/JavaScript';
import PHP from '../../icon-components/Php';
import Csharp from '../../icon-components/C-Sharp';
import Vue from '../../icon-components/Vue';

const AboutContent = ({animateProfileName}) => {
    return(
        <div class="container">
            <div class="row row-blake profile-row">
                <div class="col-md-2">
                    <div className="blake">
                        <img src="images/team-photos/blake.jpg" alt="Blake" class="rounded-circle img-props" />
                    </div>
                </div>
                <div class="col-sm-5">
                    <h2 class="ml1">
                        <span class="text-wrapper">
                            <span class="line line1"></span>
                            <span class="letters">Blake Wood Jr.</span>
                            <span class="line line2"></span>
                        </span>
                    </h2>
                    <p>
                        Blake is a Software Engineer in Northern California with a passion for Front End Engineering and Design. He grew up surfing the beaches of San Diego, Ca
                        and has newly walked into faith as a believer in Jesus Christ.  "Work hard and dream, dream, dream.  We all have the potential for greatness with those who walk in faith with Jesus Christ!".
                    </p>
                    <p>
                    <ul class="social-network social-circle">
                        <li><a href="https://www.linkedin.com/in/blakewoodjr/" target="_blank" rel="noopener noreferrer" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/blakewood84" target="_blank" rel="noopener noreferrer" class="icoGitHub" title="git-hub"><i class="fa fa-github"></i></a></li>
                    </ul>
                    </p>
                </div>
                <div class="col-md-5 lang-icons-anime">
                    <div className="d-flex justify-content-center align-items-center lang-icon-margin"><ReactIcon className="mx-2 lang-icon" /> <JavaScript className="mx-2 lang-icon" /> <PHP className="my-4 mx-2 lang-icon" /> <Csharp className="mx-2 lang-icon" /> <Vue className="mx-2 my-4 lang-icon" /><Node className="mx-2 my-4 lang-icon" /></div>
                </div>
            </div>
            <br/>
            <div class="row">
                <div class="col-md-2">
                    <div class="ethan">
                    <img src="images/team-photos/ethan.jpg" alt="Ethan" class="rounded-circle image-props" />
                    </div>
                </div>
                <div className="col-md-5">
                    <h2>
                        Ethan Mcneil
                    </h2>
                    <p>
                    Ethan McNeil is a software engineer with with a passion for changing the world through coding. 
                    He believes many real world problems can be solved with a little hard work, innovation, and some Java. A recent graduate of Bethel School of Technology 
                    (the top rated coding boot camp of 2019 and 2020 by newsweek), 
                    he works on programming remotely while living in Indiana with his wife and two kids.
                    </p>
                    <p>
                    <ul className="social-network social-circle">
                        <li><a href="https://www.linkedin.com/in/ethan-mcneil/" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/ethanmcneil" className="icoGitHub" title="git-hub"><i className="fa fa-github"></i></a></li>
                    </ul>
                    
                    </p>
                </div>
                <div className="col-md-5">
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-2">
                    <div className="rob">
                    <img alt="Rob" src="images/team-photos/robpic.jpg" className="rounded-circle" />
                </div>
                </div>
                <div className="col-md-5">
                    <h2>
                        Robert Nickle
                    </h2>
                    <p>
                        I am a Husband, Father of three children, I am also Full Stack Developer with a passion to keep learning and creating new web applications.
                        I think that we can partner faith and tech to create and develop life changing applications and programs that could maybe one day cure 
                        diseases and find solutions to global issues.
                    </p>
                    <p>
                    <ul className="social-network social-circle">
                        <li><a href="https://www.linkedin.com/in/robertnickleiv/" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/rnickleiv" className="icoGitHub" title="git-hub"><i className="fa fa-github"></i></a></li> 
                    </ul>
                    </p>
                </div>
                <div className="col-md-5">
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-2">
                    <div className="pat">
                    <img alt="Patrick" src="images/team-photos/patrick.jpg" />
                    </div>
                    </div>
                <div className="col-md-5">
                    <h2>
                        Patrick B.
                    </h2>
                    <p>
                        Patrick Barriente is a husband, musician, and Developer.  With a passion to create with excellence. 
                    </p>
                    <p>
                        <ul className="social-network social-circle">
                            <li><a href="https://www.linkedin.com/in/patrick-barriente-12abb992/" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="http://github.com/pbarriente" className="icoGitHub" title="git-hub"><i className="fa fa-github"></i></a></li>
                        </ul>
                    </p>
                </div>
                <div className="col-md-5">
                </div>
            </div>
        </div>
    )
}



class AboutPageView extends React.Component {
    
    animateHeaderH1(){
        var textWrapper = document.querySelector('.ml2');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span className='letter'>$&</span>");
        anime.timeline({loop: false})
        .add({
            targets: '.ml2 .letter',
            scale: [4,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 800,
            delay: (el, i) => 30*i
        });
    }
    animateStackIcons(){
        
        setTimeout(function(){
            document.getElementById('js-stack-icons').classList.remove('hide');
            anime.timeline({loop: false,})
            .add({
                targets: '.ml15 .stack-icon',
                scale: [14,1],
                opacity: [0,1],
                easing: "easeOutCirc",
                duration: 800,
                delay: (el, i) => 800 * i
            });
        }, 1300);
    }
    animateProfileName(){
        var textWrapper = document.querySelector('.ml1 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({loop: false})
        .add({
            targets: '.ml1 .letter',
            scale: [0.3,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            delay: (el, i) => 70 * (i+1)
        }).add({
            targets: '.ml1 .line',
            scaleX: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 700,
            offset: '-=875',
            delay: (el, i, l) => 80 * (l - i)
        });
    }
    componentDidMount(){
        this.animateHeaderH1();
        this.animateStackIcons();
    }
    componentDidUpdate(){
        
    }

    render(){
        return (
            <div className="container-fluid about">
                <div className="jumbotron card card-image about-header">
                    <div className="text-center py-2 px-4">
                        <div>
                            <h1 className="display-4 pt-3 mb-5 ml2">We Dream Big with Jesus.... Team &lt;CodeChefs &#47;&gt;</h1>
                            <p className="p-text mx-4 mb-3">We are a group of software engineers who attend <strong>Bethel School of Technology</strong> in Redding,Ca. This application is a recipe sharing application designed to allow users to share their recipes with others!
                            <br />Our Stack? RAJMN<br /></p>
                            <p id="js-stack-icons" className='mx-4 ml15 hide'><ReactIcon className="mx-2 stack-icon" /><Java className="mx-2 stack-icon" /><MySQL className="mx-2 stack-icon" /><Node className="mx-2 stack-icon" /></p>
                            <p className="my-4">
                            <a href="https://github.com/bethel-school-of-technology/cs-recipe-sharing-frontend" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-4"><i className="fa fa-github left"></i> Front End</a> <a href="https://github.com/bethel-school-of-technology/cs-recipe-sharing-backend" rel="noopener noreferrer" target="_blank" className="btn btn-outline-light"><i className="fa fa-github left"></i> Back End</a>
                            </p>
                        </div>
                    </div>
                </div>
                <AboutContent animateProfileName={this.animateProfileName.bind(this)} />
            </div>
        )
    }
}

export default AboutPageView;