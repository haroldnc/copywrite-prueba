import React from "react";
import { useSelector } from "react-redux";
import { Container, Card, ListGroup } from "react-bootstrap";
import "./css/CardResult.css";

export default function CardResult() {
    const text_list = useSelector((state) => state.text_list);

    console.log("render: CardResult");

    return (
        <Container className="col-lg-8">
            <Card style={{ width: "100%" }} className="mt-5">
                <Card.Body>
                    <Card.Title>Results:</Card.Title>
                    <Container className="col-lg-8 mb-3 container-results">
                        {text_list.map((item, index) => (
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
