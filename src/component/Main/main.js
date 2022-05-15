import React from 'react'
import Header from '../Header.js'
import Menu from '../Menu/Menu.js';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }
  // componentDidUpdate() {

  // }
  componentDidMount() {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(products => {
        console.log(products)
      })
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          <Menu />
        </div>
      </div>
    )
  }
} 

export default Main;