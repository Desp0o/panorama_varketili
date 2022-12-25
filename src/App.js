import MainPage from './components/MainPage';
import AboutUsPage from './components/aboutUsPage/AboutUsPage'
import Apartments from  './components/Apartments/Apartments'
import {Routes,Route} from "react-router-dom";
import './App.css';



function App() {
  
  return (
    <div className="App">
      <Routes>
      <Route exact path="*" element={<MainPage />} />
      <Route exact path="/components/aboutUsPage/AboutUsPage" element={<AboutUsPage />} />
      <Route exact path="/components/Apartments/Apartments" element={<Apartments />} />
      </Routes>
    </div>
  );
}

export default App;