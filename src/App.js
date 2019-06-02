import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LoginUser from './views/auth/login'
import Register from './views/auth/register'

function App() {
  return (
    <div>
      	<Route exect path="/" component={LoginUser}  />
      	<Route path="/register" component={Register}  />
    </div>
  );
}

export default App;
