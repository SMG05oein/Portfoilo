import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { techArticles } from '../data/techAnalysisData';

const TechArticle = () => {
  const { id } = useParams();
  const article = techArticles.find(a => a.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="page-container text-center d-flex flex-column justify-content-center align-items-center">
        <h2>아티클을 찾을 수 없습니다.</h2>
        <Link to="/tech-analysis" className="btn btn-primary mt-3">목록으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <div className="page-container" style={{ paddingBottom: 'var(--space-xl)' }}>
      {/* Header Banner */}
      <div style={{ position: 'relative', height: '400px', width: '100%', marginBottom: '3rem', overflow: 'hidden' }}>
        <img 
          src={`${process.env.PUBLIC_URL}${article.thumbnail}`} 
          alt={article.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8))' }}></div>
        
        <div className="container" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <span className="badge" style={{ background: 'var(--color-primary)', color: '#000', fontSize: '0.9rem', padding: '0.4rem 0.8rem' }}>{article.category}</span>
          </div>
          <h1 className="text-center mb-3" style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: '700', textShadow: '0 2px 15px rgba(0,0,0,0.6)' }}>{article.title}</h1>
          <div className="text-center" style={{ color: 'rgba(255,255,255,0.95)', fontWeight: '500' }}>
            <span>{article.date}</span>
            <span className="mx-2">•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      <div className="container">
        <Link to="/tech-analysis" className="text-decoration-none mb-4 d-inline-flex align-items-center" style={{ color: 'var(--color-primary)', fontWeight: '500' }}>
          <span className="me-2">&larr;</span> 기술 분석 목록으로
        </Link>

        <div className="row justify-content-center mt-3">
          <div className="col-12 col-lg-9">
            <div className="glass-panel p-4 p-md-5 markdown-body" style={{ borderRadius: '16px', background: 'var(--color-surface)' }}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({node, children, ...props}) => <h2 style={{ color: 'var(--color-primary)', marginTop: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }} {...props}>{children}</h2>,
                  h3: ({node, children, ...props}) => <h3 style={{ color: 'var(--color-secondary)', marginTop: '1.5rem' }} {...props}>{children}</h3>,
                  p: ({node, ...props}) => <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }} {...props} />,
                  li: ({node, ...props}) => <li style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }} {...props} />,
                  table: ({node, ...props}) => (
                    <div className="table-responsive my-4">
                      <table className="table table-bordered border-secondary" {...props} />
                    </div>
                  ),
                  th: ({node, ...props}) => <th style={{ color: 'var(--color-primary)' }} {...props} />,
                  code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <div style={{ borderRadius: '8px', overflow: 'hidden', margin: '1.5rem 0' }}>
                        <SyntaxHighlighter
                          children={String(children).replace(/\n$/, '')}
                          style={atomDark}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        />
                      </div>
                    ) : (
                      <code style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--color-primary)', padding: '0.2rem 0.4rem', borderRadius: '4px' }} className={className} {...props}>
                        {children}
                      </code>
                    )
                  }
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechArticle;
