import React from 'react';
import './TeacherDeteiledInfo.css';
import { useParams } from 'react-router-dom';
import { teachers } from '../Teachers/TeachersInfoData.js'

function TeacherDeteiledInfo () {
    let urlParams = useParams();
    const {id, firstName, lastName, img, lesson, bio} = teachers[urlParams.id];

    return (
        <div className={'container'}>
            <h1>{firstName} {lastName}</h1>
            <section className={'teacherDeteiled'}>
                <img src={img} alt={`prowadzacy: ${firstName} ${lastName}`}/>
                    <article className={'teacherDeteiledInfo'}>
                        <h2>O Mnie</h2>
                        <p>{bio}</p>
                    </article>
            </section>
        </div>
    );
}

export default TeacherDeteiledInfo;