import React from 'react';
import './LessonsBasicInfo.css';
import { Link } from 'react-router-dom';

function LessonsBasicInfo (params) {
    const {id, name, desc, teacher} = params;
    return (
            <article className={'lesson_info'}>
                <h1>{name}</h1>
                <Link to={`/teacher/${id}`}><h4>Prowadzący: {teacher}</h4></Link>
                <p>{desc}</p>
            </article>
    );
}

export default LessonsBasicInfo;