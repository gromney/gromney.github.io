import React, { Component } from 'react';

import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            menuText: 'MENU',
            isHovering: false
        }

        this.toggleMenu = this.toggleMenu.bind(this);
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
    }

    _onMouseEnter() {
        this.setState({ isHovering: true });

    }
    _onMouseLeave() {
        this.setState({ isHovering: false });
    }

    toggleMenu() {
        this.setState({ open: !this.state.open });
    }

    render() {
        const visible = this.state.open && 'open';
        const framedStyle = this.state.isHovering ? 'framed' : 'un-framed';
        console.log(framedStyle);
        return (
            <div>
                <div className={`${framedStyle}`}></div>
                <button
                    className="center"
                    onClick={this.toggleMenu}
                    onMouseEnter={this._onMouseEnter}
                    onMouseLeave={this._onMouseLeave}
                >
                    {this.state.menuText} {this.state.isHovering}
                </button>


                <div className={`overlay ${visible}`}>
                    <nav>
                        <ul>
                            <li><a href="#about" onClick={this.toggleMenu}>ABOUT</a></li>
                            <li><a href="#skills" onClick={this.toggleMenu}>SKILLS</a></li>
                            <li><a href="#work" onClick={this.toggleMenu}>WORK</a></li>
                            <li><a href="#hobbies" onClick={this.toggleMenu} >HOBBIES</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        )
    }

}

export default Menu;