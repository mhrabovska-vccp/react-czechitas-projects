import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "./style.css";
import Dashboard from "./components/Dashboard";
import smartHomeData from "./smartHomeData.js";

import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';

import Registration from "./components/Registration";

const App = () => {

  const [data, setData] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState({})

  useEffect(() => {
    fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
      .then(response => response.json())
      .then(data => setData(data.zvirata));
  },
    []
  );

  const chooseAnimal = (chosenAnimal) => {
    setSelectedAnimal(chosenAnimal);
  };

return ( 
<>
<div className="application">
  <div className="container">
    <div className="container-smarthome">
      <Dashboard data={smartHomeData} />  
    </div>
  </div>
  <div className="container">
    <div className="container-registration">
      <Registration />
    </div>
  </div>
  <div className="container">
    <div className="container-animals">
        <AnimalList data={data} chooseAnimal={chooseAnimal} />
        <AnimalDetail
          selectedAnimal={selectedAnimal}
          data={data} />
    </div>
  </div>
</div>
</>
  );
}

render(<App />, document.querySelector('#app'));
