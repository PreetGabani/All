import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { incNumber, decNumber } from "./actions/index"

const ReducerHome = () => {
    const state = useSelector((state)=>state.IncDec);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="container reducerHome">
                <h1>Inc Dec Using React Reducer</h1>
                <div className="inc_dec">
                    <button className="incdec_button" title="Decrement" onClick={()=>dispatch(decNumber(1))}>-</button>
                    {<input type="text" className="input" value={state}/>}
                    <button className="incdec_button" title="Increment" onClick={()=>dispatch(incNumber(10))}>+</button>
                </div>

            </div>
        </div>
    )
}

export default ReducerHome;
