import React from 'react'
import "./App.css"
import {BrowserRouter as Router, Route} from "react-router-dom";

import Authenticate from "./components/Authenticate/Authenticate";
import Menu from "./components/Menu/Menu";

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={Authenticate}/>
            <Route path="/chat" component={Menu}/>
        </Router>
    )
}

export default App
