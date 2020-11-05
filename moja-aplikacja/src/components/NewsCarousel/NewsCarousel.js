import React from 'react';
import './NewsCarousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import  luis  from '../../assets/teachers_pic/luisEduardo.jpg'

class NewsCarousel extends React.Component {

    render() {
        return (
            <div className={'container'}>
                <Carousel showThumbs={false}>
                    <div className={'News'}>
                        <img src={luis}/>
                        <p>News 1</p>
                    </div>
                    <div className={'News'}>
                        <img src={'https://i.picsum.photos/id/384/960/450.jpg?hmac=OYkmkxqxZMUDgygivD5BD60GChvKChSTZekqCWpPQeE'}/>
                        <p>News 2</p>
                    </div>
                    <div className={'News'}>
                        <img src={'https://i.picsum.photos/id/1005/960/450.jpg?hmac=HFkJ8zeaSDDnQiYOPztw29CaiC3laPyvxXYtaRg-ARY'}/>
                        <p>News 3</p>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default NewsCarousel;