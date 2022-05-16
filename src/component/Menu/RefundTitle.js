import React from 'react';

class RefundTitle extends React.Component {
  render() {
    return (
      <ul>
        {this.props.types.map((el, index) => (
          <li 
          key={index}
          onClick={() => this.props.handleTitle(el.title)}
          >
            {el.title}
          </li>
        ))}
      </ul>
    )
  }
}

export default RefundTitle