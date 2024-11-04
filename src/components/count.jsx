import { useState } from "react"

export const Counter=(props)=>{
    const [count,setCount]=useState(props.number);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        if(count<1){
            return
        }
        setCount(count-1);
    }
    const decrementBy10=()=>{
        setCount(count-props.number);
        if(count<1){
            setCount(0)
            return
        }
        
    }
    return(
        <div>
            counter<hr/>
            <div>{count}</div>
            <button type="button" onClick={increment}>+</button>
            <button type="button" onClick={decrement}>-</button>
            <button type="button" onClick={decrementBy10}>-10</button>
        </div>
    )
}