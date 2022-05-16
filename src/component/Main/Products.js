import React from 'react'

class Products extends React.Component {
  constructor(props) {
    super(props)
    this.handleRating = this.handleRating.bind(this)
  }

  handleRating(rating) {
    let stars = [];

    for(let i = 0; i < rating; i++) {
      stars.push(<span className="fa fa-star" key={i} />)
    }
    for(let i = 0; i < 5 - rating; i++) {
      stars.push(<span className="fa fa-star-o" key={5 - i} />)
    }

    return stars;
  }

  render() {
    return (
      <div className='item-box-list'>
        {this.props.products.map((el, index) => (
          <div className='item-box' key={index}>
            <div className='item-box-image'>
              <img src={el.image} alt="images" />
            </div>
            <h3>{el.name}</h3>
            <div className='item-box-bottom'>
              <span>{this.handleRating(el.ratings)}</span>
              <span>${el.price}</span>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Products