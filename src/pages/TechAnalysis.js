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
    const filtered = techArticles.filter(article => {
      const matchCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.summary.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
    
    // 최신순(내림차순) 정렬
    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
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

        <div className="row g-4">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div className="col-12 col-md-6 col-xl-4" key={article.id}>
                <Link 
                  to={`/tech-analysis/${article.id}`} 
                  className="text-decoration-none h-100 d-block"
                >
                  <div 
                    className="glass-panel p-0 h-100 overflow-hidden d-flex flex-column"
                    style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer', border: '1px solid var(--color-border)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                      e.currentTarget.style.borderColor = 'var(--color-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                    }}
                  >
                    <div className="card-img-wrapper" style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                      <img 
                        src={`${process.env.PUBLIC_URL}${article.thumbnail}`} 
                        alt={article.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                        <span className="badge rounded-pill" style={{ background: 'rgba(0,0,0,0.7)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '0.4rem 0.8rem' }}>
                          {article.date}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 d-flex flex-column flex-grow-1">
                      <div className="mb-2">
                        <span className="badge" style={{ background: 'rgba(56, 189, 248, 0.15)', color: 'var(--color-primary)', border: '1px solid var(--color-primary)', fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>
                          {article.category}
                        </span>
                      </div>
                      <h3 className="mb-3" style={{ color: 'var(--color-text-main)', fontWeight: '700', fontSize: '1.25rem', lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {article.title}
                      </h3>
                      <p className="mb-4" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', flexGrow: 1 }}>
                        {article.summary}
                      </p>
                      <div className="mt-auto d-flex align-items-center justify-content-between" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                        <span style={{ color: 'var(--color-secondary)', fontWeight: '600', fontSize: '0.9rem' }}>자세히 읽기 &rarr;</span>
                        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>직접 분석</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="text-center py-5 glass-panel">
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', margin: 0 }}>검색 결과가 없습니다.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechAnalysis;
