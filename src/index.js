import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Auth from "./context/loginContext.js";

ReactDOM.render(
    <React.StrictMode>
        <Auth>
            <App />
        </Auth>
    </React.StrictMode>,
    document.getElementById("root")
);
