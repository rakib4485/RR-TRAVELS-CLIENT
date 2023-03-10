import React from 'react';
import quotation from '../../../assets/images/testimonial/quotation.webp'

const SingleTestimonial = ({testimonial}) => {
    const {name, img, description} = testimonial;
    return (
        <div className="card border shadow">
        
      <div className="card-body">
        
        <div className="flex items-center">
        <div>
            <img src={img} alt="" />   
        </div>
        <div>
        <img src={quotation} alt="" className="ml-2"/>
        </div>
        </div>
        <p className="text-justify">{description}</p>
        <h2 className="card-title">{name}</h2>
        
      </div>
    </div>
    );
};

export default SingleTestimonial;