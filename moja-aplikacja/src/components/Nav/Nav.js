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
                        <HashLink to={'/#aboutPlace'}><h3>O miejscu</h3></HashLink>
                        <Link to={`/Lessons`}><h3>Zajecia</h3></Link>
                        <Link to={`/PriceList`}><h3>Cennik</h3></Link>
                        <Link to={`/TimeTable`}><h3>Harmonogram</h3></Link>
                        <Link to={`/Teachers`}><h3>Kadra</h3></Link>
                        <HashLink to={'/#contact'}><h3>Kontakt</h3></HashLink>
                    </Menu>
                </div>
            </nav>
        )
    }
}

export default Nav;