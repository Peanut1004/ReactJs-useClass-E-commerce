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
    this.handleIdTitle = this.handleIdTitle.bind(this)
    this.handleIdType = this.handleIdType.bind(this)
    this.handleType = this.handleType.bind(this)
    this.handleRating = this.handleRating.bind(this)
    this.handlePrice = this.handlePrice.bind(this)

    this.state = {
      url: 'http://localhost:3000/products?',
      products: [],
      sort: '',
      valueIdTitle: '',
      valueTitle: '',
      valueIdType: '',
      valueType: '',
      valueRating: '',
      valuePriceStart: '',
      valuePriceEnd: '',
    }
  }
  
  // Sort
  handleSort(value) {
    this.setState({sort: value})
  }

  // Title
  handleIdTitle(id) {
    this.setState({valueIdTitle: id})
  }

  handleTitle(value) {
    this.setState({valueTitle: value})
  }

  // Type
  handleIdType(id) {
    this.setState({valueIdType: id})
  }

  handleType(value) {
    this.setState({valueTitle: value})
  }

  //Rating
  handleRating(value) {
    this.setState({valueRating: value})
  }

  //Price
  handlePrice(start, end) {
    this.setState({valuePriceEnd: end})
  }

  componentDidUpdate(prevProps, prevState) {
    let url = 'http://localhost:3000/products?';
    if(this.state.sort !== prevState.sort) {
      this.fetchData(url += `&_sort=price&_order=${this.state.sort}`)
    }
    // if(this.state.valueTitle !== prevState.valueTitle) {
    //   this.fetchData(url += `&title=${this.state.valueTitle}`)
    // }
    // if(this.state.valueRating !== prevState.valueRating) {
    //   this.fetchData(url += `&ratings=${this.state.valueRating}`)
    // }
  }

  fetchData(value) {
    console.log(value)
    fetch(value)
      .then(response => response.json())
      .then(products => {
        this.setState({products})
    })
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
        <div>{}</div>
        <Header />
        <div>
          <Main 
            products={this.state.products} 
            handleSort={this.handleSort}
          />
          <Menu
            valueTitle={this.state.valueTitle}
            handleTitle={this.handleTitle}
            valueIdTitle={this.state.valueIdTitle}
            handleIdTitle={this.handleIdTitle}
            handleType={this.handleType}
            handleIdType={this.handleIdType}
            handleRating={this.handleRating}
            handlePrice={this.handlePrice}
          />
        </div>
      </div>
    )
  }
}

export default Content