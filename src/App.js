import MainPage from './components/MainPage';
import AboutUsPage from './components/aboutUsPage/AboutUsPage'
import {Routes,Route} from "react-router-dom";
import './App.css';



function App() {
  
  return (
    <div className="App">
      <Routes>
      <Route exact path="*"        element={<MainPage />} />
      <Route exact path="/components/aboutUsPage/AboutUsPage"        element={<AboutUsPage />} />
      </Routes>
    </div>
  );
}

export default App;