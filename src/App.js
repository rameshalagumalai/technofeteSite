import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/home/Home";
import Profile from "./components/Profile.jsx";
import AuthForm from "./components/AuthForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import EventPage from "./components/EventPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/authContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Toaster></Toaster>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<EventPage />} />
            <Route
              path="/signin"
              element={
                <ProtectedRoute type={false} path="/profile">
                  <AuthForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute type={true} path="/signin">
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
