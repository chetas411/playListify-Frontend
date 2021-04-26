import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';
import MainPage from './components/Mainpage/Mainpage';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Homepage} />
      <Route path="/login" component={MainPage} />
    </BrowserRouter>
  )
}

export default App;
