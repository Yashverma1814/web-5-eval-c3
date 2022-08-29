import "./App.css";
import { Login } from "./components/Login";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import {Routes,Route} from 'react-router-dom'
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
