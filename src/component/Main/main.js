import React from 'react'
import ResultTop from './ResultTop.js'
import Products from './Products.js'
import Pagination from './Pagination.js';

class Main extends React.Component {
  render() {
    return (
      <div>
        <ResultTop 
          products={this.props.products} 
          handleSort={this.props.handleSort}
          productsLength={this.props.productsLength}
        />
        <Products products={this.props.products} />
        <Pagination  
          currentPage={this.props.currentPage}
          productsLimit={this.props.productsLimit}
          totalProducts={this.props.totalProducts}
          handleProductLi={this.props.handleProductLi}
        />
      </div>
    )
  }
}
export default Main;