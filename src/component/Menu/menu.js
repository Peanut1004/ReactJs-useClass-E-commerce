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
        <RefundTitle
          types={this.state.types}
          handleTitle={this.props.handleTitle} 
          handleIdTitle={this.props.handleIdTitle}
          valueIdTitle={this.props.valueIdTitle}
          valueTitle={this.props.valueTitle}
          handleType={this.props.handleType}
          handleIdType={this.props.handleIdType}
          
        />
        
        <p>Brand</p>

        <p>Ratings</p>
        <RefundRating handleRatings={this.props.handleRatings}/>

        <p>Prices</p>
        <RefundPrice 
          handlePriceStart={this.props.handlePriceStart}
          handlePriceEnd={this.props.handlePriceEnd}
        />

        <h5>Data courtesy of Best Buy</h5>
      </aside>
    )
  }
}

export default Menu