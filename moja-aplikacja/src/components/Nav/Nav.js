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
                    <Menu right top={'0'}>
                        <Link to={`/AboutPlace`}><h2>O miejscu</h2></Link>
                        <Link to={`/Lessons`}><h2>Zajecia</h2></Link>
                        <Link to={`/PriceList`}><h2>Cennik</h2></Link>
                        <Link to={`/TimeTable`}><h2>Harmonogram</h2></Link>
                        <Link to={`/Teachers`}><h2>Kadra</h2></Link>
                    </Menu>
                </div>
            </nav>
        )
    }
}

export default Nav;