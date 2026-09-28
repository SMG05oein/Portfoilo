import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaTrophy, 
  FaMedal, 
  FaTerminal, 
  FaLaptopCode, 
  FaServer, 
  FaMicrochip, 
  FaRobot, 
  FaDatabase 
} from 'react-icons/fa';
import './ProjectCard.css';

const getTechCategoryMeta = (project) => {
  const techs = (project.technologies || []).join(' ').toLowerCase();
  
  // 1. 풀스택 웹 애플리케이션 (React + Spring Boot / PWA 등)
  if ((techs.includes('react') || techs.includes('vue')) && (techs.includes('spring') || techs.includes('node') || techs.includes('fastapi') || techs.includes('pwa'))) {
    return {
      icon: <FaLaptopCode />,
      label: '풀스택 웹 서비스 (React + Spring Boot)',
      tag: '풀스택·웹서비스'
    };
  }
  // 2. 엣지 AI & 비전
  if (techs.includes('jetson') || techs.includes('pytorch') || techs.includes('yolo')) {
    return {
      icon: <FaRobot />,
      label: '엣지 AI / 영상 분석 파이프라인',
      tag: '인공지능·영상관제'
    };
  }
  // 3. 임베디드 & 시스템
  if (techs.includes('arduino') || techs.includes('hardware') || techs.includes('c language')) {
    return {
      icon: <FaMicrochip />,
      label: '임베디드 & 시스템 엔지니어링',
      tag: '하드웨어·시스템'
    };
  }
  // 4. 백엔드 & 업무 자동화
  if (techs.includes('drissionpage') || techs.includes('pywinauto') || techs.includes('psutil') || techs.includes('crawler')) {
    return {
      icon: <FaServer />,
      label: '시스템 제어 & 업무 자동화 솔루션',
      tag: '업무자동화·매크로'
    };
  }
  // 5. 일반 백엔드
  if (techs.includes('spring boot') || techs.includes('node.js') || techs.includes('php')) {
    return {
      icon: <FaDatabase />,
      label: '백엔드 아키텍처 & 플랫폼 리뉴얼',
      tag: '백엔드·플랫폼'
    };
  }
  return {
    icon: <FaLaptopCode />,
    label: '웹 애플리케이션 & 프론트엔드',
    tag: '웹·프론트엔드'
  };
};

const ProjectCard = ({ project }) => {
  const meta = getTechCategoryMeta(project);

  return (
    <div className="project-card glass-panel">
      <Link to={`/projects/${project.id}`} className="project-preview-container d-block" style={{ textDecoration: 'none' }}>
        {project.badge && (
          <div className={`project-badge badge-${project.badgeType}`}>
            {project.badgeType === 'accent' && <FaTrophy style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} />}
            {project.badgeType === 'primary' && <FaMedal style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} />}
            {project.badge}
          </div>
        )}

        <div className="tech-window-mockup">
          <div className="tech-window-header">
            <div className="window-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="window-title">
              <FaTerminal className="me-1" style={{ fontSize: '0.7rem' }} />
              <span>{meta.tag}</span>
            </div>
          </div>
          <div className="tech-window-body">
            <div className="tech-window-icon-wrap">
              {meta.icon}
            </div>
            <div className="tech-window-info">
              <span className="tech-window-category">{meta.label}</span>
              <div className="tech-window-stack-tags">
                {project.technologies.slice(0, 3).map((t, idx) => (
                  <span key={idx} className="window-stack-item">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="project-content">
        <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3 className="project-title">{project.title}</h3>
        </Link>
        <p className="project-period" style={{ color: 'var(--color-primary)', fontSize: '0.85rem', marginBottom: '0.8rem', fontWeight: '600' }}>
          {project.period}
        </p>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>

        <div className="project-links mt-auto">
          <Link to={`/projects/${project.id}`} className="btn-primary w-100 text-center text-decoration-none">
            상세 보기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
