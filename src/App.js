
import './App.css';
 import Nav from  './components/Nav';
 import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Router>
     <Nav/>
        <Routes>
          <Route path='/' element= {<About/>}/>
          <Route path='/portfolio' element= {<Portfolio/>}/>
          <Route path='/contact' element= {<Contact/>}/>


        </Routes>

      </Router>
    </div>
  );
}

export default App;
