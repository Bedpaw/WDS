import React from 'react';
import './Nav.css';
import './BurgerMenu.css';
import {Link} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import logo from '../../assets/logo.jpg'

class Nav extends React.Component {

    render() {
        return (
            <nav>
                <div className={'container'}>
                    <Link to={`/`}><img src={logo} className={'logo'}/></Link>
                    <h1>Warsztat Działań Scenicznych</h1>
                </div>
                <Menu right top={'0'}>
                    <Link to={`/AboutPlace`}><h1>O miejscu</h1></Link>
                    <Link to={`/Lessons`}><h1>Zajecia</h1></Link>
                    <Link to={`/PriceList`}><h1>Cennik</h1></Link>
                    <Link to={`/TimeTable`}><h1>Harmonogram</h1></Link>
                    <Link to={`/Teachers`}><h1>Kadra</h1></Link>
                </Menu>
            </nav>
        )
    }
}

export default Nav;