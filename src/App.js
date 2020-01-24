import React from 'react';
import './App.css';
import {Route ,Switch} from 'react-router-dom'
//page
import Home from './page/Home'
import SinglePage from './page/SinglePage'
import Rooms from './page/Rooms'
import Error from './page/Error'
import NavBar from './component/NavBar'
import Footer from './component/Footer'

function App() {
  return (
    <>
    <NavBar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:sulg" component={SinglePage} />
        <Route component={Error} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
