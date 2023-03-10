import React from 'react';
import { Link } from 'react-router-dom';
import worldTour from '../../../assets/images/travel/world.png'
import adventureBg1 from '../../../assets/images/travel/bg-shape-04.png'
import adventureBg2 from '../../../assets/images/travel/bg-shape-07.png'
import person1 from '../../../assets/images/travel/travel-1.jpg'
import safety from '../../../assets/images/travel/helmet.png'
import price from '../../../assets/images/travel/best-price.png'
import travel from '../../../assets/images/travel/travel.png'

const Adventure = () => {
    return (
        <div>
            <div className="container position-relative" style={{zIndex: "1"}}>
                <div className='p-5 rounded' style={{backgroundColor: "#63ab45", backgroundImage:`url(${adventureBg1})`}}>
                    <div className="row align-items-center">
                        <div className="col-md-9">
                            <div className='d-flex align-items-center'>
                            <img src={worldTour} alt=""  style={{width:"80px"}}/>
                            <div className='ms-3'>
                            <p className="text-white fw-semibold text-uppercase">QUISEQUE VEL ORTOR </p>
                            <h2 className='text-white fw-semibold'>Ready to adventure and enjoy natural</h2>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-3">
                            <Link className="btn btn-light fs-4 fw-semibold">Explore More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center mb-5" style={{backgroundImage:`url(${adventureBg2})`, marginTop:"-50px", zIndex:"-1", backgroundPosition:"center right", backgroundRepeat:"no-repeat"}}>
                <div className="col-md-6">
                    <div >
                        <img src={person1} alt="" className='w-100'/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='mx-auto' style={{width:"80%"}}>
                    <h5 className='mt-4 py-2 text-center rounded fw-semibold' style={{color: "#63ab45", width:"200px", backgroundColor: "#E1EFE0"}}>Why choose us</h5>
                    <h1 className="fw-bold my-5">Great opportunity for adventure & travels</h1>
                    <div className="row my-5">
                        <div className="col-4">
                            <div className='w-100 h-100 d-flex justify-content-center align-items-center rounded' style={{backgroundColor: "#63ab45"}}>
                            <img src={safety} alt=""  className=''/>
                            </div>
                        </div>
                        <div className="col-8">
                        <h4 className="fw-bold">Safety first always</h4>
                            <p className="text-secondary">Aenean placerat ut lacus nec pulvinar. Donec eu, ante at, commodo diam.</p>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-4">
                            <div className='w-100 h-100 d-flex justify-content-center align-items-center rounded' style={{backgroundColor: "#63ab45"}}>
                            <img src={price} alt=""  className=''/>
                            </div>
                        </div>
                        <div className="col-8">
                        <h4 className="fw-bold">Low price & friendly </h4>
                            <p className="text-secondary">Aenean placerat ut lacus nec pulvinar. Donec eu, ante at, commodo diam.</p>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-4">
                            <div className='w-100 h-100 d-flex justify-content-center align-items-center rounded' style={{backgroundColor: "#63ab45"}}>
                            <img src={travel} alt=""  className=''/>
                            </div>
                        </div>
                        <div className="col-8">
                        <h4 className="fw-bold">Trusted travel guide</h4>
                            <p className="text-secondary">Aenean placerat ut lacus nec pulvinar. Donec eu, ante at, commodo diam.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adventure;