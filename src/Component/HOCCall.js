import React from "react";
import Snap2 from './Snap2.png'
import Snap3 from './Snap3.png'

function HOCCall(props){
    return(
        <div className="hc">
            <h1>Higher Order Component(HOC) :</h1>
            <p>
                 Higher-order components (HOCs) are a powerful feature of the React library. They allow you to reuse component logic across multiple components. In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.
                 Here is an example:
            </p>
            <img src={Snap3} alt='' />
            <img src={Snap2} alt=''/>
            <h2>HOC Component</h2>
            <h1>{<props.value />}</h1>
            <p>
                In the above example I created a count variable with value 0 and three buttons which will perform addition, subtraction and multiplication with 2 simultaneously. Here I created a component HOCCall which is passed as a prop to the parent component HOC which will modify the count value accordingly.
            </p>
        </div>
    )
}
export default HOCCall

