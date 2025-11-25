import { useState } from 'react';
import { content } from './data/content';

// Components
import { LoginScreen } from './components/auth';
import { Sidebar, MobileHeader } from './components/layout';
import { MetricCard, BarChart, PricingTable } from './components/ui';
import { CompetitorTable } from './components/competitors';
import { TechStackGrid } from './components/tech';
import { MarketArchitecture, FiscalTraps, UnitEconomics, StrategyLaunch, LegalProtection } from './components/chapters';

// --- Main Content Renderer ---

const ChapterContent = ({ chapter }) => {
  // Custom renders for specific chapters based on ID
  if (chapter.id === 'strategy-launch') {
    return <StrategyLaunch chapter={chapter} />;
  }

  if (chapter.id === 'market-deep') {
    return <MarketArchitecture chapter={chapter} />;
  }

  if (chapter.id === 'fiscal-traps') {
    return <FiscalTraps chapter={chapter} />;
  }

  if (chapter.id === 'unit-economics') {
    return <UnitEconomics chapter={chapter} />;
  }

  if (chapter.id === 'competitors') {
    return (
      <CompetitorTable
        segments={chapter.segments}
        matrix={chapter.matrix}
        insights={chapter.insights}
        gaps={chapter.gaps}
        summary={chapter.summary}
        sla_comparison={chapter.sla_comparison}
        insurance_comparison={chapter.insurance_comparison}
        intl_trade_comparison={chapter.intl_trade_comparison}
      />
    );
  }

  if (chapter.id === 'tech-stack-deep') {
    return (
      <div>
        <TechStackGrid stack={chapter.stack} />
        {chapter.philosophy && (
          <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(59, 130, 246, 0.05)', borderLeft: '3px solid var(--accent-primary)', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0 }}>Философия Архитектуры</h3>
            <p style={{ margin: 0, lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: chapter.philosophy.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </div>
        )}
      </div>
    );
  }

  if (chapter.id === 'legal-risk') {
    return <LegalProtection chapter={chapter} />;
  }

  // Default Text Render
  return (
    <div className="chapter-text">
      {chapter.sections.map((section, i) => (
        <div key={i} className="section-block">
          <h3>{section.title}</h3>
          {section.text.map((p, j) => (
            <p key={j} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          ))}
          {section.list && (
            <ul>
              {section.list.map((item, k) => (
                <li key={k} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

function App() {
  // Initialize auth state from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('gestoria_auth') === 'true';
  });
  const [activeChapterId, setActiveChapterId] = useState(content.chapters[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeChapter = content.chapters.find(c => c.id === activeChapterId);

  const handleLogout = () => {
    localStorage.removeItem('gestoria_auth');
    setIsAuthenticated(false);
  };

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="app-container">
      <MobileHeader
        onMenuClick={() => setIsMobileMenuOpen(true)}
        title={activeChapter.title.split(': ')[1] || activeChapter.title}
      />
      <Sidebar
        activeId={activeChapterId}
        onSelect={setActiveChapterId}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onLogout={handleLogout}
      />
      <main className="main-content">
        <div className="chapter-header">
          <h1 className="chapter-heading">{activeChapter.heading || activeChapter.title}</h1>
        </div>
        <ChapterContent chapter={activeChapter} />
      </main>
    </div>
  );
}

export default App;
