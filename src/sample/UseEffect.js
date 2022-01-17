import {React,useEffect,useState} from 'react'

const UseEffect = () => {

    const [count, setcount] = useState(0);
    const [counts, setcounts] = useState(0);

    useEffect(()=>{
        // document.title = `Hello (${count})`
        alert("hello");
    },[count]);

    return (
        <>
            <h1>{count}</h1>
            <button className="btn" onClick={()=>setcount(count+1)}>Click Here</button>
            <br/><br/>
            <h1>{counts}</h1>
            <button className="btn" onClick={()=>setcounts(counts+1)}>Click Here</button>
        </>
    )
}

export default UseEffect
