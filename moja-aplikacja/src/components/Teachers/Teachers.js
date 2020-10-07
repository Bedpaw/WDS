import React from 'react';
import './Teachers.css';
import TeachersBasicInfo from "../TeachersBasicInfo/TeachersBasicInfo.js";
import { teachers } from './TeachersInfoData.js'

class Teachers extends React.Component {
    render() {
        return ( <section className={'teachers_list'}>
            {teachers.map (teacher =>{
                return <TeachersBasicInfo key={teacher.id} id={teacher.id} firstName={teacher.firstName} lastName={teacher.lastName} img={teacher.img} lesson={teacher.lesson} />
            })}
        </section>)
    }
}

export default Teachers;