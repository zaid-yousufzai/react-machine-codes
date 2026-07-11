import React, { useState } from 'react'

const One = () => {
    const [data,setData]=useState("")
    const [dat,setDat]=useState("")
    const handleData=()=>
    {
        setData("hello")
    }
     const handleData2=()=>
    {
        setDat("hel")
    }
  return (
    <div>
         <button data-testid="btn1" onClick={handleData}>Add</button>
          <button data-testid="btn2" onClick={handleData2}>Add</button>
         <h1>{data}</h1>
         <h1>{dat}</h1>
    </div>
   
  )
}

export default One