import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import Login from '../src/Pages/Login/Login';
import Register from '../src/Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="logowanie" element={<Login/>}/>
          <Route path="rejestracja" element={<Register/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
