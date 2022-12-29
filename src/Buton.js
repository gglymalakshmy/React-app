import React,{useState} from "react";

const Buton = () => {
    const [count,setCount]= useState(0);
    // const Increment=()=>{
    //     setCount(count+1);
    // };
    // const Decrement=()=>{
    //     setCount(count-1);
    //     if(count===0)
    //     {
    //         alert("Exceed the limit");
    //         setCount(0);
    //     }
    // };
  return (
    <div className="text-center">
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>+</button>
    <button onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}

export default Buton;
 // <div className="d-flex">
    //   {arr.map((item)=>{
    //     return(
    //       <></>
    //     );
    //   }
    // </div>