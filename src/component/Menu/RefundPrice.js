import React from 'react';

class RefundPrice extends React.Component {
  constructor(props) {
    super(props);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleValueStart = this.handleValueStart.bind(this)
    this.handleValueEnd = this.handleValueEnd.bind(this)
    this.handleFormPrice = this.handleFormPrice.bind(this)
    this.state = {
      itemPrices: [],
      inputValueStart: '',
      inputValueEnd: '',
    }
  }

  handlePrice(start, end) {
    this.props.handlePriceStart(start)
    this.props.handlePriceEnd(end)
  }

   handleValueStart(e) {
     this.setState({inputValueStart: e.target.value})
  } 

   handleValueEnd(e) {
     this.setState({inputValueEnd: e.target.value})
  } 

  handleFormPrice() {
    this.props.handlePriceStart(this.state.inputValueStart)
    this.props.handlePriceEnd(this.state.inputValueEnd)
  }

  componentDidMount() {
    let items = [];
    let prices = ['', 1, 80, 160, 240, 1820, 3400, 4980, ''];
    for(let i = 0; i < prices.length - 1; i++) {
      let item = {
        id: i + 1,
        start: prices[i],
        end: prices[i + 1]
      }
      items.push(item)
    }
    this.setState({itemPrices: items})
  }

  render() {
    return (
      <div>
        <ul>{this.state.itemPrices.map((el, index) => {
        if(el.start === '') {
          return (
            <li 
              key={index}
              onClick={() => this.handlePrice(el.start, el.end)}
            >
            ≤{el.end}
            </li>
          )
        }
        else if(el.end === '') {
          return (
            <li 
              key={index}
              onClick={() => this.handlePrice(el.start, el.end)}
            >
            ≥{el.start}
            </li>
          )
        }
        else {
          return (
            <li 
              key={index}
              onClick={() => this.handlePrice(el.start, el.end)}
            >
            ${el.start} - {el.end}
            </li>
          )
        }
      })}</ul>
      <form className="form-input" onSubmit={e => {
        e.preventDefault();
        this.handleFormPrice();
      }}>
        <label>
          <span>$</span>
          <input 
            type="number" 
            placeholder='start'
            value={this.state.inputValueStart}
            onChange={this.handleValueStart} 
          />
        </label>
        <label>
          <span>$</span>
          <input 
            type="number" 
            placeholder='end'
            value={this.state.inputValueEnd}
            onChange={this.handleValueEnd}
          />
        </label>
        <button type="submit">Go</button>
      </form>
      </div>
    )
  }
}

export default RefundPrice