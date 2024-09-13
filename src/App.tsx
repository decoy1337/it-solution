import React from 'react';
import './App.scss';
import NavBar from './components/Navbar/Navbar';
import Average from './components/Average/Average';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar />
      <Average />
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
