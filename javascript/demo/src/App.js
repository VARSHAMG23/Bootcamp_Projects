
import './App.css';

import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Register from './Components/Register';
import Update from './Components/Update';
import BlogPost from './Components/BlogPost';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/update' element={<Update />} />
      <Route path='/blog' element={<BlogPost />} />
     
     </Routes></BrowserRouter>

     {/* <Homepage /> */}
    </div>
  );
}

export default App;
