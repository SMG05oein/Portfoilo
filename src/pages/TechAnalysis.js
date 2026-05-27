import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { techArticles } from '../data/techAnalysisData';
import { FaSearch } from 'react-icons/fa';

const TechAnalysis = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = techArticles.map(article => article.category);
    return ['All', ...new Set(cats)];
  }, []);

  const filteredArticles = useMemo(() => {
    return techArticles.filter(article => {
      const matchCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.summary.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="page-container">
      <div className="container">
        <header className="page-header text-center">
          <h1 className="page-title">기술 분석 (Tech Analysis)</h1>
          <p className="page-subtitle mx-auto mb-5">
            개발 및 하드웨어 구성 중 마주한 기술적 고민과 분석 결과를 기록합니다.
          </p>
        </header>

        <div className="search-filter-section mb-5">
          {/* Search Input */}
          <div className="d-flex justify-content-center mb-4">
            <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
              <input 
                type="text" 
                placeholder="기술 분석 내에서 검색... (제목, 내용)" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="glass-panel w-100"
                style={{ padding: '0.8rem 1rem 0.8rem 3rem', borderRadius: '30px', color: 'var(--color-text-main)', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--color-surface)' }}
              />
              <FaSearch style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
            </div>
          </div>

          {/* Category Pills - Horizontal Scrollable */}
          <div 
            className="tag-scroll-container d-flex gap-2 mb-2" 
            style={{ 
              overflowX: 'auto', 
              whiteSpace: 'nowrap', 
              padding: '0.5rem 0.2rem',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              justifyContent: categories.length > 6 ? 'flex-start' : 'center'
            }}
          >
            <style>
              {`
                .tag-scroll-container::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="btn"
                  style={{
                    padding: '0.5rem 1.2rem',
                    borderRadius: '25px',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    flexShrink: 0,
                    border: `1px solid ${isSelected ? 'var(--color-primary)' : 'var(--color-border)'}`,
                    background: isSelected ? 'var(--color-primary)' : 'var(--color-surface)',
                    color: isSelected ? '#fff' : 'var(--color-text-main)',
                    boxShadow: isSelected ? 'var(--shadow-glow)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
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
              ))
            ) : (
              <div className="text-center py-5 glass-panel">
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', margin: 0 }}>검색 결과가 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechAnalysis;
