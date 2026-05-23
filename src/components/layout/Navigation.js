import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSun, FaMoon, FaSearch } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  
  // Theme Toggle Logic
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const handleSearchSubmit = (e) => {
    e.submitter && e.preventDefault();
    if (e.key === 'Enter' || e.type === 'submit') {
      e.preventDefault();
      if (searchQuery.trim()) {
        navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        setIsMenuOpen(false);
        setSearchQuery('');
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: '홈', path: '/' },
    { name: '소개', path: '/about' },
    { name: '교내활동', path: '/in-school' },
    { name: '교외활동', path: '/extracurricular' },
    { name: '기술 분석', path: '/tech-analysis' }
  ];

  // 현재 경로가 활성 링크인지 판단하는 함수
  const isActiveLink = (linkPath) => {
    const currentPath = location.pathname;
    
    // 홈 페이지는 정확히 일치해야 함
    if (linkPath === '/') {
      return currentPath === '/';
    }
    
    // 다른 페이지는 기본 경로로 시작하면 활성화 (상세 페이지도 포함)
    return currentPath === linkPath || currentPath.startsWith(linkPath + '/');
  };

  return (
    <nav className={`navigation glass-panel ${isScrolled ? 'nav-scrolled' : ''}`} style={{ borderRadius: 0, borderTop: 0, borderLeft: 0, borderRight: 0 }}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="nav-brand text-gradient" style={{ textDecoration: 'none' }}>
          Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links d-none d-md-flex align-items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`nav-link ${isActiveLink(link.path) ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          
          <form onSubmit={handleSearchSubmit} className="d-flex align-items-center ms-3" style={{ position: 'relative' }}>
            <input 
              type="text" 
              placeholder="프로젝트 검색..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="glass-panel"
              style={{ padding: '0.4rem 1rem 0.4rem 2.5rem', borderRadius: '20px', color: 'var(--color-text-main)', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--color-nav-bg)', width: '200px' }}
            />
            <FaSearch style={{ position: 'absolute', left: '10px', color: 'var(--color-text-muted)', cursor: 'pointer' }} onClick={handleSearchSubmit} />
          </form>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn ms-3 d-flex align-items-center justify-content-center"
            aria-label="Toggle Theme"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
          >
            {theme === 'dark' ? <FaSun size={20} color="#fcd34d" /> : <FaMoon size={20} color="#4b5563" />}
          </button>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="d-flex d-md-none align-items-center">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn me-3 d-flex align-items-center justify-content-center"
            aria-label="Toggle Theme"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
          >
            {theme === 'dark' ? <FaSun size={20} color="#fcd34d" /> : <FaMoon size={20} color="#4b5563" />}
          </button>
          <button 
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="container p-0">
        <div className={`mobile-menu glass-panel ${isMenuOpen ? 'd-flex' : 'd-none'}`} style={{ borderRadius: 0, borderLeft: 0, borderRight: 0 }}>
          <div className="container py-2 d-flex flex-column">
            <form onSubmit={handleSearchSubmit} className="d-flex align-items-center mb-3 px-3" style={{ position: 'relative' }}>
              <input 
                type="text" 
                placeholder="프로젝트 검색..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="glass-panel w-100"
                style={{ padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: '8px', color: 'var(--color-text-main)', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--color-nav-bg)' }}
              />
              <FaSearch style={{ position: 'absolute', left: '25px', color: 'var(--color-text-muted)' }} />
            </form>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`mobile-nav-link ${isActiveLink(link.path) ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
