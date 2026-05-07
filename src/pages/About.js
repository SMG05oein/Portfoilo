import React from 'react';
import { skills, personalInfo, awards, certifications } from '../data/portfolioData';
import { FaBolt, FaBullseye, FaTrophy, FaCertificate } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">나에 <span className="text-gradient">대하여</span></h1>
        </header>

        <div className="row mt-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="glass-panel p-4 h-100">
              <h2 className="mb-4">나의 강점 & 개발 철학 (Core Competency)</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <span className="badge-primary px-3 py-1 rounded-pill d-inline-block mb-3" style={{ fontSize: '0.85rem' }}>
                  {personalInfo.role}
                </span>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                  {personalInfo.bio}
                </p>
              </div>
              
              <div className="mt-4">
                <div className="mb-3">
                  <h5 style={{ color: 'var(--color-primary)', fontWeight: '600' }}><FaBolt className="me-2" style={{ verticalAlign: 'text-bottom' }} />폭넓은 기술 스택 (Strength)</h5>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>프론트엔드(React)부터 백엔드(Spring, Node, FastAPI), 나아가 하드웨어(아두이노, 라즈베리파이) 및 AI 모델링(Ollama)까지. 문제 해결에 필요한 기술을 두려움 없이 습득하고 즉시 실무에 적용합니다.</p>
                </div>
                <div className="mb-3">
                  <h5 style={{ color: 'var(--color-secondary)', fontWeight: '600' }}><FaBullseye className="me-2" style={{ verticalAlign: 'text-bottom' }} />실무와 외주 경험 (Opportunity)</h5>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>엠씨네에서의 실무 외주 프로젝트 수행 및 다수의 해커톤, 경진대회(ICT 창작물 등) 경험을 통해 책상 앞의 코딩을 넘어 실제 비즈니스 로직과 사용자 니즈를 분석하는 시각을 갖췄습니다.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="glass-panel p-4 h-100">
              <h2 className="mb-4">보유 기술 (Tech Stack)</h2>
              
              <div className="mb-4">
                <h6 style={{ color: 'var(--color-primary)', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Frontend</h6>
                <div className="skills-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {skills.frontend.map((skill, index) => (
                    <div key={index} className="skill-item">{skill.name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h6 style={{ color: 'var(--color-secondary)', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Backend</h6>
                <div className="skills-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {skills.backend.map((skill, index) => (
                    <div key={index} className="skill-item">{skill.name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h6 style={{ color: 'var(--color-accent)', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Database</h6>
                <div className="skills-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {skills.database.map((skill, index) => (
                    <div key={index} className="skill-item">{skill.name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-2">
                <h6 style={{ color: 'var(--color-text-main)', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>AI & Hardware</h6>
                <div className="skills-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {skills.ai_hardware.map((skill, index) => (
                    <div key={index} className="skill-item">{skill.name}</div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Awards and Certifications Section */}
        <div className="row mt-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="glass-panel p-4 h-100">
              <h2 className="mb-4 d-flex align-items-center">
                <FaTrophy className="me-2" style={{ color: 'var(--color-primary)', verticalAlign: 'baseline' }} /> 수상 경력
              </h2>
              <div className="list-group list-group-flush bg-transparent">
                {awards.map((award, index) => (
                  <div key={index} className="list-group-item bg-transparent border-bottom border-secondary p-3">
                    <div className="d-flex w-100 justify-content-between align-items-center mb-1">
                      <h5 className="mb-0 text-white" style={{ fontWeight: '600' }}>{award.title}</h5>
                      <span className="badge bg-primary rounded-pill text-dark" style={{ background: 'var(--color-primary) !important' }}>{award.award}</span>
                    </div>
                    <small style={{ color: 'var(--color-text-muted)' }}>{award.date}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="glass-panel p-4 h-100">
              <h2 className="mb-4 d-flex align-items-center">
                <FaCertificate className="me-2" style={{ color: 'var(--color-primary)', verticalAlign: 'baseline' }} /> 교육 및 수료
              </h2>
              <div className="list-group list-group-flush bg-transparent">
                {certifications.map((cert, index) => (
                  <div key={index} className="list-group-item bg-transparent border-bottom border-secondary p-3">
                    <div className="d-flex w-100 justify-content-between mb-1">
                      <h5 className="mb-0 text-white" style={{ fontWeight: '600' }}>{cert.name}</h5>
                    </div>
                    <p className="mb-1" style={{ color: 'var(--color-primary)' }}>{cert.issuer}</p>
                    <small style={{ color: 'var(--color-text-muted)' }}>{cert.date}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
