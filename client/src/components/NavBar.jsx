import React from "react";
import { Button, Form, Navbar } from "react-bootstrap";
import "./css/NavBar.css";

export default function NavBar() {
    console.log("render: NavBar");

    return (
        <Navbar bg="danger" expand="lg">
            <Form className="d-flex mx-auto search-bar">
                <Form.Control
                    type="search"
                    placeholder="Insert Text"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="primary" className="btn-send">
                    Send
                </Button>
            </Form>
        </Navbar>
    );
}
