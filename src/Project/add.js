import React, { useState } from 'react'
import { add_data } from './action/index';
import { useDispatch } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const Add = () => {


    const [title,setTitle] = useState("");
    const [body, setBody] = useState("");
    const [allEntry,setAllEntery] = useState([]);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEntry1 = {title: title,body: body};
            setAllEntery([ ...allEntry, newEntry1]);
            console.log(allEntry);

    }

    const handleClick= (e) => {
        
        if(title.length>20){
           toast.error("Title length length must be 20 or less")
        }else if (body.length<100){
            toast.error("Body length:100")
        }else{
            dispatch(add_data(title,body))
        history.push("/")

        }
    }


    return (
        <>
                    <div className="container">
                        <h1 className="text-center mt-5">Add Title And Body</h1>
                        <div className="row mt-5">
                            <div className="col-md-4 shadow mx-auto p-4">
                                        <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label className="control-label " for="title">Title:</label>       
                                            <input type="text" className="form-control mt-2" id="title" placeholder="Enter Title Here" name="title" required
                                            value={title} onChange={(e)=>setTitle(e.target.value)}
                                            />
                                        </div>
    
                                        <div className="form-group">
                                            <label className="control-label mt-3" for="body">Body:</label>       
                                            <textarea type="text" row="5" className="form-control mt-2" id="body" placeholder="Enter Body Here" name="body" required
                                            value={body} onChange={(e)=>setBody(e.target.value)}
                                            />
                                        </div>
    
                                        <div className="form-group mt-3 d-grid">        
                                            <button type="submit" className="btn btn-outline-dark" onClick={handleClick}>Submit</button>
                                        </div>
    
                                    </form>
                            </div>
                        </div>
                    </div>
                    <ToastContainer/>
        </>
    )
}

export default Add
