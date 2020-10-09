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
                            <p>{p1}</p>
                            <p>{p2}</p>
                            <p>{p3}</p>
                            <p>{p4}</p>
                        </article>
                        <article className={'aboutUsLinks'}>
                            <Link to={`/Teachers`}><div className={'aboutUsTeachers'}>
                                <h2>Nasi prowadzący</h2>
                                <h3>Każde miejsce tworzą ludzie, poznajcie naszych mistrzów sztuki scenicznej, którzy prowadzą
                                dla Was zajęcia.</h3>
                            </div></Link>
                            <Link to={`/Classes`}><div className={'aboutUsClasses'}>
                                <h2>Nasze zajęcia</h2>
                                <h3>Nie wiesz czy znajdziesz coś dla siebie? Dowiedz się więcej o naszej ofercie i whbierz to co
                                Cię interesuje najbardziej. </h3>
                            </div></Link>
                        </article>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutPlace;