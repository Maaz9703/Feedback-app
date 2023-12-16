import React from "react";
import CreateDom from "react-dom";
import './index.css'
import App from "./App";

CreateDom.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>

, document.getElementById('root'))