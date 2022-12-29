import React,{useState} from "react";

const button = () => {
    const [count,setCount]= useState(0);
    const Increment=()=>{
        setCount(count+1);
    };
    const Decrement=()=>{
        setCount(if(count>0)?count-1:alert("Count limit"));
    };
  return (
    <div className="text-center">
    <h1>{count}</h1>
    <button onClick={Increment}>+</button>
    <button onClick={Decrement}>+</button>
    </div>
  )
}

export default button;