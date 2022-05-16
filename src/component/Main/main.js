import React from 'react'
import Products from './Products.js'
import ResultTop from './ResultTop.js'

class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <ResultTop products={this.props.products} handleSort={this.props.handleSort}/>
        <Products products={this.props.products}/>
      </div>
    )
  }
} 

export default Main;