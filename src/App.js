import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Objective from './Components/Objective/Objective';
import Strategy from './Components/Strategy/Strategy';
import Achiemvements from './Components/Achievements/Achiemvements';
import Partners from './Components/Partners/Partners';
import Contact from './Components/Contact/Contact';
import Appointment from './Components/Appoinment/Appoinment';
import News from './Components/News/News';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Objective></Objective>
      <Services></Services>
      <Strategy></Strategy>
      <Achiemvements></Achiemvements>
      <Partners></Partners>
      {/* <Contact></Contact> */}
      <Appointment></Appointment>
      <News></News>
      <Footer></Footer>
    </div>
  );
}

export default App;
