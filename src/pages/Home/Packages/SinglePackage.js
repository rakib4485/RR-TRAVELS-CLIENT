import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const SinglePackage = ({place}) => {
  
    const {_id,img, title, price, description} = place;
    return (
        <Col>
          <Card className = "p-3 shadow-lg"  style ={{height: "550px"}}>
            <Card.Img className = 'rounded' variant="top" src={img} style ={{height: "250px"}}/>
            <Card.Body>
              <Card.Title className='fw-bold fs-3'>{title}</Card.Title>
              <Card.Text>
                {description.slice(0, 100) + '...'} <Link to={`/packages/${_id}`}>Read More</Link>
              </Card.Text>
              <Card.Text>
                Price: ৳{price}
              </Card.Text>
              <Link to={`/packages/${_id}`}>
              <Button variant="outline-info">Details About Tour</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default SinglePackage;