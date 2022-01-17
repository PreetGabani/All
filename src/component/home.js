import Button from '@restart/ui/esm/Button';
import React from 'react'
import { Link} from 'react-router-dom';

const home = () => {
    return (
        <div className="home">
            <h1 className="text text-success">Welcome to Login & Registration Demo</h1>
            <Button className="button"><Link to="/login" className="link-success text-decoration-none">Login</Link></Button>
            <Button className="button"><Link to="/register" className="link-success text-decoration-none">Register</Link></Button>
        </div>
    )
}
export default home;