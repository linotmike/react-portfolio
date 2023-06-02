
import './App.css';
 import Nav from  './components/Nav';
 import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';
// import Home from './pages/Home';



function App() {
  return (
    <div className="App">
      <Router>
     <Nav/>
        <Routes>
          {/* <Route path='/' element= {<Home/>}/> */}
          <Route path='/' element= {<About/>}/>
          <Route path='/portfolio' element= {<Portfolio/>}/>
          <Route path='/contact' element= {<Contact/>}/>
          <Route path='/resume' element= {<Resume/>}/>


        </Routes>
        
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
