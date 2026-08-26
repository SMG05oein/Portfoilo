import React from 'react';
import { Link } from 'react-router-dom';
import { skills, personalInfo, awards, certifications } from '../data/portfolioData';
import { FaBolt, FaBullseye, FaTrophy, FaCertificate } from 'react-icons/fa';
import './About.css';

const ScrollableSection = ({ titleComponent, children }) => {
  const scrollRef = React.useRef(null);
  const scroll = (offset) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };
  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between align-items-end mb-2">
        {titleComponent}
        <div className="d-flex gap-2 mb-1">
          <button onClick={() => scroll(-250)} className="scroll-btn" aria-label="이전">‹</button>
          <button onClick={() => scroll(250)} className="scroll-btn" aria-label="다음">›</button>
        </div>
      </div>
      <div ref={scrollRef} className="skills-container pb-2 pt-1">
        {children}
      </div>
    </div>
  );
};

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
                  <h5 style={{ color: 'var(--color-primary)', fontWeight: '600' }}><FaBolt className="me-2" style={{ verticalAlign: 'text-bottom' }} />핵심 기술 역량 (Core Stack)</h5>
                  <p style={{ color: 'var(--color-text-main)', fontSize: '1rem', fontWeight: '500' }}>
                    교내 프로젝트 및 해커톤에서는 <span style={{ color: 'var(--color-primary)' }}>React</span>, <span style={{ color: 'var(--color-secondary)' }}>Spring Boot</span>, <span style={{ color: 'var(--color-accent)' }}>MySQL</span>을 주력으로 사용하며, 현재 엠씨네 외주 개발 실무에서는 <span style={{ color: '#8892BF' }}>PHP</span>를 기반으로 시스템을 구축 및 운영하고 있습니다.
                  </p>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
                    나아가 하드웨어(아두이노, 라즈베리파이) 및 AI 모델링(Ollama)까지 문제 해결에 필요한 기술을 두려움 없이 습득하고 실무에 즉시 적용합니다.
                  </p>
                </div>
                <div className="mb-3">
                  <h5 style={{ color: 'var(--color-secondary)', fontWeight: '600' }}><FaBullseye className="me-2" style={{ verticalAlign: 'text-bottom' }} />실무와 외주 경험 (Experience)</h5>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>엠씨네에서의 실무 외주 프로젝트 수행 및 다수의 해커톤, 경진대회(ICT 창작물 등) 경험을 통해 실제 비즈니스 로직과 사용자 니즈를 분석하는 시각을 갖췄습니다.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="glass-panel p-4 h-100">
              <h2 className="mb-4">보유 기술 (Tech Stack)</h2>

              {/* Core Expertise Highlight */}
              <ScrollableSection 
                titleComponent={<h6 style={{ color: 'var(--color-primary)', marginBottom: 0, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '800' }}>Main Stack</h6>}
              >
                  <div className="skill-item" style={{
                    padding: '0.8rem 1.5rem',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    border: '2px solid var(--color-primary)',
                    background: 'rgba(56, 189, 248, 0.15)',
                    color: 'var(--color-primary)',
                    boxShadow: '0 0 15px rgba(56, 189, 248, 0.2)'
                  }}>React</div>
                  <div className="skill-item" style={{
                    padding: '0.8rem 1.5rem',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    border: '2px solid var(--color-secondary)',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: 'var(--color-secondary)',
                    boxShadow: '0 0 15px rgba(16, 185, 129, 0.2)'
                  }}>Spring Boot</div>
                  <div className="skill-item" style={{
                    padding: '0.8rem 1.5rem',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    border: '2px solid var(--color-accent)',
                    background: 'rgba(251, 191, 36, 0.15)',
                    color: 'var(--color-accent)',
                    boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'
                  }}>MySQL</div>
                  <div className="skill-item" style={{
                    padding: '0.8rem 1.5rem',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    border: '2px solid #8892BF',
                    background: 'rgba(136, 146, 191, 0.15)',
                    color: '#8892BF',
                    boxShadow: '0 0 15px rgba(136, 146, 191, 0.2)'
                  }}>PHP</div>
              </ScrollableSection>

              <ScrollableSection 
                titleComponent={<h6 style={{ color: 'var(--color-text-muted)', marginBottom: 0, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>Frontend</h6>}
              >
                  {skills.frontend.map((skill, index) => (
                    <div key={index} className="skill-item">{skill.name}</div>
                  ))}
              </ScrollableSection>

              <ScrollableSection 
                titleComponent={<h6 style={{ color: 'var(--color-text-muted)', marginBottom: 0, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>Backend</h6>}
              >
                  {skills.backend.map((skill, index) => (
                    <div key={index} className="skill-item">{skill.name}</div>
                  ))}
              </ScrollableSection>

              <ScrollableSection 
                titleComponent={<h6 style={{ color: 'var(--color-text-muted)', marginBottom: 0, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>Database</h6>}
              >
                  {skills.database.map((skill, index) => (
                    <div key={index} className="skill-item">{skill.name}</div>
                  ))}
              </ScrollableSection>

              <ScrollableSection 
                titleComponent={<h6 style={{ color: 'var(--color-text-main)', marginBottom: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>AI & Hardware</h6>}
              >
                  {skills.ai_hardware.map((skill, index) => (
                    <div key={index} className="skill-item">{skill.name}</div>
                  ))}
              </ScrollableSection>

            </div>
          </div>
        </div>

        {/* Awards and Certifications Section */}
        <div className="row mt-5">
          <div className="col-12 mb-4">
            <div className="glass-panel p-4">
              <ScrollableSection 
                titleComponent={
                  <h2 className="mb-0 d-flex align-items-center">
                    <FaTrophy className="me-2" style={{ color: 'var(--color-primary)', verticalAlign: 'baseline' }} /> 수상 경력
                    <span className="badge rounded-pill ms-3" style={{ backgroundColor: 'var(--color-primary)', color: '#fff', fontSize: '1.1rem', verticalAlign: 'middle' }}>총 {awards.length}개</span>
                  </h2>
                }
              >
                {awards.map((award, index) => (
                  <div key={index} className="scroll-card">
                    <div>
                      {award.projectId ? (
                        <Link
                          to={`/projects/${award.projectId}`}
                          style={{ textDecoration: 'none' }}
                        >
                          <h5 className="mb-3" style={{ fontWeight: '600', color: 'var(--color-primary)' }}>
                            {award.title} <span style={{ fontSize: '0.9rem', verticalAlign: 'middle' }}>↗</span>
                          </h5>
                        </Link>
                      ) : (
                        <h5 className="mb-3" style={{ fontWeight: '600', color: 'var(--color-text-main)' }}>{award.title}</h5>
                      )}
                      <span className="badge rounded-pill text-dark mb-3 px-3 py-2" style={{ background: 'var(--color-primary)' }}>{award.award}</span>
                    </div>
                    <small style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{award.date}</small>
                  </div>
                ))}
              </ScrollableSection>
            </div>
          </div>

          <div className="col-12">
            <div className="glass-panel p-4">
              <ScrollableSection 
                titleComponent={
                  <h2 className="mb-0 d-flex align-items-center">
                    <FaCertificate className="me-2" style={{ color: 'var(--color-secondary)', verticalAlign: 'baseline' }} /> 교육 및 수료
                    <span className="badge rounded-pill ms-3" style={{ backgroundColor: 'var(--color-secondary)', color: '#fff', fontSize: '1.1rem', verticalAlign: 'middle' }}>총 {certifications.length}개</span>
                  </h2>
                }
              >
                {certifications.map((cert, index) => (
                  <div key={index} className="scroll-card" style={{ minWidth: '320px' }}>
                    <div>
                      <h5 className="mb-2" style={{ fontWeight: '600', color: 'var(--color-text-main)' }}>{cert.name}</h5>
                      <p className="mb-3 mt-3" style={{ color: 'var(--color-secondary)', fontWeight: '500' }}>{cert.issuer}</p>
                    </div>
                    <small style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{cert.date}</small>
                  </div>
                ))}
              </ScrollableSection>
            </div>
          </div>
        </div>

        {/* AI Collaboration Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="glass-panel p-4" style={{ borderLeft: '5px solid var(--color-primary)' }}>
              <h2 className="mb-4 d-flex align-items-center">
                <FaBolt className="me-2" style={{ color: 'var(--color-primary)' }} /> AI Collaboration & Workflow
              </h2>
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <p style={{ color: 'var(--color-text-main)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    이 포트폴리오는 최신 <strong>에이전틱 AI(Antigravity)</strong>와의 협업을 통해 제작되었습니다.
                    단순한 코드 생성을 넘어, 기획 단계부터 시스템 아키텍처 설계, UI/UX 최적화까지 AI 어시스턴트와 실시간으로 소통하며 개발 효율성을 극대화했습니다.
                  </p>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.8' }}>
                    이는 최신 기술 도구를 활용해 복잡한 문제를 빠르게 해결하고, 높은 품질의 결과물을 도출해내는 저의 <strong>'AI 리터러시'</strong>와 <strong>'생산성'</strong>을 증명합니다.
                    변화하는 개발 생태계에서 도구에 종속되지 않고, 이를 주도적으로 활용하여 가치를 창출하는 개발자로 성장하고 있습니다.
                  </p>
                </div>
                <div className="col-lg-4 text-center mt-4 mt-lg-0">
                  <div style={{
                    padding: '2rem',
                    background: 'var(--color-bg-alt)',
                    borderRadius: '16px',
                    border: '1px dashed var(--color-primary)'
                  }}>
                    <h4 className="text-gradient mb-2" style={{ fontWeight: '800' }}>AGENTIC WORKFLOW</h4>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Powered by Antigravity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
