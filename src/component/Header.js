import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(value) {
    this.props.handleSearch(value)
  }

  render() {
    return (
      <header className='header'>
        <div className='name'>Amazing</div>
        <div><input type="text" onChange={(e) => this.handleClick(e.target.value)}/></div>
      </header>
    )
  }
}

export default Header