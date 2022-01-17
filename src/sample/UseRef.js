import {React,useState,useRef} from 'react'

const UseRef = () => {

    const name = useRef(null);
    const [show, setShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const names = name.current.value;

        names === "" ? alert("Please Fill Details") : setShow(true);
    }

    return (
        <>
        <div>
            <form action="" onSubmit={handleSubmit} className="mt-5 m-lg-5 bg-light pt-5 p-lg-5 w-25">
                <div>
                    <label htmlFor="name">Enter Name</label><br />
                    <input placeholder="Enter Name Here" type="text" id="name" ref={ name } />
                </div>
                <br/>
                <button >Submit</button>
            
            </form>   
            <p className="m-lg-5"> {show ? `your name is ${name.current.value}`: ""} </p>
        </div>
        </>
    )
}

export default UseRef
