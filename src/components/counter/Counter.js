import React, { useState } from 'react';

const Counter =()=>
{
     const[count,setCount]=useState(0)
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Add</button>
            <button onClick={()=>setCount(count-1)}>Del</button>
            <button onClick={()=>setCount(0)} >zero</button>
        </div>
    )
}

export default Counter;