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
                <Col lg={4}>
                    <Card id="Card">
                        <div id="headingText">Group Project #2: Party Planning Committee                   <p id="LinksToMedia">
                            <a href="https://partyplanningcommittee.herokuapp.com/">Live application</a>
                        </p>
                            <p id="LinksToMedia">
                                <a href="https://github.com/KeithBillings/Party-Planner">GitHub repository</a>
                            </p></div>
                        <img id="KizikPicture" src="images/party planning committee screenshot.jpg" alt="Party planning committee app pic" />

                    </Card>

                </Col>

                <Col lg={4}>
                    <Card id="Card">
                        <div id="headingText">Group Project #1: TŪNADO!                    <p id="LinksToMedia">
                            <a href="https://zilchlorf.github.io/HyperSlugs/">Live application</a>
                        </p>
                            <p id="LinksToMedia">
                                <a href="https://github.com/Weerklank/HyperSlugs">GitHub repository</a>
                            </p></div>
                        <img id="KizikPicture" src="images/Tunado.jpg" alt="Tunado homepage screenshot" />

                    </Card>

                </Col>

                <Col lg={4}>
                    <Card id="Card">
                        <div id="headingText">Burger Devourer                     <p id="LinksToMedia">
                            <a href="https://agile-ocean-45821.herokuapp.com/">Live application</a>
                        </p>
                            <p id="LinksToMedia">
                                <a href="https://github.com/zilchlorf/Burger_Devourer">GitHub repository</a>
                            </p></div>
                        <img id="KizikPicture" src="images/Burger Devourer.jpg" alt="Burger Devourer application snapshot" />

                    </Card>

                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Card id="Card">
                        <div id="headingText">Active Person Tracker                   <p id="LinksToMedia">
                            <a href="https://active-person-tracker.herokuapp.com">Live application</a>
                        </p>
                            <p id="LinksToMedia">
                                <a href="https://github.com/zilchlorf/Active-Person-Tracker">GitHub repository</a>
                            </p></div>
                        <img id="KizikPicture" src="images/active_person_tracker.jpg" alt="Active Person Tracker application snapshot" />
                    </Card>

                </Col>
                <Col lg={4}>
                    <Card id="Card">
                        <div id="headingText">Avid-Traveller Budget App                <p id="LinksToMedia">
                            <a href="https://avid-traveler-budget-app.herokuapp.com/">Live application</a>
                        </p>
                            <p id="LinksToMedia">
                                <a href="https://github.com/zilchlorf/Avid_Traveler_Budget_App">GitHub repository</a>
                            </p></div>
                        <img id="KizikPicture" src="images/Avid_Traveller_Budget_App.jpg" alt="Avid Traveller Budget App snapshot" />
                    </Card>

                </Col>

                <Col lg={4}>
                    <Card id="Card">
                        <div id="headingText">Employee Catalog                  <p id="LinksToMedia">
                            <a href="https://employee-catalog2.herokuapp.com/">Live application</a>
                        </p>
                            <p id="LinksToMedia">
                                <a href="https://github.com/zilchlorf/Employee_Catalog">GitHub repository</a>
                            </p></div>
                        <img id="KizikPicture" src="images/Employee_Catalog.jpg" alt="Employee catalog application snapshot" />
                    </Card>

                </Col>
            </Row>
        </Container>
    );
}

export default Projects;