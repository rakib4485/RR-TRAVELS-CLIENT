import React from 'react';
import youtube from '../../../assets/images/about/youtube.gif';
import img1 from '../../../assets/images/about/1.png'
import img2 from '../../../assets/images/about/2.png'
import img3 from '../../../assets/images/about/3.png'
import img4 from '../../../assets/images/about/4.png'
import './travels.css';

const Travels = () => {
    return (
        <div className='travel-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={youtube} alt="" style={{width: "150px", borderRadius: "50%"}}/>
                        <p className='video-one_tagline'>Are you ready to travel?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Travels;