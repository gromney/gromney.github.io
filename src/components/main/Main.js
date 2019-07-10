import React, { Component } from 'react';

import './Main.css';


const about = (<section id="about"></section>)
const work = (<section id="work"></section>)

class Main extends Component {
    constructor(props){
        super(props);
        
    }
    
    render(){
        return(
            <div className="main">
                {about}
                {work}
            </div>
        )
    }
        
    
}

export default Main