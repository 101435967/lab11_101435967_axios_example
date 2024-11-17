import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

class PersonList extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                const persons = res.data.results;
                this.setState({ persons });
            });
    }

    render() {
        return (
            <Container>
                <h1 className="text-center my-4">User List</h1>
                <Row>
                    {this.state.persons.map((person, index) => (
                        <Col key={index} md={6} className="mb-4">
                            <Card style={{ backgroundColor: '#008b8b', color: 'white' }}>
                                <Card.Body>
                                    <Card.Title>
                                        {`${person.name.title} ${person.name.first} ${person.name.last} - ${person.login.uuid}`}
                                    </Card.Title>
                                    <Row>
                                        <Col md={4}>
                                            <img
                                                src={person.picture.large}
                                                alt="User"
                                                className="img-fluid rounded-circle"
                                            />
                                        </Col>
                                        <Col md={8}>
                                            <p><strong>User Name:</strong> {person.login.username}</p>
                                            <p><strong>Gender:</strong> {person.gender.toUpperCase()}</p>
                                            <p><strong>Time Zone Description:</strong> {person.location.timezone.description}</p>
                                            <p><strong>Address:</strong> {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country} - ${person.location.postcode}`}</p>
                                            <p><strong>Email:</strong> {person.email}</p>
                                            <p><strong>Birth Date and Age:</strong> {`${person.dob.date} (${person.dob.age})`}</p>
                                            <p><strong>Register Date:</strong> {person.registered.date}</p>
                                            <p><strong>Phone#:</strong> {person.phone}</p>
                                            <p><strong>Cell#:</strong> {person.cell}</p>
                                            <Button variant="primary">Details</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default PersonList;
