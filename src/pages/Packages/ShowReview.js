import React from "react";
import { Card } from "react-bootstrap";
import { FaStar, FaUser } from "react-icons/fa";

const ShowReview = ({ review }) => {
    const {name, img, details, rating} = review;
    console.log(img)
  return (
    <div>
      <Card border="info" className="shadow mt-3" style={{ padding: "30px", height: "200px"}}>
        <div className="row">
            <div className="col-4 text-center">
            {
                  img? (<img src={img} style={{width: "50px", borderRadius: "50%"}} alt="" />) : (<FaUser></FaUser>)
                }
                
                <p className="fs-5 fw-semibold mt-2">{name}</p>
            </div>
            <div className="col-8">
                <p style={{textAlign: "justify"}}>" {details} "</p>
                <p className="text-end d-flex justify-content-end align-items-center"><FaStar className = "text-warning me-1"></FaStar> <strong>{rating}</strong></p>
            </div>
        </div>
      </Card>
    </div>
  );
};

export default ShowReview;
