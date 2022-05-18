import React from 'react';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.handlePage = this.handlePage.bind(this);
  }

  handlePage(value) {
    this.props.handleProductLi(value)
  }

  render() {
    let totalPages = Math.ceil(this.props.totalProducts / this.props.productsLimit);
    let pages = [];
    for(let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
    return (
      <div className='pagination'>
        <ul>
          <li>
            <button 
              disabled={this.props.currentPage <= 1}
              onClick={() => this.handlePage(this.props.currentPage - 1)}
            >
              <i className="fa fa-angle-left"></i> Previous page
            </button>
          </li>
          {pages.map((el, index) => (
            <li key={index} className="number" onClick={() => this.handlePage(el)}>{el}</li>
          ))}
          <li>
            <button 
              disabled={this.props.currentPage >= totalPages}
              onClick={() => this.handlePage(this.props.currentPage + 1)}
            >
              Next page <i className="fa fa-angle-right"></i>
            </button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Pagination