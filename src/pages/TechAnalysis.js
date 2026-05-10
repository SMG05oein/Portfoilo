import React from 'react';
import { Link } from 'react-router-dom';
import { techArticles } from '../data/techAnalysisData';

const TechAnalysis = () => {
  return (
    <div className="page-container">
      <div className="container">
        <header className="page-header text-center">
          <h1 className="page-title">기술 분석 (Tech Analysis)</h1>
          <p className="page-subtitle mx-auto mb-5">
            개발 및 하드웨어 구성 중 마주한 기술적 고민과 분석 결과를 기록합니다.
          </p>
        </header>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            {techArticles.map((article) => (
              <Link 
                to={`/tech-analysis/${article.id}`} 
                key={article.id}
                className="text-decoration-none"
              >
                <div 
                  className="glass-panel p-0 mb-4 overflow-hidden d-flex flex-column flex-md-row"
                  style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease', cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="col-md-4 p-0">
                    <img 
                      src={`${process.env.PUBLIC_URL}${article.thumbnail}`} 
                      alt={article.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '200px' }}
                    />
                  </div>
                  <div className="col-md-8 p-4 d-flex flex-column justify-content-center">
                    <div className="d-flex align-items-center mb-2">
                      <span className="badge bg-primary me-2" style={{ background: 'var(--color-primary) !important', color: '#000' }}>{article.category}</span>
                      <small style={{ color: 'var(--color-secondary)', fontWeight: '600' }}>직접 정리 및 분석</small>
                    </div>
                    <h3 className="mb-3" style={{ color: 'var(--color-text-main)', fontWeight: '600', fontSize: '1.4rem' }}>{article.title}</h3>
                    <p style={{ color: 'var(--color-text-muted)', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {article.summary}
                    </p>
                    <div className="mt-2" style={{ color: 'var(--color-secondary)', fontWeight: '500' }}>
                      자세히 읽기 &rarr;
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechAnalysis;
