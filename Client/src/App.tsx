import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp1 from './pages/SignUp1';
import SignUp2 from './pages/SignUp2';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup1" element={<SignUp1 />} />
          <Route path="/signup2" element={<SignUp2 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;