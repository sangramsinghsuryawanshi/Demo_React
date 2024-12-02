import { useState } from "react";
export function Bike()
{
    const [count,setCount]=useState(0);
    const [name,setName]=useState("sangram");
    function al()
    {
        alert('Using lambda Function.........!');
    }
    function a2()
    {
       setName("Suryawanshi");
       alert(name);
    }
    function a3()
    {
       setCount(count+1);
    }
    return(
       <div>
         <h3>lambda Function</h3>
         <button onClick={()=>al()} style={{padding:10, color:"white", backgroundColor:"green",borderRadius:4,border:NaN}} >Click Function</button><br></br><br></br>
         <h3>{name}</h3>
         <button onClick={()=>a2()} style={{padding:10, color:"black", backgroundColor:"white",borderRadius:4,border:NaN}} >Update Name</button><br></br><br></br>
         <h3>{count}</h3>
         <button onClick={()=>a3()} style={{padding:10, color:"white", backgroundColor:"orange",borderRadius:4,border:NaN}} >Update Count</button>
       </div>
        
    );
}