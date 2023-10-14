import React, { PureComponent } from 'react'

export default class PureCompo extends PureComponent {
    constructor(){
        super();
        this.state ={
            count: 0
        }
    }
  render() {
    console.log('Render is called');
    return (
      <>
      <h1>Pure Component :</h1>
      <p>
      A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React.
      Is a class component that comes with an implementation of the shouldComponentUpdate lifecycle method. It does a shallow comparison of state and props before it updates and can be used as a performance optimization.
      Here is an example:
        <p>
            {/* import React, {PureComponent} from 'react'

            export default class PureCompo extends PureComponent {
              constructor(){
              super();
                this.state ={
                  count: 0
                }
            }
            render() {
              console.log('Render is called');
                return (
                  <>
                    <h4>Count value : {this.state.count}</h4>
                    <button onClick={()=> this.setState({count:5})}>check</button>
                  </>
                  )
                )
              }
            } */}
        </p>
      </p>
        <h4>Count value : {this.state.count}</h4>
        <button onClick={()=> this.setState({count:5})}>check</button>

        <p>
        In this example, the PureCompo class extends the PureComponent class which means that the ComponentDidUpdate lifecycle method will be automatically implemented for us.
        The component lifecycle method is used to determine whether or not a component should be re-rendered. In the case of a Pure Component, the ComponentDidUpdate method will only return true if the state or props have changed.This can be a significant performance optimization, especially for components that are re-rendered frequently.
        </p>
            <hr></hr>
        <h1>Higher Order Component(HOC) :</h1>
      <p>
      A higher-order component (HOC) in React is a function that takes a component as an argument and returns a new component that wraps the original component. HOCs allow you to add additional functionality to a component without modifying the component’s code. For example, you can use a HOC to add authentication or routing capabilities to a component or to apply a specific style or behavior to multiple components. HOCs can take additional arguments, which lets you customize the behavior of the HOC. This makes them a flexible and reusable way to add functionality to your components
      Here is an example:
      </p>



      </>
    )
  }
}
