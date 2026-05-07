import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h2 className="greeting">안녕하세요,</h2>
            <h1 className="name text-gradient">{personalInfo.name}</h1>
            <h3 className="role">
              백석대학교
              <div>컴퓨터공학부 소프트웨어학 전공</div>
            </h3>
            <p className="bio">{personalInfo.bio}</p>

            <div className="hero-actions">
              <Link to="/extracurricular" className="btn-primary btn-lg">
                주요 활동 보기
              </Link>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </section>
    </div>
  );
};

export default Home;
