import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css';
import 'jquery/dist/jquery.slim.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Header from './components/Header';
import Banner from './components/Banner';
import Investment from './components/Investment';
import RealEstate from './components/RealEstate';
import IPInvestment from './components/IPInvestment';
import PersonalInvestment from './components/PersonalInvestment';
import Download from './components/Download';
import Partners from './components/Partners';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Investment />
      <RealEstate/>
      <IPInvestment/>
      <PersonalInvestment/>
      <Download/>
      <Partners/>
      <Footer/>
    </>
  );
}

export default App;
