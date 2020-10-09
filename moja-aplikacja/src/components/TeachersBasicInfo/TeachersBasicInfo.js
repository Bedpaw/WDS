import React from 'react';
import './TeachersBasicInfo.css';
import { Link } from 'react-router-dom';

function TeachersBasicInfo (params) {
    const {id, firstName, lastName, img, lesson} = params;
    return (
        <Link to={`/teacher/${id}`}>
            <article className={'teacher_info'}>
                <h2>{firstName} {lastName}</h2>
                <img src={img} alt={`prowadzacy: ${firstName} ${lastName}`}/>
                <h4>{lesson}</h4>
            </article>
        </Link>
    );
}

export default TeachersBasicInfo;