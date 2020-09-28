import React from "react";
import "./Projects.css"

import { Container, Row, Col, Card } from "react-bootstrap";

function Projects() {

    return (
        <Container>
            <h1>Projects and collaborations by Max William Edmonds</h1>
            <Row >
                <>
                </>
                <Col lg={2}>
                    <Card id="Card">
                        <div>Party Planning Committee                   <p id="LinksToMedia">
                            <a href="https://partyplanningcommittee.herokuapp.com/">Live application</a>
                        </p>
                            <p id="LinksToMedia">
                                <a href="https://github.com/KeithBillings/Party-Planner">GitHub repository</a>
                            </p></div>
                        <img id="KizikPicture" src="images/party planning committee screenshot.jpg"alt="Party planning committee app pic" />

                    </Card>

                </Col>

                <Col lg={2}>
                    <Card id="Card">
                        <div>Group Project #1: TŪNADO!                    <p id="LinksToMedia">
                            <a href="https://zilchlorf.github.io/HyperSlugs/">Live application</a>
                        </p>
                            <p id="LinksToMedia">
                                <a href="https://github.com/Weerklank/HyperSlugs">GitHub repository</a>
                            </p></div>
                        <img id="KizikPicture" src="./Images/Tunado.jpg" alt="Tunado homepage screenshot" />

                    </Card>

                </Col>

                <Col lg={2}>
                    <Card id="Card">
                        <div>Burger Devourer                     <p id="LinksToMedia">
                            <a href="https://agile-ocean-45821.herokuapp.com/">Live application</a>
                        </p>
                            <p id="LinksToMedia">
                                <a href="https://github.com/zilchlorf/Burger_Devourer">GitHub repository</a>
                            </p></div>
                        <img id="KizikPicture" src="./Images/Burger Devourer.jpg" alt="Burger Devourer application snapshot" />

                    </Card>

                </Col>
                <Col lg={2}>
                    <Card id="Card">

                    </Card>

                </Col>
                <Col lg={2}>
                    <Card id="Card">

                    </Card>

                </Col>

                <Col lg={2}>
                    <Card id="Card">

                    </Card>

                </Col>
            </Row>
        </Container>
    );
}

export default Projects;