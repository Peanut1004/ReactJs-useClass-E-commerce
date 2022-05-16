import React from 'react';

class RefundTitle extends React.Component {
  render() {
    return (
      <div>
        {this.props.types.map((el, index) => (
          <div key={index}>{el.title}</div>
        ))}
      </div>
    )
  }
}

export default RefundTitle