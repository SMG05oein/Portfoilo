import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ActivityPage from './pages/ActivityPage';
import ProjectDetail from './pages/ProjectDetail';
import SearchPage from './pages/SearchPage';
import TechAnalysis from './pages/TechAnalysis';
import TechArticle from './pages/TechArticle';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/in-school" element={<ActivityPage category="in-school" title="교내 활동" subtitle="학교에서 진행한 다채로운 프로젝트와 성과들을 소개합니다." />} />
          <Route path="/extracurricular" element={<ActivityPage category="extracurricular" title="교외 활동" subtitle="해커톤, 외주 개발 등 실무 중심의 개발 경험을 보여드립니다." />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/tech-analysis" element={<TechAnalysis />} />
          <Route path="/tech-analysis/:id" element={<TechArticle />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
