import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Example1.css';

const Example1 = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    return (
        <div className="slideshow-container">
            <h1 className="slideshow-title">Static Topic</h1>
            <Fade duration={3000} transitionDuration={500} infinite={true} arrows={false}>
                {images.map((image, index) => (
                    <div key={index} className="each-slide-effect">
                        <div style={{ backgroundImage: `url(${image})` }}>
                            <span>Slide {index + 1}</span>
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    );
};

export default Example1;
