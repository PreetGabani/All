import React, { useState } from 'react'
import { add_data } from './action/index';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'


const AddData = () => {


    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");

    const [allEntry, setAllEntery] = useState([]);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEntry1 = { name: name, address: address, city: city, date: date, status: status };
        setAllEntery([...allEntry, newEntry1]);
        console.log(allEntry);
    }

    const handleClick = (e) => {

        if(!name||!address||!city||!date||!status){
            toast.warning("All Fields are Mandatory")

         }else{
            dispatch(add_data(name, address, city, date, status))
            history.push("/")
         }
    }


    return (
        <>
            <div className="container">
                <h3 className="text-center mt-2 fst-italic">Add Information</h3>
                <div className="row mt-2 card mx-auto shadow-lg">
                    <div className="col-md-10 mx-auto p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <i className="zmdi zmdi-account-box"></i>
                                <label className="control-label" for="name">Name :</label>
                                <input type="text" className="form-control mt-2" id="name" placeholder="Enter Name Here" name="name" required
                                    value={name} onChange={(e) => setName(e.target.value)}
                                />

                            </div>

                            <div className="form-group">
                                <i className="zmdi zmdi-pin"></i>
                                <label className="control-label mt-2" for="address">Address:</label>
                                <input type="text" className="form-control mt-2" id="address" placeholder="Enter Address Here" name="address" required
                                    value={address} onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <i className="zmdi zmdi-city"></i>
                                <label className="control-label mt-2" for="city">City:</label>
                                <input type="text" className="form-control mt-2" id="city" placeholder="Enter City Here" name="city" required
                                    value={city} onChange={(e) => setCity(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <i className="zmdi zmdi-calendar-alt"></i>
                                <label className="control-label mt-2" for="date">Joining Date:</label>
                                <input type="date" className="form-control mt-2" id="date" name="date" required
                                    value={date} onChange={(e) => setDate(e.target.value)}
                                />
                            </div>


                            <div className="form-group">
                                <label for="status" className="mt-3">Status:</label>
                                <select required name="status" id="status" onChange={(e) => setStatus(e.target.value)} className="btn-sm btn-outline-dark m-lg-2">
                                    <option required>Select Here</option>
                                    <option value="Active">Active</option>
                                    <option value="Deactive">Deactive</option>
                                </select>
                            </div>


                            <div className="form-group mt-3">
                                <button type="submit" className="btn btn-outline-dark m-2" onClick={handleClick}>Submit</button>
                                <Link to="/" className="btn btn-outline-dark text-decoration-none m-2">Go Back</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default AddData
