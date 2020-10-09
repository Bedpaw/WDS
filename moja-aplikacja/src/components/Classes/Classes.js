import React from 'react';
import './Classes.css';
import { lessons } from './LessonsInfoData.js'
import LessonsBasicInfo from "../LessonsBasicInfo/LessonsBasicInfo";


class Classes extends React.Component {

    render() {
        return (
            <div className={'container'}>
                <section className={'classes_list'}>
                    {lessons.map (lesson => {
                        return <LessonsBasicInfo key={lesson.id} id={lesson.teacherNr} name={lesson.name} desc={lesson.desc} teacher={lesson.teacher}  />
                    })}
                </section>
            </div>)
    }
}

export default Classes;