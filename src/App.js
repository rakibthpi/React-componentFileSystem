import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countrys from './components/Countrys/Countrys';

function App() {
  return (
    <div className="App">
      <LoadCountry></LoadCountry>
      <Countrys></Countrys>
    </div>
  );
}

function LoadCountry(){
  const [countrys, setCountrys] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => setCountrys(data))
  },[]);
  return (
    <div>
      <h1>Load Country {countrys.length}</h1>
      {
        countrys.map(country => <extraCounrty name={country.name} flag={country.flag}></extraCounrty>)
      }
    </div>
  );
}

function extraCounrty(props){
  return (
    <div>
      <div className="singleCountry">
          <img src={props.name} alt="photos" />
          <h1>{props.flag}</h1>
        </div> 
    </div>
  );
}

export default App;
