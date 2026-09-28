import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, projects, awards, certifications } from '../data/portfolioData';
import { 
  FaCode, 
  FaServer, 
  FaCubes, 
  FaArrowRight, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaBriefcase, 
  FaGraduationCap, 
  FaAward,
  FaCheckCircle
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  // 대표 프로젝트 선정 (노란돼지, 꿀비, 멍멍케어, 쿠키어학원)
  const featuredProjects = projects.filter(p => [10, 1, 2, 3].includes(p.id));

  const careerTimeline = [
    {
      period: '2024.11 ~ 현재',
      role: '실무 외주 개발자 (웹 풀스택 / 유지보수)',
      org: '엠씨네',
      desc: '학원·기관 사이트 마이그레이션(ASP/ASPX -> PHP), 결제/인증 연동, 실무 고객사 비즈니스 요구사항 해결'
    },
    {
      period: '2026.07 ~',
      role: '노란돼지 근무·급여 관리 시스템 구축 & 현장 도입',
      org: '자체 기획 / 현장 도입 프로젝트',
      desc: 'React 19 + Spring Boot 풀스택 아키텍처, PWA 구현 및 리눅스 서버 직접 배포/운영'
    },
    {
      period: '2026.04 ~ 2026.07',
      role: '엣지 CCTV 이상행동 탐지 시스템 개발',
      org: '외주 개발 (팀 azure-B)',
      desc: 'Jetson Orin Nano 기반 YOLOv8 + ST-GCN 멀티 모델 실시간 경량화 파이프라인 개발'
    },
    {
      period: '2024.03 ~ 재학 중',
      role: '소프트웨어학 전공',
      org: '백석대학교 컴퓨터공학부',
      desc: '교내 C언어 경진대회 대상, Smart IT 창작물 경진대회 장려상 수상'
    }
  ];

  return (
    <div className="home-container">
      {/* 1. Hero Section (CV / Profile Dock) */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-pill-badge">
                <span className="pulsing-dot"></span>
                <span>실무 외주 & 현장 엔지니어링 수행 중</span>
              </div>
              <h1 className="name text-gradient">{personalInfo.name}</h1>
              <h2 className="hero-role-title">{personalInfo.role}</h2>
              <p className="hero-subrole">{personalInfo.subRole}</p>
              
              <div className="hero-tagline-quote">
                "{personalInfo.headline}"
              </div>
              
              <p className="bio">{personalInfo.bio}</p>

              <div className="hero-actions">
                <a href="#featured-projects" className="btn-primary btn-lg hero-cta">
                  <span>대표 프로젝트 보기</span>
                  <FaArrowRight className="ms-2" />
                </a>
                <Link to="/about" className="btn-secondary btn-lg hero-sub-cta">
                  상세 이력 & 기술 스택
                </Link>
                <div className="hero-social-links">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-icon-link"
                    title="GitHub"
                    aria-label="GitHub 프로필"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Resume Card */}
            <div className="resume-dock-card glass-panel">
              <div className="dock-header">
                <div className="dock-avatar-placeholder">
                  <span>SMG</span>
                </div>
                <div>
                  <h3 className="dock-name">{personalInfo.name}</h3>
                  <p className="dock-sub">풀스택 소프트웨어 엔지니어</p>
                </div>
              </div>

              <div className="dock-stats-grid">
                <div className="dock-stat-box">
                  <span className="stat-number">{projects.length}+</span>
                  <span className="stat-label">완료 프로젝트</span>
                </div>
                <div className="dock-stat-box">
                  <span className="stat-number">2+년</span>
                  <span className="stat-label">실무/외주 경험</span>
                </div>
                <div className="dock-stat-box">
                  <span className="stat-number">{awards.length}건</span>
                  <span className="stat-label">교내외 수상</span>
                </div>
              </div>

              <div className="dock-highlights">
                <div className="dock-highlight-item">
                  <FaCheckCircle className="text-success me-2 mt-1 flex-shrink-0" />
                  <span>현장 문제 직접 정의 및 실무 도입 경험 (노란돼지)</span>
                </div>
                <div className="dock-highlight-item">
                  <FaCheckCircle className="text-success me-2 mt-1 flex-shrink-0" />
                  <span>엠씨네 실무 외주 개발 및 고객사 커스텀 로직 유지보수</span>
                </div>
                <div className="dock-highlight-item">
                  <FaCheckCircle className="text-success me-2 mt-1 flex-shrink-0" />
                  <span>웹 풀스택부터 엣지 AI(YOLOv8/ST-GCN) 융합 구현</span>
                </div>
              </div>

              <div className="dock-footer">
                <span className="dock-contact-text">{personalInfo.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient background glows */}
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="hero-grid-pattern"></div>
      </section>

      {/* 2. Featured Projects Section */}
      <section id="featured-projects" className="section-padding">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">핵심 프로젝트 쇼케이스</span>
              <h2 className="section-main-title">주요 대표 프로젝트</h2>
              <p className="section-sub-desc">문제를 정의하고 아키텍처 설계부터 배포까지 주도적으로 완성한 프로젝트들입니다.</p>
            </div>
            <div className="section-header-action">
              <Link to="/extracurricular" className="view-all-link">
                전체 활동 둘러보기 <FaArrowRight className="ms-1" />
              </Link>
            </div>
          </div>

          <div className="featured-projects-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-showcase-card glass-panel">
                <div className="project-card-top">
                  <div className="project-badge-wrap">
                    <span className="badge-pill">{project.badge || '주요 프로젝트'}</span>
                    <span className="project-period-tag">{project.period}</span>
                  </div>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-role">{project.role}</p>
                  <p className="project-card-desc">{project.description}</p>
                </div>

                <div className="project-card-bottom">
                  <div className="tech-chip-list">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                      <span key={idx} className="tech-chip">{tech}</span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="tech-chip more-chip">+{project.technologies.length - 5}</span>
                    )}
                  </div>

                  <div className="project-card-links">
                    <Link to={`/projects/${project.id}`} className="card-btn-detail">
                      분석 상세 보기
                    </Link>
                    {project.links && project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="card-icon-link"
                        title={link.name}
                      >
                        <FaExternalLinkAlt size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Experience & Career Timeline Section */}
      <section className="section-padding timeline-bg-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">실무 및 활동 연혁</span>
            <h2 className="section-main-title">실무 경험 및 개발 이력</h2>
            <p className="section-sub-desc">실무 외주, 현장 프로젝트, 교내 경진대회를 통해 쌓아온 여정입니다.</p>
          </div>

          <div className="timeline-wrapper">
            {careerTimeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                </div>
                <div className="timeline-content-card glass-panel">
                  <div className="timeline-period-badge">{item.period}</div>
                  <h3 className="timeline-title">{item.role}</h3>
                  <div className="timeline-org">{item.org}</div>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tech Competency Strip */}
      <section className="section-padding">
        <div className="container">
          <div className="tech-summary-banner glass-panel">
            <div className="banner-left">
              <span className="section-eyebrow">핵심 기술 역량</span>
              <h3>풀스택부터 엣지 AI까지 이어지는 문제 해결력</h3>
              <p>React 19, Spring Boot, MySQL, PHP, Python, Jetson/YOLO 등 도메인에 갇히지 않고 최적의 기술을 조합합니다.</p>
            </div>
            <div className="banner-right">
              <Link to="/about" className="btn-primary btn-lg">
                전체 기술 스택 보기 <FaArrowRight className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


