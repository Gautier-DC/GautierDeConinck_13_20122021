import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import Home from './Pages/home';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home />}>
        </Route>
      </Routes>   
    </Router>
  );
}

export default App;
