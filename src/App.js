import React, { Component } from 'react';
import './App.css';
import Hesap from './components/hesap'; 
import Iban from './components/iban'
import SimpleForm from "./SimpleForm";
import showResults from "./showResults";
import Divider from '@material-ui/core/Divider';


class App extends Component {
  render() {
    return (
      
        <div > 
        <header className="App-header">
        <p className="p">Hesaba EFT Talimatı</p>
        <Divider variant="middle" />
        <Hesap  />
        <SimpleForm onSubmit={showResults}/>
        </header>
      </div>
 
    );
  }
}

export default App;





