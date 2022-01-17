import React from 'react';
import {Button, Col,Form} from "react-bootstrap";
import { Link,useParams,useLocation } from 'react-router-dom';
import { useState } from 'react';
import val from './val'

const Login = () => {

    const [values,setValues] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry,setAllEntery] = useState([]);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
        setEmail({
            ...values,
            [event.target.name]: event.target.value,
        });
        setPassword({
            ...values,
            [event.target.name]: event.target.value,
        });

        setErrors(val(values));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(val(values));

        const newEntry = {email: email, password: password};
        setAllEntery([ ...allEntry, newEntry]);
        console.log("Hello",allEntry);
        localStorage.setItem("list",JSON.stringify(allEntry))

        // localStorage.removeItem("list")

    }

    // const {par1,par2} = useParams();
    // const Location = useLocation();

    
   
    return (
        <>
        {/* <h1 className="mt-5">
            hello {par1} {par2} 
        </h1>

        <p>My Location: {Location.pathname}</p>

        {Location.pathname === `/Login/ab/cd` ? (
            <button onClick={()=> alert("Clicked")}>click me</button>
        ):null} */}

            <section className="signin">
                <div className="container mt-5">
                    <div className="signin-content">
                        <div className="signin-form">
                            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-lg rounded-lg">
                            <h2 className="form-title text-success mb-lg-5 fst-italic text-decoration-underline">Login Form</h2>
                                <Form onSubmit={handleFormSubmit}>
            
                                    <Form.Group controlId="formBasicEmail">
                                        <i class="zmdi zmdi-email"></i>
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email" name="email"
                                        value={values.email} onChange={handleChange} 
                                        />
                                        {errors.email && <p className="error">{errors.email}</p>}
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <i class="zmdi zmdi-lock"></i>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password" name="password"
                                        value={values.password} onChange={handleChange} 
                                        />
                                        {errors.password && <p className="error">{errors.password}</p>}

                                    </Form.Group>

                                    <Button className="mt-3 " variant="success btn-block" type="submit"
                                    // onClick={handle} 
                                    >
                                        Submit</Button>
                                </Form>


                                <div className="signup-link mt-3">
                                    <Link to="/register" className="link-success">New User? Click Here</Link>
                                </div>

                            </Col>
                        </div>
                    </div>
                </div>
            </section>
      
        </>
    );
};

export default Login;
