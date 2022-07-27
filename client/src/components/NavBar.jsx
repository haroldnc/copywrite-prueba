import React from "react";
import { Button, Form, Navbar } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar bg="danger" expand="lg">
            <Form className="d-flex mx-auto">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="primary">Search</Button>
            </Form>
        </Navbar>
    );
}
