import React from "react";
import { useDispatch } from "react-redux";
import { newText } from "../redux/actions";
import { Button, Form, Navbar } from "react-bootstrap";
import "./css/NavBar.css";

export default function NavBar() {
    const dispatch = useDispatch();

    const onClick = (e) => {
        e.preventDefault();

        const search_input = document.getElementById("search-input");

        if (!search_input.value) search_input.focus();
        else {
            dispatch(newText(search_input.value));
            search_input.value = "";
        }
    };

    console.log("render: NavBar");

    return (
        <Navbar bg="danger" expand="lg">
            <Form className="d-flex mx-auto search-bar">
                <Form.Control
                    type="search"
                    placeholder="Insert Text"
                    className="me-2"
                    aria-label="Search"
                    id="search-input"
                />
                <Button
                    variant="primary"
                    className="btn-send"
                    onClick={onClick}
                >
                    Send
                </Button>
            </Form>
        </Navbar>
    );
}
