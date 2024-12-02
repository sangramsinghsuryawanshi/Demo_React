import { useState } from "react";
export function PropsPara(val)
{
    const [count,setVal]=useState(val.count);
    function set()
    {
        setVal(count+1);
    }
    return(
        <dib>
            <h2 style={{ color: "red", textShadow: "12px 12px 15px black"}}>Hello,{val.name}</h2>
            <h2 style={{ color: "blueviolet", textShadow: "12px 12px 15px black"}}>Address,{val.address}</h2>
            <h2 style={{ color: "purple", textShadow: "12px 12px 15px black"}}>Mobile No,{val.number}</h2>
            <h2 style={{ color: "purple", textShadow: "12px 12px 15px black"}}>{count}</h2>
            <button onClick={()=>set()} style={{ color: "white", textShadow: "12px 12px 15px black", backgroundColor:"black", padding:10, marginBottom:10}}>update Props count</button>
        </dib>
    );
}