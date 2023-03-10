import React, { useEffect, useState } from "react";
import SinglePackage from "./SinglePackage";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Packages = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("https://rr-travels-server-rakib4485.vercel.app/packages")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  const slicePlaces = places.slice(0, 4);
  return (
    <div className="my-5">
      <div className="text-center my-3">
        <h3 style ={{fontFamily: "'Kolker Brush', cursive", color: "#e8604c"}}>Featured tours</h3>
        <h1 className="service-title">Most Popular Tours</h1>
      </div>
      <Container>
      <Row xs={1} md={2} className="g-4">
        {slicePlaces.map((place) => (
          <SinglePackage key={place._id} place={place}></SinglePackage>
        ))}
      </Row>

      <p className="text-center">
      <Link to='/packages'>
        <button className="my-3 text-center" style={{padding: "10px 20px", borderRadius: "20px", backgroundColor: "#e8604c", color: "white"}}>See More</button>
      </Link>
      </p>
      </Container>
    </div>
  );
};

export default Packages;
