import {Routes,Route} from "react-router-dom";

import MainPage from './components/MainPage';
import AboutUsPage from './components/aboutUsPage/AboutUsPage'
import Apartments from  './components/Apartments/Apartments'
import AboutProject from './components/AboutProject/AboutProject';
import './App.css';
import React from "react";
import SingleAppartment from "./components/Apartments/SingleAppartment";


function App() {

  return (
    <div>
      <Routes>
      <Route exact path="*"                                                     element={<MainPage        />} />
      <Route exact path="/components/aboutUsPage/AboutUsPage"                   element={<AboutUsPage     />} />
      <Route exact path="/components/Apartments/Apartments"                     element={<Apartments      />} />
      <Route exact path="/components/AboutProject/AboutProject"                 element={<AboutProject    />} />
      <Route exact path="/components/Apartments/SingleAppartment/:id"    element={<SingleAppartment     />} />
      </Routes>
    </div>
  );
}

export default App;