import React from 'react';
import Header from './Header';
import Main from './Main/Main';
import Menu from './Menu/Menu';

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleFetchData = this.handleFetchData.bind(this);
    this.handleTitle = this.handleTitle.bind(this)
    this.handleIdTitle = this.handleIdTitle.bind(this)
    this.handleIdType = this.handleIdType.bind(this)
    this.handleType = this.handleType.bind(this)
    this.handleRatings = this.handleRatings.bind(this)
    this.handlePriceStart = this.handlePriceStart.bind(this)
    this.handlePriceEnd = this.handlePriceEnd.bind(this)
    this.handleProductLi = this.handleProductLi.bind(this)
    this.handleClearAll = this.handleClearAll.bind(this)

    this.state = {
      products: [],
      valueSearch: '',
      sort: '',
      valueIdTitle: '',
      valueTitle: '',
      valueIdType: '',
      valueType: '',
      valueRatings: '',
      valuePriceStart: '',
      valuePriceEnd: '',
      currentPage: 1,
      productsLimit: 3,
    }
  }

  handleFetchData() {
    let url = 'http://localhost:3000/products?';

    if(this.state.valueSearch) {
      url += `q=${this.state.valueSearch}`
    }

    if(this.state.sort) {
      url += `&_sort=price&_order=${this.state.sort}`
    }
    
    if(this.state.valueRatings) {
      url += `&ratings=${this.state.valueRatings}`
    }

    if(this.state.valueTitle) {
      url += `&title=${this.state.valueTitle}`
      console.log(url)
    }

    if(this.state.valueType) {
      url += `&type=${this.state.valueType}`;
    }

    if(this.state.valuePriceStart) {
      url += `&price_gte=${this.state.valuePriceStart}`
    }

    if(this.state.valuePriceEnd) {
      url += `&price_lte=${this.state.valuePriceEnd}`
    }

    fetch(url)
      .then(response => response.json())
      .then(products => {
        this.setState({products})
    })
  }

  //Search
  async handleSearch(value) {
    await this.setState({valueSearch: value})
    this.handleFetchData()
  }

  // Sort
  async handleSort(value) {
    await this.setState({sort: value})
    this.handleFetchData()
  }

  // Title
  async handleTitle(title) {
    await this.setState(() => ({valueTitle: title}))
    console.log(this.state.valueTitle)
    this.handleFetchData()
  }

  async handleIdTitle(id) {
    await this.setState({valueIdTitle: id})
  }

  //Type 
  async handleType(type) {
    await this.setState({valueType: type})
    // console.log(this.state.valueType)
    this.handleFetchData()
  }

  async handleIdType(type) {
    await this.setState({valueIdType: type})
  }

  //Rating
  async handleRatings(value) {
    await this.setState({valueRatings: value})
    this.handleFetchData()
  }

  //Price
  async handlePriceStart(start) {
    await this.setState({valuePriceStart: start})
    this.handleFetchData()
  }

  async handlePriceEnd(end) {
    await this.setState({valuePriceEnd: end})
    this.handleFetchData()
  }

  //handleProductLimit
  async handleProductLi(value) {
    await this.setState({currentPage: value})
  }

  //handleClearAll
  async handleClearAll() {
    await this.setState({sort: ''});
    await this.setState({valueRatings: ''});
    await this.setState({valuePriceStart: ''})
    await this.setState({valuePriceEnd: ''})
    // this.handleFetchData();
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/products?')
      .then(response => response.json())
      .then(products => {
        this.setState({products});
    })
  }


  render() {
    let lastIndexProduct = this.state.currentPage * this.state.productsLimit;
    let firstIndexProduct = lastIndexProduct - this.state.productsLimit;
    let productPagination = this.state.products.slice(firstIndexProduct, lastIndexProduct);
    let row = productPagination;
    return(
      <div >
        <Header handleSearch={this.handleSearch}/>
        <div className='main'>
          <Menu
            sort={this.state.sort}
            handleTitle={this.handleTitle}
            handleIdTitle={this.handleIdTitle}
            valueIdTitle={this.state.valueIdTitle}
            valueTitle={this.state.valueTitle}
            handleIdType={this.handleIdType}
            handleType={this.handleType}
            valueType={this.state.valueType}
            handleRatings={this.handleRatings}
            valueRatings={this.state.valueRatings}
            valuePriceStart={this.state.valuePriceStart}
            valuePriceEnd={this.state.valuePriceEnd}
            handlePriceStart={this.handlePriceStart}
            handlePriceEnd={this.handlePriceEnd}
            handleClearAll={this.handleClearAll}
          />
          <Main 
            products={row}
            productsLength={this.state.products} 
            currentPage={this.state.currentPage} 
            productsLimit={this.state.productsLimit} 
            totalProducts={this.state.products.length}
            handleProductLi={this.handleProductLi}
            handleSort={this.handleSort}/>
        </div>
      </div>
    )
  }
}

export default Content
