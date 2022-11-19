import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContexts } from "../../contexts/AuthProvider/AuthProvider";

const AddReview = () => {
  const { user } = useContext(AuthContexts);

  const { displayName, photoURL } = user;
  console.log(displayName, photoURL);
  const name = displayName;
  const img = photoURL;

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://rr-travels-server-9rqj7v1jo-rakib4485.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const navigate = useNavigate();

  const ratingSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const details = form.details.value;
    const rating = form.rating.value;
    const review = {img, name, details, rating };

    console.log(displayName, photoURL, details, rating);

    fetch(`https://rr-travels-server-9rqj7v1jo-rakib4485.vercel.app/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        const newReview = [ ...reviews, data ];
        setReviews(newReview);
      })
      .catch((err) => console.error(err));

    form.reset();
    navigate('/reviews')
  };

  return (
    <div className="container">
      <Form onSubmit={ratingSubmit} className="w-50 mx-auto border p-5 rounded">
        <h3 className="mb-5 text-primary fw-semibold">Please Put your valuable comment!!</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Comment</Form.Label>
          <Form.Control
            name="details"
            type="text"
            placeholder="Please Write your comment"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Ratting</Form.Label>
          <Form.Control
            name="rating"
            type="text"
            placeholder="Please give rating"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddReview;
