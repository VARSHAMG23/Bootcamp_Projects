
import './App.css';

import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header />
     <Routes>
     
      
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
     
     </Routes></BrowserRouter>

     {/* <Homepage /> */}
    </div>
  );
}

export default App;
