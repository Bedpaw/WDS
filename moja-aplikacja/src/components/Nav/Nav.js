import React from 'react';
import './Nav.css';
import {Link} from "react-router-dom";

class Nav extends React.Component {

    render() {
        return (
            <nav>
                <div className={'container'}>
                    <Link to={`/`}><img src={'../../assets/logo.jpg'} className={'logo'}/></Link>
                    <Link to={`/AboutPlace`}><h1>O miejscu</h1></Link>
                    <Link to={`/Classes`}><h1>Zajecia</h1></Link>
                    <Link to={`/PriceList`}><h1>Cennik</h1></Link>
                    <Link to={`/TimeTable`}><h1>Harmonogram</h1></Link>
                    <Link to={`/Teachers`}><h1>Kadra</h1></Link>
                </div>
            </nav>
        )
    }
}

export default Nav;