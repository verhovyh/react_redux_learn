import React from "react";
import ReactDOM from "react-dom";

import Main from "./js/components/presentational/main.js"

const App = () => {
    return (
        <Main/>
    );
};
export default App;
ReactDOM.render(<App/>, document.getElementById("app"));