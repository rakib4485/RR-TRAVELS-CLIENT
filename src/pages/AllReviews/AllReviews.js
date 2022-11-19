import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import ShowReview from '../Packages/ShowReview';

const AllReviews = () => {

    

    const reviews = useLoaderData();

    if(reviews){
      
    }

    console.log(reviews);
    const reverseReview = [...reviews].reverse();
    console.log(reverseReview);
    

    return (
        <div className='container'>
            <h2 className="text-center my-5">
                All Popular Reviews
            </h2>
            <Row  xs={1} md={2} className="g-4">
      {
        reverseReview.slice(0,10).map( review => <ShowReview
          key={review._id}
          review = {review}
        ></ShowReview>)
      }
      </Row>

      <p className="mt-5 text-center">
        <Link to = {`/addReview`}>
        <Button variant="outline-dark">Add More Review</Button>
        </Link>
      </p>
        </div>
    );
};

export default AllReviews;