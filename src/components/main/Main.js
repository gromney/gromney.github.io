import React, { Component } from 'react';

import './Main.css';


const about = (
    <section id="about">
        <div className="section-header">
            <h1>about</h1>
        </div>
        <div className="section-content">
            <p>about paragrph</p>
        </div>

    </section>
);

const work = (
    <section id="work">
        <div className="section-header">
            <h1>work</h1>
        </div>
        <div className="section-content">
            <p>work paragrph</p>
        </div>
    </section>
);

const skills = (
    <section id="skills">
        <div className="section-header">
            <h1>skills</h1>
        </div>
        <div className="section-content">
            <p>skills paragrph</p>
        </div>
    </section>
);

const hobbies = (
    <section id="hobbies">
        <div className="section-header">
            <h1>hobbies</h1>
        </div>
        <div className="section-content">
            <p>hobbies paragrph</p>
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
                {work}
                {skills}
                {hobbies}
            </div>
        )
    }


}

export default Main