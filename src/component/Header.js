import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className='header-wrapper'>
        <a href="https://community.algolia.com/instantsearch.js/" className="is-logo">
          <img src="logo-is.png" width="40" />
        </a>
        <a href="./" className="logo">amazing</a>
        <div className="input-group">
          <div className="ais-search-box"><input type="text" class="form-control ais-search-box--input" id="q" autocapitalize="off" autocomplete="off" autocorrect="off" placeholder="Search a product" role="textbox" spellcheck="false" value="" /></div>
          <span className="input-group-btn">
            <button className="btn btn-default"><i className="fa fa-search"></i></button>
          </span>
        </div>
      </header>
    )
  }
}

export default Header