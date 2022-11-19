import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../../assets/images/logo/register.png";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {

  const {createUser, setUserName} = useContext(AuthContexts) 
  const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const email = form.email.value;
        const password = form.password.value;

        

        createUser(email, password)
        .then(result => {
          const user = result.user;
          setUserName(name, img)
        .then()
        .catch( err => console.error(err));
          console.log(user);
          navigate('/login');
        })
        .catch( err => console.error(err))

        
    }

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <img src={img1} className="w-100" alt="" />
        </div>
        <div className="col-md-6">
          <Form onSubmit={handleSignUp} className="mt-5 w-75 p-5 border rounded ">
            <h3 className="mb-5">Sign up Now!!</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter Your Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                name="img"
                type="text"
                placeholder="Enter Your Image Url"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                required
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
            <Form.Group className="my-3">
              <Form.Text className="text-muted fs-6">
                Already have an account? <Link to ="/login"> Please login</Link>
              </Form.Text>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
