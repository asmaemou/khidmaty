import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from "./Pages/SignIn";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
      <h1 className='text-sky-700 italic'>hello</h1>
        <Routes>
          
          <Route path="/signin" element={<SignIn />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
