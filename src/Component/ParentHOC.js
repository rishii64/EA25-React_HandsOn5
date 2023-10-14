import React, { useState } from "react";

function HOC(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <h5>Count: {count}</h5>
            <div className="btns">
                <button onClick={()=> setCount(count+2)}>Increase</button>
                <button onClick={()=> setCount(count-2)}>Decrease</button>
                <button onClick={()=> setCount(count*2)}>Multiply</button>
            </div>
        </div>
    )
}
export default HOC




