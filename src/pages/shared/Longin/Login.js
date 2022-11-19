import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle } from 'react-icons/fa';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import img1 from "../../../assets/images/logo/Login.png";
import { AuthContexts } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { loginUser, googleSingIn } = useContext(AuthContexts);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from , {replace: true});
      })
      .catch((err) => console.error(err));
  };

  const googleSignIn = () =>{
    googleSingIn()
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate(from , {replace: true});
    })
    .catch(err => console.error(err));
  }
    return (
        <div>
      <div className="row">
        <div className="col-md-6">
          <img src={img1} className="w-100" alt="" />
        </div>
        <div className="col-md-6">
          <Form onSubmit={handleLogin} className="mt-5 w-75 p-5 border rounded ">
            <h3 className="mb-5">Log In Now!!</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit px-5" className='w-75 mx-auto'>
              Log In
            </Button>
            <Form.Group className="my-3">
              <Form.Text className="text-muted fs-6">
                Don't have an account? <Link to ="/register"> Please Register</Link>
              </Form.Text>
            </Form.Group>
            <Link className = "text-decoration-none">
            <Button onClick={googleSignIn} variant="outline-success" type="submit px-5" className=' w-75 d-flex align-items-center justify-content-center mx-auto text-decoration-none'>
            <FaGoogle className='me-2'></FaGoogle>
            Login With google
            </Button>
            </Link>
            
          </Form>
        </div>
      </div>
    </div>
    );
};

export default Login;