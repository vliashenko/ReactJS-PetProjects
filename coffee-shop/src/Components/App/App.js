import { Component } from 'react'
import HeaderMain from '../Headers/HeaderMain'
import AboutUs from '../AboutUs/AboutUs';
import OurBest from '../OurBest/OurBest';
import Footer from '../Footer/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <div className='wrapper'>
        <HeaderMain/>
        <AboutUs/> 
      </div>
      
      <OurBest/>

      <Footer/>
    </div>
    );
  }
}

export default App;
