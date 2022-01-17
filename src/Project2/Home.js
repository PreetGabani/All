import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { delete_data } from './action/index';
// import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';


const Home = () => {

    const [search, setSearch] = useState("");
    // const [startDate, setstartDate] = useState("");
    // const [endDate, setEndDate] = useState("");
    const [month, setMonth] = useState("");

    const Data = useSelector((state) => state.AddDataReducer.list);

    const dispatch = useDispatch();

    const handleChange = (e) => {

        // e.preventDefault();
        setSearch(e.target.value)
        // setstartDate(e.target.value);
        // setEndDate(e.target.value);
        setMonth(e.target.value)
    }

    return (
        <>
            <div className="text-center">
                <Link to="/AddData" className="btn btn-outline-dark text-decoration-none m-2">Add</Link>
                <input type="text" placeholder="Search Here" className="btn btn-outline-dark" onChange={handleChange} />

                {/* <label className="filter" for="month">Filter Using Month:</label> */}
                <input type="month" className="btn btn-outline-dark m-lg-2" id="month" name="month" placeholder="Filter Using Month"
                    value={month} onChange={handleChange}
                />
                {/* <div className="range mt-3">
                    <DateRangePickerComponent placeholder="Enter Date Range" onChange={handleChange} />
                </div> */}

            </div>

            <div className="m-lg-4">
                {
                    <table className="table table-hover table-striped table-dark table-bordered table-responsive table-sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>City</th>
                                <th>Address</th>
                                <th>Joining Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Data.filter((val) => {
                                    // var mm = String(Data.getMonth() + 1).padStart(2, '0'); 
                                    
                                    if (search == "") {
                                        return val
                                    } else if (val.name.toLowerCase().includes(search.toLowerCase()) || val.city.toLowerCase().includes(search.toLowerCase())
                                        || val.address.toLowerCase().includes(search.toLowerCase()) || val.status.toLowerCase().includes(search.toLowerCase())
                                        || val.date.toLowerCase().includes(search.toLowerCase())) {
                                        return val
                                    }
                                    if (month == "") {
                                        return val
                                    } else if (month !== "") {
                                        let mm = String(val.date.getMonth);
                                        if(mm==month){
                                            return val
                                        }
                                    }

                                }).map((data, index) => (
                                    <tr key={index = 0}>
                                        <td>{index + 1}</td>
                                        {/* <td>{data.id}</td> */}
                                        <td>{data.name}</td>
                                        <td>{data.city}</td>
                                        <td>{data.address}</td>
                                        <td>{data.date}</td>
                                        <td>{data.status}</td>
                                        <td><Link to={`/EditData/${data.id}`} className="btn btn-outline-primary text-decoration-none m-2">Edit</Link>
                                            <a className="btn btn-outline-danger text-decoration-none m-2"
                                                onClick={() => {
                                                    if (window.confirm("Are You Sure For Delete?")) {
                                                        dispatch(delete_data(data.id))
                                                    }
                                                }}>Delete</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
            </div>
        </>
    )
}

export default Home
