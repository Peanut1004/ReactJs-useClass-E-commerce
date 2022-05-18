import React from 'react'

class RefundRating extends React.Component {
  constructor(props) {
    super(props);
    this.productRating = this.productRating.bind(this);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      ratings: [4, 3, 2, 1]
    }
  }

  productRating(el) { // 4
    let star = [];
    for(let i = 0; i < el; i++) {
      star.push(<span className="fa fa-star" key={i} />)
    }
    for(let i = 0; i < 5 - el; i++) {
      star.push(<span className="fa fa-star-o" key={5 - i} />)
    }
    return star
  }

  handleClick(el) {
    this.props.handleRatings(el)
  }

  render() {
    return (
      <div className='refund-rating'>
        <ul>
          {this.state.ratings.map((el, index) => (
            <li 
              key={index}
              onClick={() => this.handleClick(el)}
            >
              {this.productRating(el)} {el} Sao
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default RefundRating