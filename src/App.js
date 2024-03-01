import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Months from './Months';
import MonthsDetail from './MonthsDetail';
import Navbar from './Navbar';
import Footer from './Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Months" element={<Months/>} />
            <Route path="/months/:id" element={<MonthsDetail/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
