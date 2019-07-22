import React, { Component } from 'react';

import './Main.css';


const about = (
    <section id="about">
        <div className="section-content">
            <div className="section-details" >
                <h3>About.</h3>
                <div>
                    <h2>Hello, I am Geronimo Romney</h2>
                    <div>
                        <p>
                            Software Developer with experience in .NET technology and curious about many others

                    </p>
                    </div>
                </div>
            </div>
            <div className="section-panel" >
            </div>
        </div>
    </section>
);

const skills = (
    <section id="skills">
        <div className="section-content">
            <div className="section-details">
                <h3>Skills.</h3>
                <div>
                    <h2>Including But Not Limited.</h2>

                    <ul>
                        <li>Experienced in use of MVC .NET, C#, HTML, CSS and SQL Server.</li>
                        <li> with all phases of designing, coding and testing applications.</li>
                        <li>Committed to continuously acquiring new skills and knowledge</li>
                        <li>Always developing written and oral communication skills</li>
                    </ul>
                </div>
            </div>
            <div className="section-panel">
                <div className="section-panel-footer">
                    <a href="https://www.freecodecamp.org/g.romney" target="_blank">
                        <i className="fab fa-free-code-camp" ></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const work = (
    <section id="work">
        <div className="section-content">
            <div className="section-details">
                <h3>Work.</h3>
                <div>
                    <h2>Work / Experience</h2>
                    <p>
                        This site is an example of what keeps me busy after work
                    </p>
                    <p>
                        feel free to see my profiles and if you see something interesting contact me
                    </p>
                </div>
            </div>
            <div className="section-panel">
                <div className="section-panel-footer">

                    <a href="https://www.linkedin.com/in/gromney/" target="_blank">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/gromney" target="_blank" >
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="resume.pdf" download>
                        <i className="fas fa-file-download"></i>
                    </a>

                </div>
            </div>
        </div>
    </section>
);

const hobbies = (
    <section id="hobbies">
        <div className="section-content">
            <div className="section-details">
                <h3>Hobbies.</h3>
                <div>
                    <h2>Art is freedom</h2>
                    <p>

                    </p>
                    <p>
                        Recently I'm learning photography at Udemy soon I'll upload my progress my instagram account.
                    </p>
                </div>
            </div>
            <div className="section-panel">
                <div className="section-panel-footer">
                    <a href="https://www.instagram.com/vicvega.do/" target="_blank">
                        <i className="fab fa-instagram" alt="g.romney aka vic vega"></i>
                    </a>
                </div>
            </div>

        </div>
    </section>
)

class Main extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="main">
                {about}
                {skills}
                {work}
                {hobbies}
            </div>
        )
    }


}

export default Main