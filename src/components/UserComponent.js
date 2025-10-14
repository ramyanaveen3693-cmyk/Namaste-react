import { useEffect, useState } from "react";

const UserComponent = (props) => {
    const [count, setValue] = useState(0)
    const [count2,setCountValue] = useState(1)
    const [count3, setCountValue3] = useState(10)


    useEffect(()=>{
        //We do API calls here
    },[])
    return(
        <div className="user-card">
            <h1>Count={count}</h1>
            <h2>Count2 is:{count2}</h2>
            <h3>Count 3 Value is:{count3}</h3>
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.Location}</h3>
            <h4>Contact: {props.contact}</h4>
            <button onClick={()=>{
               setValue(count+1)
            }}>Increament values</button>

            <button onClick={()=>{
                setCountValue3(count3+1)
            }}>Increament the value</button>
        </div>
    )
}

export default UserComponent;