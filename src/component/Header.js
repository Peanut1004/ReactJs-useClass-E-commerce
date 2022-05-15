import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='name'>Amazing</div>
        <div><input type="text"/></div>
      </header>
    )
  }
}

export default Header