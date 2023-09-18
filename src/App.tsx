import React from 'react';

import { Navbar } from './component/Navbar/Navbar';
import { IntroSection } from './component/Intro/Intro'
import PremiumSection from './component/Prem/Prem';
import PopularMovies from './component/popular/popular';
import FreeToWatchMovies from './component/Movies/Freemov';
import Footer from './component/foottop/foottop';
import FooterBottom from './component/footbot/footbot';
import './App.css';


function App() {
  return (
    <div className="App">
   <Navbar/>,
   <IntroSection />
   <PremiumSection/>
   <PopularMovies/>
   <FreeToWatchMovies/>
   <Footer/>
   <FooterBottom/>
    </div>
  );
}

export default App;
