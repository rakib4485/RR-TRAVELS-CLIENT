import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import PackageAccordion from "./PackageAccordion";
import ShowReview from "./ShowReview";
import { Button, Row } from "react-bootstrap";

const   SinglePackageInfo = () => {
  const packages = useLoaderData();
  const {_id, package_id, title, img, price, description, details, } = packages;

  const [reviews, setReviews] = useState([]);

  useEffect( ()=>{
    fetch('https://rr-travels-server-9rqj7v1jo-rakib4485.vercel.app/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  }, [])

  const updateReview = [...reviews].reverse();


  return (
    <div className="container">
      <h2 className="text-center text-primary my-5 fw-bold">{title}</h2>
      <img src={img} className="w-100 rounded" alt="" />
      <h4 className="mt-2">
        <b>Package Name:</b> {title}
      </h4>
      <p className="fs-5" style={{ textAlign: "justify" }}>
        <strong>Tour Details:</strong> {description}
      </p>
      <p>
        <strong>You Need To Pay:</strong> BDT {price}
      </p>
      <h1>Day wise Itinerary</h1>
      <Accordion defaultActiveKey="0" flush>
        {details.map((detail) => (
          <PackageAccordion key={detail.id} detail={detail}></PackageAccordion>
        ))}
      </Accordion>


      <h2 className="text-center fw-semibold text-info">All Recent Reviews</h2>
      <Row  xs={1} md={2} className="g-4">
      {
        updateReview.slice(0,4).map( review => <ShowReview
          key={review._id}
          review = {review}
        ></ShowReview>)
      }
      </Row>

      <p className="mt-5 text-center">
        <Link to = {`/reviews`}>
        <Button variant="outline-dark">See More Review</Button>
        </Link>
        <Link to = {`/addReview`} className = "ms-3">
        <Button variant="outline-dark">Add Review</Button>
        </Link>
      </p>
      
    </div>
  );
};

export default SinglePackageInfo;
