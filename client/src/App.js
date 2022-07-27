import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import CardResult from "./components/CardResult";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    console.log("render: App");

    return (
        <Provider store={store}>
            <NavBar />
            <CardResult />
        </Provider>
    );
}

export default App;
