import {Routes,Route} from "react-router-dom";
import { useState } from 'react';

import Navbar from './components/navbar';
import MainPage from './components/MainPage';
import AboutUsPage from './components/aboutUsPage/AboutUsPage'
import Apartments from  './components/Apartments/Apartments'
import AboutProject from './components/AboutProject/AboutProject';
import Apartment102 from './components/Apartments/apartmentsInner/Apartment102';
import Apartment90 from './components/Apartments/apartmentsInner/Apartment90';
import Apartment83 from './components/Apartments/apartmentsInner/Apartment83';
import Apartment76 from './components/Apartments/apartmentsInner/Apartment76';
import Apartment75 from './components/Apartments/apartmentsInner/Apartment75';
import Apartment71 from './components/Apartments/apartmentsInner/Apartment71';
import Apartment71Sec from './components/Apartments/apartmentsInner/Apartment71Sec';
import Apartment60 from './components/Apartments/apartmentsInner/Apartment60';
import Apartment57 from './components/Apartments/apartmentsInner/Apartment57';
import './App.css';

function App() {

  const [isGeo, setIsGeo] = useState(false)
  const [isRus, setIsRus] = useState(false)
  const [isEng, setIsEng] = useState(false)

  function makeENG() {
    setIsEng(true)
    setIsRus(false)
    setIsGeo(false)
    localStorage.setItem('language', 'eng')
  }
//*************//

  function makeGEO() {
      setIsEng(false)
      setIsRus(false)
      setIsGeo(true)
      localStorage.removeItem('language')
  }
//*************//

  function makeRUS() {
      setIsEng(false)
      setIsRus(true)
      setIsGeo(false)
      localStorage.setItem('language', 'rus')
  }
  
  return (
    <div className="App">
      <Navbar geoLang={makeGEO} engLang={makeENG} rusLang={makeRUS} isEng={isEng} isGeo={isGeo} isRus={isRus} />

      <Routes>
      <Route exact path="*"                                                     element={<MainPage       isEng={isEng} isGeo={isGeo} isRus={isRus} />} />
      <Route exact path="/components/aboutUsPage/AboutUsPage"                   element={<AboutUsPage    isEng={isEng} isGeo={isGeo} isRus={isRus} />} />
      <Route exact path="/components/Apartments/Apartments"                     element={<Apartments     isEng={isEng} isGeo={isGeo} isRus={isRus} />} />
      <Route exact path="/components/AboutProject/AboutProject"                 element={<AboutProject   isEng={isEng} isGeo={isGeo} isRus={isRus} />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment102"   element={<Apartment102   isEng={isEng} isGeo={isGeo} isRus={isRus} />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment90"    element={<Apartment90    isEng={isEng} isGeo={isGeo} isRus={isRus} />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment83"    element={<Apartment83    isEng={isEng} isGeo={isGeo} isRus={isRus} />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment76"    element={<Apartment76    isEng={isEng} isGeo={isGeo} isRus={isRus} />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment75"    element={<Apartment75    isEng={isEng} isGeo={isGeo} isRus={isRus} />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment71"    element={<Apartment71    isEng={isEng} isGeo={isGeo} isRus={isRus} />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment71Sec" element={<Apartment71Sec isEng={isEng} isGeo={isGeo} isRus={isRus} />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment60"    element={<Apartment60    isEng={isEng} isGeo={isGeo} isRus={isRus} />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment57"    element={<Apartment57    isEng={isEng} isGeo={isGeo} isRus={isRus} />} />
      </Routes>
    </div>
  );
}

export default App;