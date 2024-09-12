import React from "react";
import "./index.css"

export default function Practice() {

  const imgstl={
    height: "100%",
    width : "100%",
  }

const arr=Array.from({length:30},(l,i)=> i+1)
  
  
  return (
    <div className="container">
    
{arr.map((e,i)=>
<div className="item" id={`i${e}`}>
<img src="copy icon.jpg" alt="" />
</div>
)}
  
    </div>
  );
}
