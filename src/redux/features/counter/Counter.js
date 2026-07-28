import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [ip, setIp] = useState("");
  return (
    <div>
      <button onClick={() => dispatch(increment())}>INC</button>
      <div>{count}</div>
      <button onClick={() => dispatch(decrement())}>DEc</button>
      <input type="text" value={ip} onChange={(e) => setIp(e.target.value)} />
      <button onClick={()=>dispatch(incrementByAmount(ip))} >Inc by amt</button>
    </div>
  );
};

export default Counter;
