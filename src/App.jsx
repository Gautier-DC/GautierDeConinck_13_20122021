import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import UserDashboard from './Pages/UserDashboard';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/user-dashboard' element={<UserDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
