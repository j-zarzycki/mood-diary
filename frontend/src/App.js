import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import Login from "../src/Pages/Login/Login";
import Register from "../src/Pages/Register/Register";
import Details from "../src/Pages/Details/Details";
import { useContext } from "react";
import AuthContext from "./Context/auth-context";
import Create from './Pages/Create/Create';

function App() {
  const ctx = useContext(AuthContext);
  console.log(ctx.isLoggedIn);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/logowanie" />} />
          {ctx.isLoggedIn && <Route path="/home" element={<Home />} />}
          {ctx.isLoggedIn && (<Route path="/home/details/:id" element={<Details />} />)}
          {ctx.isLoggedIn && (<Route path="/home/stworz/" element={<Create />} />)}
          <Route path="logowanie" element={<Login />} />
          <Route path="rejestracja" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
