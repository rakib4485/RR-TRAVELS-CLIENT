import React from 'react';

const NewsLetter = () => {
    return (
        <div className='container card border shadow mt-5 p-3'>
            <div className="row">
                <div className="col-md-6">
                    <p className="fs-2">Subscribe Our Newsletter</p>
                    <p className="fs-5 text-secondary">If you Subscribe to our newsletter, we’ll send you the best deals for you and updates.</p>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                <div className='d-flex justify-center mx-auto  align-items-center justify-content-center'>
                        <input className="outline-none py-2" placeholder="Enter Your email here" type=" text" style={{width:"200px"}}/>
                        <button className='bg-black text-white py-2 px-5'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;