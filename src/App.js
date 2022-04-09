import logo from './logo.svg';
import './App.css';
import Home from '././pages/Home/Home'
import About from '././pages/About/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
