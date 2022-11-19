import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import img from '../../../assets/images/about/about.png'
import './About.css'

const About = () => {
    return (
        <div className='my-5'>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <img className = "w-100" src={img} alt="" />
                    </Col>
                    <Col>
                        <h4 className = 'about-info'>Get to know us</h4>
                        <h1 className ="about-title">Plan Your Trip with <br /> Trevily</h1>
                        <p className = "about-details">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.</p>
                        <div>
                            <p><span className='check-icon'><FaCheck></FaCheck></span> Invest in your simply neighborhood</p>
                            <p><span className='check-icon'><FaCheck></FaCheck></span> Support people in free text extreme need</p>
                            <p><span className='check-icon'><FaCheck></FaCheck></span> Largest global industrial business community</p>
                        </div>

                        <button className='book-now-btn'>Book With us Now</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;