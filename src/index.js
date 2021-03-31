import React from "react"
import ReactDOM from "react-dom"

//component file
import Racine from "./components/Racine"
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css"

ReactDOM.render(
    <React.StrictMode>
        <Racine />
    </React.StrictMode>,
    document.getElementById("root")
)
