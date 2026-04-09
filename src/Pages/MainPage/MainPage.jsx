import React from 'react';
import MainComponent from "../../Components/MainPage/MainComponent";
import { Col, Container, Row } from "react-bootstrap";
import "./MainPage.style.css";

const MainPage = () => {
    return (
        <div className="main-page-wrapper">
            <Container fluid>
                <Row className="justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                    <Col md={10} lg={8}>
                        <MainComponent />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainPage;