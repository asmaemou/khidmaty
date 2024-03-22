import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp1 from './pages/SignUp1';
import SignUp2 from './pages/SignUp2';
import Home from './pages/Home';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup1" element={<SignUp1 />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;