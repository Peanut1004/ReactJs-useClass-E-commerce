import React from 'react'
import Products from './Products.js'
import ResultTop from './ResultTop.js'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.handleSort = this.handleSort.bind(this);

    this.state = {
      url: 'http://localhost:3000/products?',
      products: [],
      sort: '',
    }
  }

  fetchData(value) {
    fetch(value)
      .then(response => response.json())
      .then(products => {
        this.setState({products})
    })
  }
  
  handleSort(value) {
    value ? this.fetchData(`${this.state.url}&_sort=price&_order=${value}`) : this.fetchData(this.state.url)
  }

  componentDidMount() {
    fetch('http://localhost:3000/products?')
      .then(response => response.json())
      .then(products => {
        this.setState({products})
      })
  }

  render() {
    return (
      <div className='main'>
        <ResultTop products={this.state.products} handleSort={this.handleSort}/>
        <Products products={this.state.products}/>
      </div>
    )
  }
} 

export default Main;