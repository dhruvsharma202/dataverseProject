import './App.css';
import Hero from './components/Hero/Hero';
import Plan from './components/Plans/Plan';
import Program from './components/Program/Program';
import Regions from './components/Regions/Region'
import Testimonial from './components/Testimonials/Testimonial'
import Join from "./components/Join/Join"
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
      {/* <h1>dhruv</h1> */}
          <Hero/>
          <Program/>
          <Regions/>
          <Plan/>
          <Testimonial/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
