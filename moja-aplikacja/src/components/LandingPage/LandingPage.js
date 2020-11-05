import React from 'react';
import './LandingPage.css';
import AboutPlace from "../AboutPlace/AboutPlace";
import Contact from "../Contact/Contact";
import NewsCarousel from "../NewsCarousel/NewsCarousel";

class LandingPage extends React.Component {

    render() {
        return (
            <>
                <section id={'o_nas'} className={'aboutPlace'}>
                    <AboutPlace/>
                </section>
                <section id={'kontakt'}>
                    <Contact/>
                </section>
            </>
        )
    }
}

export default LandingPage;
