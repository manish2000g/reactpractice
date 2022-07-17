import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Mid from './components/Mid';
import Footer from './components/Footer';
import './mystyle.css';
import Banner from './components/Banner';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Header></Header>  
      <Banner></Banner>   
      <Mid></Mid>
      <Footer></Footer>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
