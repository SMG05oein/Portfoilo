import React, { useState, useMemo } from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/portfolioData';
import { FaSearch } from 'react-icons/fa';

const ActivityPage = ({ category, title, subtitle }) => {
  const [localQuery, setLocalQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  // Filter by overall category (in-school vs extracurricular)
  const baseProjects = useMemo(() => projects.filter(p => p.category === category), [category]);

  // Extract all unique tags (technologies and badges)
  const tags = useMemo(() => {
    const tagSet = new Set();
    baseProjects.forEach(p => {
      if (p.badge) tagSet.add(p.badge);
      if (p.technologies) {
        p.technologies.forEach(t => tagSet.add(t));
      }
    });
    return ['All', ...Array.from(tagSet)];
  }, [baseProjects]);

  // Apply filters
  const filteredProjects = useMemo(() => {
    return baseProjects.filter(p => {
      // 1. Tag Match (OR logic: project must have at least one of the selected tags)
      let tagMatch = true;
      if (selectedTags.length > 0) {
        tagMatch = selectedTags.some(tag => p.badge === tag || p.technologies?.includes(tag));
      }

      // 2. Query Match (title, description, tags, badge)
      let queryMatch = true;
      if (localQuery.trim()) {
        const q = localQuery.toLowerCase();
        const titleMatch = p.title.toLowerCase().includes(q);
        const descMatch = p.description.toLowerCase().includes(q);
        const techMatch = p.technologies?.some(t => t.toLowerCase().includes(q));
        const badgeMatch = p.badge?.toLowerCase().includes(q);
        queryMatch = titleMatch || descMatch || techMatch || badgeMatch;
      }

      return tagMatch && queryMatch;
    });
  }, [baseProjects, localQuery, selectedTags]);

  // Reset filters when changing main category
  React.useEffect(() => {
    setLocalQuery('');
    setSelectedTags([]);
  }, [category]);

  const toggleTag = (tag) => {
    if (tag === 'All') {
      setSelectedTags([]);
      return;
    }
    
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="page-container">
      <div className="container">
        <header className="page-header text-center">
          <h1 className="page-title">{title}</h1>
          <p className="page-subtitle mx-auto mb-4">{subtitle}</p>
        </header>

        {/* Local Search and Filter Section */}
        {baseProjects.length > 0 && (
          <div className="search-filter-section mb-5">
            {/* Search Input */}
            <div className="d-flex justify-content-center mb-4">
              <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
                <input 
                  type="text" 
                  placeholder={`${title} 내에서 검색... (제목, 내용, 기술태그)`} 
                  value={localQuery}
                  onChange={(e) => setLocalQuery(e.target.value)}
                  className="glass-panel w-100"
                  style={{ padding: '0.8rem 1rem 0.8rem 3rem', borderRadius: '30px', color: 'var(--color-text-main)', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--color-surface)' }}
                />
                <FaSearch style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              </div>
            </div>

            {/* Tag Pills */}
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {tags.map((tag) => {
                const isSelected = tag === 'All' ? selectedTags.length === 0 : selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className="btn"
                    style={{
                      padding: '0.4rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      border: `1px solid ${isSelected ? 'var(--color-primary)' : 'var(--color-border)'}`,
                      background: isSelected ? 'var(--color-primary)' : 'var(--color-surface)',
                      color: isSelected ? '#fff' : 'var(--color-text-main)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="row g-4">
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
            <h4>조건에 맞는 프로젝트가 없습니다.</h4>
            <p>다른 검색어 또는 카테고리를 선택해 보세요.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityPage;
