import React from 'react';
import './TeachersInfo.css';
import { Link } from 'react-router-dom';

function TeachersInfo (params) {
    const {id, firstName, lastName, img, lesson} = params;
    return (
        <Link to={`/teacher/${id}`}><article className={'teacher_info'}>
            <h2>{firstName} {lastName}</h2>
            <h4>{lesson}</h4>
            <img src={img} alt={`prowadzacy: ${firstName} ${lastName}`}/>
        </article></Link>
    );
}

export default TeachersInfo;