import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";

export default function Profile() {
    return (
        <div>
            <Container fluid className="employee-dashboard py-4">
                <Row>
                    {/* Left Section: Employee Info */}
                    <Col md={4}>
                        <Card className="profile-card">
                            <Card.Body>
                                <div className="text-center">
                                    <img
                                        src="https://via.placeholder.com/100" // Replace with actual image URL
                                        alt="Profile"
                                        className="profile-img"
                                    />
                                    <h5 className="mt-2">Nicholas Swatz</h5>
                                    <p className="text-muted">#ERD246534</p>
                                </div>

                                <hr />
                                <h6>About</h6>
                                <p><i className="fa-solid fa-phone"></i> (629) 555-0123</p>
                                <p><i className="fa-solid fa-envelope"></i> nicholasswatz@gmail.com</p>

                                <hr />
                                <h6>Address</h6>
                                <p><i className="fa-solid fa-map-marker-alt"></i> 390 Market Street, Suite 200</p>
                                <p><i className="fa-solid fa-city"></i> San Francisco, CA</p>
                                <p><i className="fa-solid fa-map-pin"></i> 94102</p>

                                <hr />
                                <h6>Employee Details</h6>
                                <p><i className="fa-solid fa-calendar"></i> DOB: Sep 26, 1988</p>
                                <p><i className="fa-solid fa-id-card"></i> National ID: GER10654</p>
                                <p><i className="fa-solid fa-briefcase"></i> Title: Project Manager</p>
                                <p><i className="fa-solid fa-calendar-check"></i> Hire Date: Jan 05, 2023</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Right Section: Job Info & Compensation */}
                    <Col md={8}>
                        <Card className="info-card">
                            <Card.Body>
                                <h5>Job Information</h5>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Department</th>
                                            <th>Division</th>
                                            <th>Manager</th>
                                            <th>Hire Date</th>
                                            <th>Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Creative Associate</td>
                                            <td>Project Management</td>
                                            <td>Alex Foster</td>
                                            <td>May 13, 2024</td>
                                            <td>Metro DC</td>
                                        </tr>
                                        <tr>
                                            <td>Marketing Team</td>
                                            <td>Leadership</td>
                                            <td>Jack Danniel</td>
                                            <td>Sep 05, 2024</td>
                                            <td>Bergen, NJ</td>
                                        </tr>
                                        <tr>
                                            <td>Team Lead</td>
                                            <td>Creator</td>
                                            <td>Alina Skazka</td>
                                            <td>Jun 08, 2023</td>
                                            <td>Miami, FL</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
