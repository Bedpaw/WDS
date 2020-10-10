import React from 'react';
import './AboutPlace.css';
import { aboutPlaceInfo } from './AboutPlaceInfo';
import {Link} from "react-router-dom";

const {p1, p2, p3, p4} = aboutPlaceInfo;

class AboutPlace extends React.Component {
    render() {
        return (
            <section className={'aboutUs'} id={'#aboutUs'}>
                <div className={'aboutUsShadow'}>
                    <div className={'container'}>
                        <article className={'aboutUsText'}>
                            <h3>{p1}</h3>
                            <h3>{p2}</h3>
                            <h3>{p3}</h3>
                            <h3>{p4}</h3>
                        </article>
                        <article className={'aboutUsLinks'}>
                            <div className={'aboutUsTeachers'}>
                                <h2>Nasi prowadzący</h2>
                                <h3>Każde miejsce tworzą ludzie, poznajcie naszych mistrzów sztuki scenicznej, którzy prowadzą
                                dla Was zajęcia.</h3>
                                <Link to={`/Teachers`}><button className={'btnTransparent'}><h3>SPRAWDŹ</h3></button></Link>
                            </div>
                            <div className={'aboutUsClasses'}>
                                <h2>Nasze zajęcia</h2>
                                <h3>Nie wiesz czy znajdziesz coś dla siebie? Dowiedz się więcej o naszej ofercie i wybierz to co
                                Cię interesuje najbardziej.</h3>
                                <Link to={`/Lessons`}><button className={'btnTransparent'}><h3>SPRAWDŹ</h3></button></Link>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutPlace;