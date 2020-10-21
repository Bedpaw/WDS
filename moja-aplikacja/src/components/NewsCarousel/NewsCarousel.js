import React from 'react';
import './NewsCarousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class NewsCarousel extends React.Component {

    render() {
        return (
            <div className={'container'}>
                <Carousel showThumbs={false}>
                    <div className={'News'}>
                        <img src={'https://i.picsum.photos/id/90/960/450.jpg?hmac=fr9fvZ8BCWHzQ-NDs5Pw9gOlU0jN_fkpWRFvE3ttF4M'}/>
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