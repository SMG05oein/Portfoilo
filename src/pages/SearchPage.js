import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/portfolioData';
import { FaSearch } from 'react-icons/fa';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    if (!query.trim()) {
      setFilteredProjects([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = projects.filter(p => {
      const titleMatch = p.title.toLowerCase().includes(lowerQuery);
      const descMatch = p.description.toLowerCase().includes(lowerQuery);
      const techMatch = p.technologies?.some(t => t.toLowerCase().includes(lowerQuery));
      const badgeMatch = p.badge?.toLowerCase().includes(lowerQuery);
      
      return titleMatch || descMatch || techMatch || badgeMatch;
    });

    setFilteredProjects(results);
  }, [query]);

  return (
    <div className="page-container">
      <div className="container">
        <header className="page-header text-center">
          <h1 className="page-title d-flex align-items-center justify-content-center">
            <FaSearch className="me-3" style={{ color: 'var(--color-primary)', fontSize: '2.5rem' }} />
            통합 검색 결과
          </h1>
          <p className="page-subtitle mx-auto">
            "{query}"에 대한 검색 결과입니다.
          </p>
        </header>

        {query.trim() === '' ? (
          <div className="text-center mt-5" style={{ color: 'var(--color-text-muted)' }}>
            <h4>검색어를 입력해 주세요.</h4>
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="row g-4 mt-4">
            {filteredProjects.map((project) => (
              <div key={project.id} className="col-12 col-md-6 col-xl-4 d-flex">
                <div className="w-100" style={{ height: '100%' }}>
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-5" style={{ color: 'var(--color-text-muted)' }}>
            <h4>검색 결과가 없습니다.</h4>
            <p>다른 키워드로 검색해 보세요.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
