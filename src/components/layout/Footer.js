import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import buildInfo from '../../buildDate.json';

const Footer = () => {
  return (
    <footer style={{
      padding: '2rem 0',
      borderTop: '1px solid var(--color-border)',
      marginTop: 'auto',
      textAlign: 'center'
    }}>
      <div className="container">
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-main)', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Get In Touch
          </p>
          <a href={`mailto:${personalInfo.email}`} className="text-gradient" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
            {personalInfo.email}
          </a>
        </div>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>GitHub</a>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', opacity: 0.7, margin: 0 }}>
            Designed & Developed by {personalInfo.name} with <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Antigravity</span>
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', opacity: 0.6, margin: 0 }}>
            마지막 업데이트: {buildInfo.lastUpdated}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
