import React from 'react';
import { Button, Badge, Stack } from 'react-bootstrap';
import './MainComponent.style.css';
import {useNavigate} from "react-router-dom";

const MainComponent = () => {
    const navigate = useNavigate();
    return (
        <div className="hero-section text-center p-5 bg-white rounded shadow-lg">
            <h1 className="display-4 fw-bold mb-3">서 민 관</h1>
            <span className="text-muted mb-4 font-monospace">개발자입니다.</span>
            <p className="text-muted mb-4 font-monospace">Full-Stack Developer & Automation Developer</p>

            <Stack direction="horizontal" gap={2} className="justify-content-center mb-5 flex-wrap">
                <Badge bg="light" text="dark" className="p-3 border shadow-sm profile-chip">
                    📍 백석대학교 컴퓨터공학부 (3학년)
                </Badge>
                <Badge bg="light" text="dark" className="p-3 border shadow-sm profile-chip">
                    ☁️ 9oormthon (구름톤) 일원
                </Badge>
            </Stack>

            <hr className="my-4" style={{ width: '50%', margin: '0 auto', opacity: '0.1' }} />

            <div className="d-flex justify-content-center gap-3 mt-4">
                <Button id="getTechStack" onClick={()=>{alert("페이지 개발 중")}} variant="dark" className="px-4 py-2 custom-btn">기술스택</Button>
                <Button id="getAward" onClick={()=>{alert("페이지 개발 중")}} variant="secondary" className="px-4 py-2 custom-btn">수상경력</Button>
                <Button id="getSWOT" onClick={()=>{alert("페이지 개발 중")}} variant="outline-warning" className="px-4 py-2 custom-btn">나의 SWOT</Button>
                <Button id="getProject" onClick={()=>{navigate("/project")}} variant="primary" className="px-4 py-2 custom-btn">프로젝트</Button>
            </div>
        </div>
    );
};

export default MainComponent;