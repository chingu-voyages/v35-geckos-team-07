import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <Container className="home-container">
            <Row>
                <Col className="h2-column">
                    <h2>Choose Your Zodiac Sign</h2>
                </Col>
            </Row>
            <Row className="sign-row">
                <Col className="sign-column" sm={6} lg={3}> 
                    Sign 1
                </Col>
                <Col className="sign-column" sm={6} lg={3}>
                    Sign
                </Col> 2
                <Col className="sign-column" sm={6} lg={3}>
                    Sign 3
                </Col>
                <Col className="sign-column" sm={6} lg={3}>
                    Sign 4
                </Col>
                <Col className="sign-column" sm={6} lg={3}>
                    Sign 5
                </Col>
                <Col className="sign-column" sm={6} lg={3}>
                    Sign 6
                </Col>
                <Col className="sign-column" sm={6} lg={3}>
                    Sign 7
                </Col>
                <Col className="sign-column" sm={6} lg={3}>
                    Sign 8
                </Col>
                <Col className="sign-column" sm={6} lg={3}>
                    Sign 9
                </Col>
                <Col className="sign-column" sm={6} lg={3}>
                    Sign 10
                </Col>
                <Col className="sign-column" sm={6} lg={3}>
                    Sign 11
                </Col>
                <Col className="sign-column" sm={6} lg={3}>
                    Sign 12
                </Col>
            </Row>
        </Container>
    )
}

export default Home;