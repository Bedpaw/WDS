import React from 'react';
import './TeachersBasicInfo.css';
import { Link } from 'react-router-dom';

function TeachersBasicInfo (params) {
    const {id, firstName, lastName, img, lesson} = params;
    return (
        <Link to={`/kadra/${id}`}>
            <article className={'teacher_info'}>
                <h2>{firstName}</h2>
                <h2>{lastName}</h2>
                <img src={img} alt={`prowadzacy: ${firstName} ${lastName}`}/>
                <h4>{lesson}</h4>
            </article>
        </Link>
    );
}

export default TeachersBasicInfo;