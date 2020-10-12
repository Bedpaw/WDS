import React from 'react';
import './LandingPage.css';
import AboutPlace from "../AboutPlace/AboutPlace";
import Contact from "../Contact/Contact";

class LandingPage extends React.Component {

    render() {
        return (
            <>
                <section className={'landingPage'}></section>
                <AboutPlace />
                <Contact/>
            </>
        )
    }
}

export default LandingPage;
