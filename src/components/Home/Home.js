import Banner from "./Banner";
import Image from "./Image";
import Navbar from "./Navbar";
import Quote from "./Quote";
import Card from "./Card";
import Vision from "./Vision";
import Staff from "./Staff";
import Footer from "./Footer";


function Home() {
    return (
      <div className="App">
        <div id="home"><Banner/></div>
        <Navbar/>
        <Quote/>
        <div id="image"><Image/></div>
       <div id="annual-day"><Card/></div>
        <Vision/>
        <div id="staff"><Staff/></div>
        <div id="footer"><Footer/></div>
      </div>
    );
  }
  
  export default Home;