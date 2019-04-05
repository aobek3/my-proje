import React, { Component } from 'react';
import './App.css';
import Hesap from './components/hesap'; 
import Divider from '@material-ui/core/Divider';
import Test from './test';



class App extends Component {
  render() {
    return (
      
        <div > 
        <header className="App-header">
        <p className="baslik">Hesaba EFT Talimatı</p>
        <Divider variant="'inset' " />
        <Hesap  />
        <Divider variant="middle" />
        <Test/>
       
         
        </header>
      </div>
 
    );
  }
}

export default App;





