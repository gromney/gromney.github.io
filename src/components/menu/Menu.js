import React, { Component } from 'react';

import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            menuText: 'MENU',
            visibility: props.visibility
        }
        this.state.visibility = props.visibility

        // this.showMenu = this.showMenu.bind(this);
        // this.hideMenu = this.hideMenu.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ open: !this.state.open });
        // console.log(this.state.open);
    }

    // showMenu() {
    //     this.setState({ overlayClass: 'open', menuText: 'CLOSE' });
    // }

    // hideMenu() {
    //     this.setState({ overlayClass: 'close', menuText: 'MENU' });

    // }
    render() {
        const visible = this.state.open && 'open';
        return (
            <div>

                <button 
                    className="center"
                    onClick={this.toggleMenu}>{this.state.menuText}</button>

                <div className={`overlay ${visible}`}>
                    <nav>
                        <ul>
                            <li><a href="#about" onClick={this.toggleMenu}>ABOUT</a></li>
                            <li><a href="#work" onClick={this.toggleMenu}>WORK</a></li>
                            <li><a href="#skills" onClick={this.toggleMenu}>SKILLS</a></li>
                            <li><a href="#hobbies"onClick={this.toggleMenu} >HOBBIES</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="framed" >

                </div>
            </div>

        )
    }

}

export default Menu;