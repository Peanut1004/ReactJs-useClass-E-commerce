import React from 'react'
import ResultTop from './ResultTop.js'
import Products from './Products.js'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.handleSort = this.handleSort.bind(this);
    // this.fetchData = this.fetchData.bind(this);
    // this.handleTitle = this.handleTitle.bind(this)
    // this.handleIdTitle = this.handleIdTitle.bind(this)
    // this.handleIdType = this.handleIdType.bind(this)
    // this.handleType = this.handleType.bind(this)
    // this.handleRating = this.handleRating.bind(this)
    // this.handlePrice = this.handlePrice.bind(this)

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
    this.setState({sort: value});
    console.log(value)
  }

  // // Title
  // handleIdTitle(id) {
  //   this.setState({valueIdTitle: id})
  // }

  // handleTitle(value) {
  //   this.setState({valueTitle: value})
  // }

  // // Type
  // handleIdType(id) {
  //   this.setState({valueIdType: id})
  // }

  // handleType(value) {
  //   this.setState({valueTitle: value})
  // }

  // //Rating
  // handleRating(value) {
  //   this.setState({valueRating: value})
  // }

  // //Price
  // handlePrice(start, end) {
  //   this.setState({valuePriceEnd: end})
  // }


  // fetchData(value) {
  //   console.log(value)
  //   fetch(value)
  //     .then(response => response.json())
  //     .then(products => {
  //       this.setState({products})
  //   })
  // }


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
        <ResultTop products={this.state.products} handleSort={this.handleSort}/>
        <Products products={this.state.products}/>
        {/* <Header />
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
        </div> */}
      </div>
    )
  }
}

//   render() {
//     return (
//       <div className='main'>
//         <ResultTop products={this.props.products} handleSort={this.props.handleSort}/>
//         <Products products={this.props.products}/>
//       </div>
//     )
//   }
// } 

export default Main;