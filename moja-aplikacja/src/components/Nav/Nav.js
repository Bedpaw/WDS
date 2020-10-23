import React from 'react';
import './Nav.css';
import './BurgerMenu.css';
import {Link} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import logo from '../../assets/logo.jpg'
import { HashLink } from 'react-router-hash-link';

class Nav extends React.Component {

    render() {
        return (
            <nav>
                <div className={'container'}>
                    <HashLink to={`/#landingPage`}><img src={logo} className={'logo'}/></HashLink>
                    <h1>Warsztat Działań Scenicznych</h1>
                    <Menu right top={'0'}>
                        <HashLink to={'/#aboutPlace'}><h2>O miejscu</h2></HashLink>
                        <Link to={`/Lessons`}><h2>Zajecia</h2></Link>
                        <Link to={`/PriceList`}><h2>Cennik</h2></Link>
                        <Link to={`/TimeTable`}><h2>Harmonogram</h2></Link>
                        <Link to={`/Teachers`}><h2>Kadra</h2></Link>
                        <HashLink to={'/#contact'}><h2>Kontakt</h2></HashLink>
                    </Menu>
                </div>
            </nav>
        )
    }
}

export default Nav;