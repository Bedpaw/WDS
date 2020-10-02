import React from 'react';
import './Teachers.css';
import TeachersInfo from "../TeachersInfo/TeachersInfo.js";

const teachers = [
    {
        id: '1',
        firstName: 'Szymon',
        lastName: 'Sztukowski',
        lesson: 'Akrobatyka Sceniczna',
        img: 'cokolwiek',
    },
    {
        id: '2',
        firstName: 'Renia',
        lastName: 'Gosławska',
        lesson: 'Wokal Grupowy',
        img: '../../assets/teachers_pic/reniaGoslawska.jpg',
    },
    {
        id: '3',
        firstName: 'Mateusz',
        lastName: 'Pietrzak',
        lesson: 'Jazz',
        img: '../../assets/teachers_pic/mateuszPietrzak.jpg',
    },
    {
        id: '4',
        firstName: 'Emilia',
        lastName: 'Witowska',
        lesson: 'Step',
        img: '../../assets/teachers_pic/emiliaWitowska.jpg',
    },
    {
        id: '5',
        firstName: 'Grzegorz',
        lastName: 'Wolf',
        lesson: 'Aktorstwo',
        img: '../../assets/teachers_pic/grzegorzWolf.jpg',
    },
    {
        id: '6',
        firstName: 'Aleksandra',
        lastName: 'Foltman',
        lesson: 'Taniec Klasyczny',
        img: '../../assets/teachers_pic/aleksandraFoltman.jpg',
    },
    {
        id: '7',
        firstName: 'Piotr',
        lastName: 'Burba',
        lesson: 'Taniec',
        img: '../../assets/teachers_pic/piotrBurba.jpg',
    },
    {
        id: '8',
        firstName: 'Andrzej',
        lastName: 'Morawiec',
        lesson: 'Taniec Współczesny',
        img: '../../assets/teachers_pic/andrzejMorawiec.jpg',
    },
]

class Teachers extends React.Component {
    render() {
        return ( <section className={'teachers_list'}>
            {teachers.map (teacher =>{
                return <TeachersInfo key={teacher.id} id={teacher.id} firstName={teacher.firstName} lastName={teacher.lastName} img={teacher.img} lesson={teacher.lesson} />
            })}
        </section>)
    }
}

export default Teachers;