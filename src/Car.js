import { Bike } from "./Bike";
import { useState } from "react";
function Car()
{
    const [s,set]=useState("");
    function Set(e)
    {
        console.log(e.target.value);
        set(e.target.value);
    }
    return(
        <div>
            <h1>Car function</h1>
            <h2 style={{color:"blue"}}>Bike Component using in car function</h2>
            <h2>{s}</h2>
            <input type="text" onChange={Set}></input>
            <Bike/>
        </div>
    );
}
export default Car;