import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/home/Home";
import Profile from "./components/Profile.jsx";
import AuthForm from "./components/AuthForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer";
import EventPage from "./components/EventPage";

function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      <Router>
        <Navbar loggedIn={loggedIn} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/event' element={<EventPage />} />
          <Route path='/signup' element={<AuthForm />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
