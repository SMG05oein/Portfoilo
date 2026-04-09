import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectComponent from "../../Components/ProjectPage/ProjectComponent";
import "./ProjectPage.style.css";

const ProjectPage = () => {
    const projectData = [
        {
            id: 1,
            title: "(교외)잉글리쉬앤",
            period: "2025.03 ~ 2026.03",
            tech: ["PHP", "Jquery", "MsSql"],
            desc: "(주)잉글리쉬앤 쿠키어학원 및 관리자 페이지 리뉴얼"
        },
        {
            id: 1,
            title: "(교외)Naver Cafe Scraper",
            period: "2026.03",
            tech: ["Python", "MySql"],
            desc: "고성능 데이터 수집기 및 GUI로 편한 사용자 경험을 제공하는 툴"
        },
        {
            id: 2,
            title: "(교외)농구 연계 시스템 자동화",
            period: "2026.04.08 - 09",
            tech: ["Python", "Pywinauto", "Automation"],
            desc: "대한민국 농구협회의 데이터 연계 업무를 파이썬 UI Automation을 활용하여 반복적인 데이터 연계 업무를 자동화"
        },
        // {
        //     id: 3,
        //     title: "(교내)AI 군 심리 모니터링 시스템",
        //     period: "2026.03 ~",
        //     tech: ["Python"],
        //     desc: "병사들의 텍스트 데이터를 분석하여 심리적 이상 징후를 감지하는 초급 간부 지원 시스템"
        // },
        {
            id: 5,
            title: "(교외)구름톤유니브 충남지부 연합 헤커톤(백석대)",
            period: "2025.07.30 ~ 2025.07.31",
            tech: ["React", "Spring boot", "MySql"],
            desc: "천안 지역을 타겟으로 천안사랑카드 사용 가능 매장 검색 및 예약, 길찾기를 지원하는 시스템"
        },
        {
            id: 6,
            title: "(교외)구름톤유니브 전남, 충남지부 연합 헤커톤(호서대)",
            period: "2025.11.22 ~ 2025.11.23",
            tech: ["React", "Spring boot", "MySql", "On-premise Windows Server"],
            desc: "각 세대별 언어 학습을 지원하는 시스템"
        },
        {
            id: 7,
            title: "(교외)한이음 ICT 멘토링 프로젝트",
            period: "2026.04.01 ~ 진행 중",
            tech: ["React", "Spring boot or FastAPI", "MySQL", "Edge Computing", "Raspberry Pi"],
            desc: "에지 컴퓨팅 기반의 실시간 지능형 서비스 구축 (ICT 기업 전문가 멘토링 수행 프로젝트)"
        },
        {
            id: 7,
            title: "(교내)구름톤유니브 백석대 교내 헤커톤",
            period: "2025.06",
            tech: ["React"],
            desc: "(가상)백석대 학식당 통합 예매 시스템 프론트 개발"
        }
    ];

    return (
        <div className="project-page-container py-3">
            <Container>
                <h2 className="text-center mb-5 fw-bold">PROJECTS</h2>
                <Row>
                    {projectData.map((project) => (
                        <Col key={project.id} md={6} lg={4} className="mb-4">
                            <ProjectComponent project={project} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};
export default ProjectPage;