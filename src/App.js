import {Routes,Route} from "react-router-dom";

import MainPage from './components/MainPage';
import AboutUsPage from './components/aboutUsPage/AboutUsPage'
import Apartments from  './components/Apartments/Apartments'
import AboutProject from './components/AboutProject/AboutProject';
import Apartment102 from './components/Apartments/apartmentsInner/Apartment102';
import Apartment90 from './components/Apartments/apartmentsInner/Apartment90';
import Apartment83 from './components/Apartments/apartmentsInner/Apartment83';
import Apartment34 from './components/Apartments/apartmentsInner/Apartment34';
import Apartment75 from './components/Apartments/apartmentsInner/Apartment75';
import Apartment71 from './components/Apartments/apartmentsInner/Apartment71';
import Apartment71Sec from './components/Apartments/apartmentsInner/Apartment71Sec';
import Apartment38 from './components/Apartments/apartmentsInner/Apartment38';
import Apartment57 from './components/Apartments/apartmentsInner/Apartment57';
import Apartment62 from './components/Apartments/apartmentsInner/Apartment62';
import './App.css';
import React, { useEffect } from "react";


function App() {

  return (
    <div>
      <Routes>
      <Route exact path="*"                                                     element={<MainPage        />} />
      <Route exact path="/components/aboutUsPage/AboutUsPage"                   element={<AboutUsPage     />} />
      <Route exact path="/components/Apartments/Apartments"                     element={<Apartments      />} />
      <Route exact path="/components/AboutProject/AboutProject"                 element={<AboutProject    />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment102"   element={<Apartment102    />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment90"    element={<Apartment90     />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment83"    element={<Apartment83     />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment34"    element={<Apartment34     />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment75"    element={<Apartment75     />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment71"    element={<Apartment71     />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment71Sec" element={<Apartment71Sec  />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment38"    element={<Apartment38     />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment57"    element={<Apartment57     />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment62"    element={<Apartment62     />} />
      </Routes>
    </div>
  );
}

export default App;