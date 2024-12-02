import logo from "./anime.jpg"
import { useState } from "react"

export function HideShow()
{
    const[isVisible,setIsvisible]=useState(true);
    return(
        <div>
             {isVisible?<img alt="Anime" src={logo} width={"30%"}></img>:null}<br></br>
            <button onClick={()=>setIsvisible(false)} style={{ color: "white", textShadow: "12px 12px 15px black", backgroundColor:"black", padding:10, marginBottom:10}}>Hide</button>&nbsp;
            <button onClick={()=>setIsvisible(true)} style={{ color: "white", textShadow: "12px 12px 15px black", backgroundColor:"black", padding:10, marginBottom:10}}>Show</button>&nbsp;
            <button onClick={()=>setIsvisible(!isVisible)} style={{ color: "white", textShadow: "12px 12px 15px black", backgroundColor:"black", padding:10, marginBottom:10}}>Toggle</button>
        </div>
    );
}