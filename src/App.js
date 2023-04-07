import {Routes,Route} from "react-router-dom";

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
import React, { useEffect } from "react";



function App() {

  useEffect(() => {
    // Load the Facebook SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  
    // Initialize the Facebook SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: 'v16.0'
      });
    };
  }, []);
  
  // Show the chatbox component
  const showChatbox = () => {
    if (window.FB) {
      window.FB.CustomerChat.show(true);
  
      // Close the chat window after the chat is closed
      window.FB.Event.subscribe('customerchat.dialogHide', function() {
        setTimeout(function() {
          if (window.FB) {
            window.FB.CustomerChat.hide();
          }
        }, 500); // Add a 500ms delay before hiding the chat window
      });
    } else {
      setTimeout(showChatbox, 100);
    }
  };
  
  return (
    <div className="App">

      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="111967761849394"
        theme_color="#029FA0"
        greeting_dialog_display="hide"
        entry_point_icon="chat_angular_icon"
        entry_point_label="none"
        minimized={true}
      />
      
      <Routes>
      <Route exact path="*"                                                     element={<MainPage        />} />
      <Route exact path="/components/aboutUsPage/AboutUsPage"                   element={<AboutUsPage     />} />
      <Route exact path="/components/Apartments/Apartments"                     element={<Apartments      />} />
      <Route exact path="/components/AboutProject/AboutProject"                 element={<AboutProject    />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment102"   element={<Apartment102    />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment90"    element={<Apartment90     />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment83"    element={<Apartment83     />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment76"    element={<Apartment76     />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment75"    element={<Apartment75     />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment71"    element={<Apartment71     />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment71Sec" element={<Apartment71Sec  />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment60"    element={<Apartment60     />} />
      <Route exact path="/components/Apartments/apartmentsInner/Apartment57"    element={<Apartment57     />} />
      </Routes>
    </div>
  );
}

export default App;