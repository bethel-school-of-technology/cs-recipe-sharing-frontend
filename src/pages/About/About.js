import React from 'react';
import '../../../src/pages/About/about.css';


const AboutPageView = () => {
    return (
        <div>
       <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<h3>
				Who We Are !
			</h3>
		</div>
	</div>
    <br/>
	<div class="row">
		<div class="col-md-4">
            <div class="blake">
			<img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" class="rounded-circle"/>
            </div>
        </div>
		<div class="col-sm-4">
			<h2>
				Blake Wood
			</h2>
			<p>
				Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
			</p>
			<p>
            <ul class="social-network social-circle">
                <li><a href="https://www.linkedin.com/in/blakewoodjr/" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="https://github.com/blakewood84" class="icoGitHub" title="git-hub"><i class="fa fa-github"></i></a></li>
              </ul>
        
			</p>
		</div>
		<div class="col-md-4">
		</div>
	</div>
    <br/>
	<div class="row">
		<div class="col-md-4">
            <div class="ethan">
			<img alt="" src="ethan.jpg" class="rounded-circle" />
            </div>
        </div>
		<div class="col-md-4">
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
			<ul class="social-network social-circle">
                <li><a href="https://www.linkedin.com/in/ethan-mcneil/" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="https://github.com/ethanmcneil" class="icoGitHub" title="git-hub"><i class="fa fa-github"></i></a></li>
              </ul>
            
			</p>
		</div>
		<div class="col-md-4">
		</div>
	</div>
    <br/>
	<div class="row">
		<div class="col-md-4">
            <div className="rob">
			<img alt="Rob Picture" src="robpic.jpg" class="rounded-circle" />
		</div>
        </div>
		<div class="col-md-4">
			<h2>
				Robert Nickle
			</h2>
			<p>
             I am a Husband, Father of three children, I am also Full Stack Developer with a passion to keep learning and creating new web applications.
                I think that we can partner faith and tech to create and develop life changing applications and programs that could maybe one day cure 
                diseases and find solutions to global issues.
            </p>
			<p>
            <ul class="social-network social-circle">
                 <li><a href="https://www.linkedin.com/in/robertnickleiv/" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                 <li><a href="https://github.com/rnickleiv" class="icoGitHub" title="git-hub"><i class="fa fa-github"></i></a></li> 
              </ul>
			</p>
		</div>
		<div class="col-md-4">
		</div>
	</div>
    <br/>
	<div class="row">
		<div class="col-md-4">
            <div class="pat">
		    <img alt="Bootstrap Image Preview" src="patrick.jpg" class="rounded-circle" />
            </div>
            </div>
		<div class="col-md-4">
			<h2>
				Patrick B.
			</h2>
			<p>
            Patrick Barriente is a husband, musician, and Developer.  With a passion to create with excellence. 
			</p>
			<p>
            <ul class="social-network social-circle">
                <li><a href="https://www.linkedin.com/in/patrick-barriente-12abb992/" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="http://github.com/pbarriente" class="icoGitHub" title="git-hub"><i class="fa fa-github"></i></a></li>
              </ul>
            
			</p>
		</div>
		<div class="col-md-4">
		</div>
	</div>
</div>
        
</div>
    )
}

export default AboutPageView;