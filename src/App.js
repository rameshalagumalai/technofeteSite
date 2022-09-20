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
import Test from "./components/Test";
import SignUp from "./SignUp";
import ScrollToTop from "./ScrollToTop.jsx";
import ForgotPassword from "./components/ForgotPassword";
import Organizer from "./components/Organizer";
import SetUpProfile from "./components/SetUpProfile";

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <Toaster></Toaster>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events/:eventId" element={<EventPage />} />
            <Route path="/test" element={<Test />} />
            <Route path="/organizers" element={<Organizer />} />
            <Route
              path="/sign-in"
              element={
                <ProtectedRoute type={false} path="/profile">
                  <AuthForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sign-up"
              element={
                <ProtectedRoute type={false} path="/profile">
                  <SignUp />
                </ProtectedRoute>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <ProtectedRoute type={false} path="/profile">
                  <ForgotPassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/set-up-profile"
              element={
                <ProtectedRoute type={true} path="/sign-in">
                  <SetUpProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute type={true} path="/sign-in">
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
