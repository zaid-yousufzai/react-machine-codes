import React, { useState } from 'react';
import { data } from "./data.js";
import './style.css'
const Accordian = () => {
  const[vis,setVis]=useState(null)

  const handleOpen=(index)=>
  {
    setVis((prev)=>prev===index ? null : index)
  }

  return (
    <div>
      {data.map((item, index) => (
        <div className="box" key={index}>
          <h1 className="title" onClick={()=>handleOpen(index)} >{item.title}</h1>
          <h2 className="content">{vis===index && item.content}</h2>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
