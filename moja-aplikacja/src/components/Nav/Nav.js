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
                    <HashLink to={`/#o_nas`} className={'logoLink'}><img src={logo} className={'logo'}/></HashLink>
                    <h1>Warsztat Działań Scenicznych</h1>
                    <Menu right top={'0'} style={{overflow: "hidden"}}>
                        <HashLink to={'/#o_nas'}><h3>O miejscu</h3></HashLink>
                        <Link to={`/zajecia`}><h3>Zajecia</h3></Link>
                        <Link to={`/cennik`}><h3>Cennik</h3></Link>
                        <Link to={`/grafik`}><h3>Harmonogram</h3></Link>
                        <Link to={`/kadra`}><h3>Kadra</h3></Link>
                        <HashLink to={'/#kontakt'}><h3>Kontakt</h3></HashLink>
                    </Menu>
                </div>
            </nav>
        )
    }
}

export default Nav;
