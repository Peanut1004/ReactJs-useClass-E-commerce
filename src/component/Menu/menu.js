import React from 'react';
import RefundPrice from './RefundPrice';
import RefundRating from './RefundRating';
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
        <div id=""></div>

        <p>Refine by</p>
        {/* <RefundTitle
          types={this.state.types}
          valueTitle={this.props.valueTitle}
          handleTitle={this.props.handleTitle} 
          valueIdTitle={this.props.valueIdTitle}
          handleIdTitle={this.props.handleIdTitle}
          handleType={this.props.handleType}
          handleIdType={this.props.handleIdType}
          
        />
        
        <p>Brand</p>

        <p>Ratings</p>
        <RefundRating handleRating={this.props.handleRating}/>

        <p>Prices</p>
        <RefundPrice handlePrice={this.props.handlePrice}/> */}

        <h5>Data courtesy of Best Buy</h5>
      </aside>
    )
  }
}

export default Menu