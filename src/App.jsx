import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Student from "./components/Student"

const App=() => {


  return (
    <Router>
      <Student />
    </Router>
  )
}

export default App;
