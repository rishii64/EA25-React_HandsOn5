import React, { PureComponent } from 'react'
import Snap1 from './Snap1.png'

export default class PureCompo extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  render() {
    console.log('Render is called');
    return (
      <div className='pc'>
        <h1>Pure Component :</h1>
        <p>
          A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React.
          Is a class component that comes with an implementation of the shouldComponentUpdate lifecycle method. It does a shallow comparison of state and props before it updates and can be used as a performance optimization.
          Here is an example:
        </p>
            <img src={Snap1} alt='' />
            <h4>Count value : {this.state.count}</h4>
            <button onClick={() => this.setState({ count: 5 })}>check</button>
        <p>
          In this example, the PureCompo class extends the PureComponent class which means that the ComponentDidUpdate lifecycle method will be automatically implemented for us. The component lifecycle method is used to determine whether ornged.This can be a significant performance optimization, especially for components that are re-rendered frequently.
        </p>


        <hr></hr>
      </div>
    )
  }
}
