import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className={'container'}>
                    <p>warsztat działań scenicznych</p>
                    <div className={'icons'}>
                        <a href={'https://www.facebook.com/Warsztat-Dzia%C5%82a%C5%84-Scenicznych-108982257629655'} target={'blank'}><FontAwesomeIcon color={"white"} icon={ faFacebookSquare }/></a>
                        <a href={'https://www.instagram.com/warsztatdzialanscenicznych/'} target={'blank'}><FontAwesomeIcon color={"white"} icon={ faInstagramSquare }/></a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
