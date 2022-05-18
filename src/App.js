
import React from 'react'
import './App.css'
import Header from './component/Header';
import Main from './component/Main/Main.js';
import Menu from './component/Menu/Menu.js'

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Menu />
        <Main />
      </div>
      
    )
  }
}

export default App;
