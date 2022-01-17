import React from 'react';
import {Button, Col, Form} from "react-bootstrap";
import { Link} from 'react-router-dom';
import { useState } from 'react';
import RegVal from './regval'


const Register = () => {

    const [values,setValues] = useState({
        username: "",
        email: "",
        phnumber: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phnumber, setPhnumber] = useState("");
    const [password, setPassword] = useState("");


    const [allEntry,setAllEntery] = useState([]);

    const handleChanges = (event) => {
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
        setUserName({
            ...values,
            [event.target.name]: event.target.value,
        });
        setPhnumber({
            ...values,
            [event.target.name]: event.target.value,
        });

        setErrors(RegVal(values));
    };

    const handleFormSubmitReg = (event) => {
        event.preventDefault();
        setErrors(RegVal(values));

        const newEntry = {username: username, email: email, phnumber: phnumber, password: password};
        setAllEntery([ ...allEntry, newEntry]);
        console.log(allEntry);
    }

    return (
        <>  
            <section className="signup b">
                <div className="container mt-3">
                    <div className="signup-content">
                        <div className="signup-form">
                            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-lg rounded-lg">
                            <h2 className="form-title text-success mb-lg-3 fst-italic text-decoration-underline">Registration Form</h2>
                                <Form 
                                onSubmit={handleFormSubmitReg}
                                >

                                    <Form.Group controlId="formBasicName">
                                        <i className="zmdi zmdi-account"></i>
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter UserName" 
                                        value={values.username} name="username" onChange={handleChanges}
                                        />
                                        {errors.username && <p className="error">{errors.username}</p>}
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <i class="zmdi zmdi-email"></i>
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email" 
                                        value={values.email} name="email" onChange={handleChanges}
                                        />
                                        {errors.email && <p className="error">{errors.email}</p>}
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPhoneNumber">
                                        <i class="zmdi zmdi-phone"></i>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="number" placeholder="Enter Phone Number" 
                                        value={values.phnumber} name="phnumber" onChange={handleChanges}
                                        />
                                        {errors.phnumber && <p className="error">{errors.phnumber}</p>}
                                    </Form.Group>
                                    
                                    <Form.Group controlId="formBasicPassword">
                                    <i class="zmdi zmdi-lock"></i>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password" 
                                        value={values.password} name="password" onChange={handleChanges}
                                        />
                                        {errors.password && <p className="error">{errors.password}</p>}
                                    </Form.Group>

                                    <Button className="form-group form-button mt-3" variant="success btn-block" type="submit">Submit</Button>
                                </Form>

                                <div className="signin-link mt-3">
                                    <Link to="/login" className="link-success">Already User? Click Here</Link>
                                </div>

                            </Col>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;