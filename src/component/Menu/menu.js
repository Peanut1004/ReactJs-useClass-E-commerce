import React from 'react';
import RefundTitle from './RefundTitle';

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      types: [],
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/types?')
    .then(response => response.json())
    .then(types => {
      this.setState({types})
    })
  }
  
  render() {
    return (
      <aside>
        <p>Show results for</p>
        {/* {this.state.types} */}
        <div id=""></div>

        <p>Refine by</p>
        <RefundTitle types={this.state.types}/>
        
        <p>Brand</p>

        <p>Ratings</p>

        <p>Prices</p>


        <h5>Data courtesy of Best Buy</h5>
      </aside>
    )
  }
}

export default Menu