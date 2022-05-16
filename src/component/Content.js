import React from 'react'
import Header from './Header'
import Main from './Main/Main.js'
import Menu from './Menu/Menu.js'

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.handleSort = this.handleSort.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleTitle = this.handleTitle.bind(this)

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

  handleTitle(value) {
    if(value) {
      value ? this.fetchData(`${this.state.url}&title=${value}`) : this.fetchData(this.state.url)
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/products?')
      .then(response => response.json())
      .then(products => {
        this.setState({products})
    })
  }

  render() {
    return(
      <div>
        <Header />
        <div>
          <Main products={this.state.products} handleSort={this.handleSort}/>
          <Menu handleTitle={this.handleTitle}/>
        </div>
      </div>
    )
  }
}

export default Content