import React from 'react';
import img1 from '../../../assets/images/logo/1.png';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { TbMessage2 } from "react-icons/tb";
import { HiLocationMarker } from "react-icons/hi";
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className = "bg-dark text-white py-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 pe-5">
                        <img src={img1} className="w-50" alt="" />
                        <p>Welcome to our <strong>RR Trip and Tour</strong> Agency. </p>
                        <hr />
                        <p>
                            <FaPhoneSquareAlt className ="fs-4 text-danger me-2" />
                            <span className = "fs-5 text-white">+9956787878</span>
                        </p>
                        <p>
                            <TbMessage2 className ="fs-4 text-danger me-2" />
                            needhelp@company.com
                        </p>
                        <p>
                            <HiLocationMarker className ="fs-4 text-danger me-2" />
                            666 road, broklyn street new york
                        </p>
                    </div>
                    <div className="col-md-2 footer-company">
                        <h3 className='mt-5'>Company</h3>
                        <p><Link to='/'>Home</Link></p>
                        <p><Link to ='/packages'>Tour Packages</Link></p>
                        <p><Link to="/blog">Blog</Link></p>
                        <p><Link to='/contact'>Contacts</Link></p>
                    </div>
                    <div className="col-md-2">
                        <h3 className='mt-5'>Explore</h3>
                        <p><Link>Account</Link></p>
                        <p><Link>Legal</Link></p>
                        <p><Link>Affilitate Program</Link></p>
                        <p><Link>Privacy Policy</Link></p>
                    </div>
                    <div className="col-md-4 mt-5">
                        <h3>Newsletter</h3>
                        <input  type="text" placeholder="Email Address" className='bg-dark rounded text-center text-white' />
                        <br />
                        <input className='btn-subscribe' type="submit" value="Subscribe" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;