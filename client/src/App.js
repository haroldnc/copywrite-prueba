import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import CardResult from "./components/CardResult";

function App() {
    console.log("render: App");

    return (
        <>
            <NavBar />
            <CardResult />
        </>
    );
}

export default App;
