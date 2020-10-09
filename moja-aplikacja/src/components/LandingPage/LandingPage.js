import React from 'react';
import './LandingPage.css';
import AboutPlace from "../AboutPlace/AboutPlace";

class LandingPage extends React.Component {

    render() {
        return (
            <>
                <section className={'landingPage'}></section>
                <AboutPlace />
            </>
        )
    }
}

export default LandingPage;