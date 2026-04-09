import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import "./ProjectComponent.style.css";

const ProjectComponent = ({ project }) => {
    // (교내), (교외) 구분 추출
    const isExternal = project.title.includes("(교외)");
    const displayTitle = project.title.replace("(교내)", "").replace("(교외)", "").trim();

    return (
        <Card className="h-100 shadow-sm project-card border-0">
            <Card.Body className="d-flex flex-column p-4">
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <Badge bg={isExternal ? "primary" : "success"} className="mb-2 opacity-75">
                        {isExternal ? "External" : "University"}
                    </Badge>
                    <span className="text-muted small font-monospace">{project.period}</span>
                </div>

                <Card.Title className="fw-bold mb-3" style={{ fontSize: '1.4rem' }}>
                    {displayTitle}
                </Card.Title>

                <Card.Text className="text-secondary flex-grow-1" style={{ fontSize: '0.95rem' }}>
                    {project.desc}
                </Card.Text>

                <div className="mt-4 mb-4">
                    {project.tech.map((t, idx) => (
                        <Badge key={idx} bg="light" text="dark" className="me-2 mb-2 border">
                            {t}
                        </Badge>
                    ))}
                </div>

                <Button onClick={()=>{alert("페이지 개발 중")}} variant="outline-dark" className="w-100 fw-bold py-2 rounded-pill">
                    View Details
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProjectComponent;