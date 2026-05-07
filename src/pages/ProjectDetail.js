import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="page-container text-center d-flex flex-column justify-content-center align-items-center">
        <h2>프로젝트를 찾을 수 없습니다.</h2>
        <button onClick={() => navigate('/projects')} className="btn-primary mt-4 border-0">돌아가기</button>
      </div>
    );
  }

  return (
    <div className="page-container" style={{ paddingBottom: 'var(--space-xl)' }}>
      {/* Hero Header */}
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(11, 15, 25, 0.4), rgba(11, 15, 25, 1))' }}></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: '3rem' }}>
          <Link to={project.category === 'in-school' ? '/in-school' : '/extracurricular'} className="text-decoration-none" style={{ color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', marginBottom: '1rem', fontWeight: '500' }}>
            <span style={{ marginRight: '0.5rem' }}>&larr;</span> {project.category === 'in-school' ? '교내 활동' : '교외 활동'} 목록으로
          </Link>
          <div className="d-flex align-items-center gap-3 mb-2">
             {project.badge && <span className={`project-badge badge-${project.badgeType} position-relative top-0 left-0`} style={{ transform: 'none', boxShadow: 'none' }}>{project.badge}</span>}
             <span style={{ color: 'var(--color-text-muted)', fontWeight: '500' }}>{project.period}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '1rem' }}>{project.title}</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', maxWidth: '800px', opacity: '0.9' }}>{project.description}</p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {/* Left Column - Tech Analysis */}
          <div className="col-lg-8 pe-lg-5">
            <h2 className="mb-4 d-flex align-items-center">
               <FaSearch className="me-2" style={{ color: 'var(--color-primary)', verticalAlign: 'baseline' }} /> 기술 스택 분석 (Tech Analysis)
            </h2>
            
            <div className="glass-panel p-4 mb-5" style={{ borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>기획 배경 및 문제 의식</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>{project.detailedAnalysis.background}</p>
              
              <hr style={{ borderColor: 'var(--color-border)', margin: '2rem 0' }} />
              
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>시스템 아키텍처</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>{project.detailedAnalysis.architecture}</p>
              
              <hr style={{ borderColor: 'var(--color-border)', margin: '2rem 0' }} />
              
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>기술적 세부 사항 및 구현</h4>
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--color-secondary)' }}>
                <p style={{ color: 'var(--color-text-main)', lineHeight: '1.8', fontSize: '1.05rem', margin: 0 }}>{project.detailedAnalysis.techDetails}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Info Sidebar */}
          <div className="col-lg-4 mt-5 mt-lg-0">
            <div className="glass-panel p-4 sticky-top" style={{ top: '100px', borderRadius: '16px' }}>
              <h4 className="mb-4">프로젝트 정보</h4>
              
              <div className="mb-4">
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.2rem', textTransform: 'uppercase' }}>내 역할 (Role)</p>
                <p style={{ fontWeight: '600', fontSize: '1.1rem' }}>{project.role}</p>
              </div>

              <div className="mb-4">
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.8rem', textTransform: 'uppercase' }}>사용 기술 (Technologies)</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge m-0">{tech}</span>
                  ))}
                </div>
              </div>

              {(project.liveLink || project.githubLink) && (
                <div className="mt-5">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn-primary w-100 d-block text-center text-decoration-none mb-3">
                      서비스 라이브 보기
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn-secondary w-100 d-block text-center text-decoration-none">
                      소스 코드 확인 (GitHub)
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
