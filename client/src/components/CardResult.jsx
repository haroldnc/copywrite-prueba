import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";
import "./css/CardResult.css";

export default function CardResult() {
    console.log("render: CardResult");
    const items = [
        "Doceavo Item",
        "Onceavo Item",
        "Decimo Item",
        "Noveno Item",
        "Octavo Item",
        "Septimo Item",
        "Sexto Item",
        "Quinto Item",
        "Cuarto Item",
        "Tercer Item",
        "Segundo Item",
        "Primer Item",
    ];

    return (
        <Container className="col-lg-8">
            <Card style={{ width: "100%" }} className="mt-5">
                <Card.Body>
                    <Card.Title>Results:</Card.Title>
                    <Container className="col-lg-8 container-results">
                        {items.map((item, index) => (
                            <ListGroup key={index} className="my-2">
                                <ListGroup.Item>{item}</ListGroup.Item>
                            </ListGroup>
                        ))}
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    );
}
