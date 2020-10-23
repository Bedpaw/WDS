import React from 'react';
import './LandingPage.css';
import AboutPlace from "../AboutPlace/AboutPlace";
import Contact from "../Contact/Contact";
import NewsCarousel from "../NewsCarousel/NewsCarousel";

class LandingPage extends React.Component {

    render() {
        return (
            <>
                <section className={'landingPage'} id={'landingPage'}>
                    <NewsCarousel/>
                </section>
                <section id={'aboutPlace'}>
                    <AboutPlace/>
                </section>
                <section id={'contact'}>
                    <Contact/>
                </section>
            </>
        )
    }
}

export default LandingPage;
