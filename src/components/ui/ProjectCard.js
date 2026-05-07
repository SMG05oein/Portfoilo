import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card glass-panel">
      <Link to={`/projects/${project.id}`} className="project-image-container d-block" style={{ textDecoration: 'none' }}>
        {project.badge && (
          <div className={`project-badge badge-${project.badgeType}`}>
            {project.badge}
          </div>
        )}
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="ai-watermark">AI Generated Image</div>
      </Link>
      <div className="project-content">
        <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3 className="project-title">{project.title}</h3>
        </Link>
        <p className="project-period" style={{ color: 'var(--color-primary)', fontSize: '0.85rem', marginBottom: '0.8rem', fontWeight: '500' }}>
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
            상세 분석 보기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
