import { useState, useEffect } from 'react';
import { content } from './data/content';

// --- Auth Components ---

const LoginScreen = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '5555') {
      localStorage.setItem('gestoria_auth', 'true');
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-dark)',
      padding: '2rem'
    }}>
      <div style={{
        background: 'var(--bg-panel)',
        border: '1px solid var(--border-color)',
        borderRadius: '1rem',
        padding: '3rem',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>GESTORIA 2.0</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.9rem' }}>
          Конфиденциальный отчёт
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'var(--bg-dark)',
              border: error ? '2px solid var(--accent-red)' : '1px solid var(--border-color)',
              borderRadius: '0.5rem',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              marginBottom: '1rem',
              textAlign: 'center',
              letterSpacing: '0.3em'
            }}
            autoFocus
          />
          {error && (
            <p style={{ color: 'var(--accent-red)', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Неверный пароль
            </p>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'var(--accent-primary)',
              color: '#000',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

// --- Components ---

const Sidebar = ({ activeId, onSelect, isOpen, onClose, onLogout }) => (
  <>
    <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="brand">
          <span>⚡</span> GESTORIA 2.0
        </div>
        <button className="close-btn" onClick={onClose} aria-label="Закрыть меню">
          ✕
        </button>
      </div>
      <nav className="nav-menu">
        {content.chapters.map((chapter) => (
          <div
            key={chapter.id}
            className={`nav-item ${activeId === chapter.id ? 'active' : ''}`}
            onClick={() => {
              onSelect(chapter.id);
              onClose();
            }}
          >
            {chapter.title.split(': ')[1] || chapter.title}
          </div>
        ))}
      </nav>
      <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
        <button
          onClick={onLogout}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            background: 'transparent',
            border: '1px solid var(--border-color)',
            borderRadius: '0.5rem',
            color: 'var(--text-secondary)',
            fontSize: '0.85rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s ease'
          }}
        >
          🚪 Выйти
        </button>
      </div>
    </aside>
  </>
);

const MobileHeader = ({ onMenuClick, title }) => (
  <div className="mobile-header">
    <button className="hamburger-btn" onClick={onMenuClick} aria-label="Открыть меню">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div className="mobile-title">{title}</div>
  </div>
);

const MetricCard = ({ label, value, trend, subtext }) => (
  <div className="metric-card">
    <div className="metric-label">{label}</div>
    <div className="metric-value">{value}</div>
    {trend && <div className="metric-trend">{trend}</div>}
    {subtext && <div className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>{subtext}</div>}
  </div>
);

const BarChart = ({ data }) => (
  <div className="bar-chart">
    {data.map((item, i) => (
      <div key={i} className="bar-row">
        <div className="bar-label">{item.label}</div>
        <div className="bar-track">
          <div
            className="bar-fill"
            style={{
              width: `${(item.value / data[0].value) * 100}%`,
              background: item.color || 'var(--accent-cyan)'
            }}
          />
        </div>
        <div className="bar-value">€{item.value}M</div>
      </div>
    ))}
  </div>
);

const PricingTable = () => (
  <div className="data-table-container">
    <table className="data-table">
      <thead>
        <tr>
          <th>Пакет</th>
          <th>Целевой Клиент</th>
          <th>SLA</th>
          <th>Цена / мес</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span className="tag standard">Business Standard</span></td>
          <td>S.L. &lt;2M€, Локальные</td>
          <td>&lt; 24ч</td>
          <td>€450 - €700</td>
        </tr>
        <tr>
          <td><span className="tag premium">Global Premium</span></td>
          <td>S.L. 2-5M€, Импорт/Экспорт</td>
          <td>&lt; 4ч (Приоритет)</td>
          <td>€750 - €1200</td>
        </tr>
        <tr>
          <td><span className="tag elite">Corporate Elite</span></td>
          <td>S.L. &gt;5M€, Холдинги</td>
          <td>24/7 Личный менеджер</td>
          <td>&gt; €1500</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const CompetitorTable = ({ matrix, summary }) => {
  // Calculate metrics
  const avgPrice = Math.round(matrix.reduce((acc, curr) => {
    const price = parseInt(curr.price.replace(/[^0-9]/g, '')) || 500;
    return acc + price;
  }, 0) / matrix.length);

  return (
    <div>
      <div className="metrics-grid" style={{ marginBottom: '2rem' }}>
        <MetricCard label="Средний Чек Рынка" value={`€${avgPrice}`} subtext="Monthly Fee" />
        <MetricCard label="Market Gap" value="High" subtext="S.L. €1-10M Segment" />
        <MetricCard label="Risk Variance" value="Critical" subtext="Factory vs Boutique" />
      </div>

      <div className="competitor-table-container">
        <table className="competitor-table">
          <thead>
            <tr>
              <th>Игрок</th>
              <th>Тип</th>
              <th>Цена</th>
              <th>Технология</th>
              <th>Риск</th>
            </tr>
          </thead>
          <tbody>
            {matrix.map((row, i) => (
              <tr key={i}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>
                      {row.name.charAt(0)}
                    </div>
                    <strong>{row.name}</strong>
                  </div>
                </td>
                <td><span className="tag standard">{row.type}</span></td>
                <td style={{ fontFamily: 'monospace', fontSize: '1.1em' }}>{row.price}</td>
                <td>{row.tech}</td>
                <td>
                  <span className={`risk-badge ${row.risk.includes('Высокий') ? 'high' : row.risk.includes('Низкий') ? 'low' : 'medium'}`}>
                    {row.risk.split(' ')[0]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-secondary)', padding: '1rem', borderLeft: '3px solid var(--accent-purple)', background: 'rgba(112, 0, 255, 0.05)' }}>
          {summary}
        </p>
      </div>
    </div>
  );
};

const TechStackGrid = ({ stack }) => {
  const categoryIcons = ['📊', '🖥️', '💬', '🔒'];
  const categoryColors = ['var(--accent-cyan)', 'var(--accent-purple)', 'var(--accent-green)', 'var(--accent-red)'];

  return (
    <div>
      {/* Summary Metrics */}
      <div className="metrics-grid" style={{ marginBottom: '3rem' }}>
        <MetricCard label="Стоимость MVP" value="€60-70" subtext="в месяц" />
        <MetricCard label="Time to Market" value="2-4 нед" subtext="до первого клиента" />
        <MetricCard label="Масштабирование" value="Free Tier" subtext="до 10 клиентов" />
      </div>

      {/* Stack Categories */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {stack.map((cat, i) => (
          <div key={i} style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '1rem',
            padding: '1.5rem',
            borderTop: `3px solid ${categoryColors[i] || 'var(--accent-cyan)'}`
          }}>
            {/* Category Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.5rem' }}>{categoryIcons[i] || '📦'}</span>
              <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>{cat.category}</h3>
            </div>

            {/* Tools List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cat.tools.map((tool, j) => (
                <div key={j} style={{
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '0.5rem',
                  borderLeft: `2px solid ${j === 0 ? categoryColors[i] : 'var(--border-color)'}`
                }}>
                  <div style={{
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    {tool.name}
                  </div>
                  <div style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5'
                  }}>
                    {tool.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LegalShield = ({ insurance, clauses }) => (
  <div className="legal-shield-container">
    <div className="insurance-card" style={{ background: 'linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%)', border: '1px solid #333' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}>🛡️ Insurance Shield</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Provider: {insurance.provider}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="insurance-amount" style={{ fontSize: '2rem', color: '#00ff88', textShadow: '0 0 20px rgba(0, 255, 136, 0.3)' }}>
            {insurance.coverage.split(' ')[0]}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Coverage Limit</span>
        </div>
      </div>

      <div style={{ margin: '1.5rem 0', height: '6px', background: '#333', borderRadius: '3px', overflow: 'hidden' }}>
        <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, #00ff88 0%, #00cc6a 100%)' }}></div>
      </div>

      <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
        <p style={{ color: '#ef4444', fontSize: '0.9rem', margin: 0, display: 'flex', gap: '0.5rem' }}>
          <span>⚠️</span>
          <span><strong>Critical Exclusion:</strong> {insurance.critical_detail}</span>
        </p>
      </div>
    </div>

    <div className="clauses-list">
      <h3 style={{ marginTop: 0, marginBottom: '1.5rem' }}>Contract Clauses</h3>
      {clauses.map((clause, i) => (
        <div key={i} className="clause-item" style={{ position: 'relative', paddingLeft: '1.5rem' }}>
          <div style={{ position: 'absolute', left: 0, top: '0.4rem', width: '8px', height: '8px', borderRadius: '50%', background: i === 0 ? '#ff4444' : 'var(--accent-cyan)' }}></div>
          <span className="clause-title" style={{ display: 'block', marginBottom: '0.25rem' }}>{clause.title}</span>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{clause.text}</p>
        </div>
      ))}
    </div>
  </div>
);

const DetailedTimeline = ({ phases }) => (
  <div className="timeline-container" style={{ marginTop: '2rem' }}>
    {phases.map((phase, i) => (
      <div key={i} className="roadmap-phase">
        <div className="phase-header">
          <h3 className="phase-title">{phase.phase}</h3>
          <span className="phase-duration">{phase.duration}</span>
        </div>
        <ul className="phase-steps">
          {phase.steps.map((step, j) => (
            <li key={j}>{step}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

// --- Main Content Renderer ---

const ChapterContent = ({ chapter }) => {
  // Custom renders for specific chapters based on ID
  if (chapter.id === 'market-deep') {
    return (
      <div>
        <div className="metrics-grid">
          <MetricCard label="Объем Рынка" value="€4.2B" trend="▲ +12% YoY" subtext="Драйвер: VeriFactu" />
          <MetricCard label="Активные S.L." value="1.2M" subtext="Целевой сегмент: 15%" />
          <MetricCard label="Средний Чек" value="€850" trend="▲ +5%" subtext="В сегменте Premium" />
        </div>

        <h3>Выручка Big 4 (Benchmark)</h3>
        <BarChart data={[
          { label: 'Deloitte', value: 1068, color: '#86bc25' },
          { label: 'PwC', value: 795, color: '#e0301e' },
          { label: 'EY', value: 756, color: '#ffe600' },
          { label: 'KPMG', value: 602, color: '#00338d' },
          { label: 'ETL Global (Mid)', value: 184, color: '#7000ff' }
        ]} />

        <div style={{ marginTop: '3rem' }}>
          <h3>Инсайты</h3>
          {chapter.sections.map((sec, i) => (
            <div key={i} style={{ marginBottom: '2rem' }}>
              <h4>{sec.title}</h4>
              {sec.text.map((p, j) => <p key={j} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />)}
              {sec.list && (
                <ul>
                  {sec.list.map((item, k) => <li key={k} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (chapter.id === 'fiscal-traps') {
    return (
      <div>
        {chapter.sections.map((sec, i) => (
          <div key={i} style={{ marginBottom: '2.5rem' }}>
            <h3>{sec.title}</h3>
            {sec.text.map((p, j) => <p key={j} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />)}
          </div>
        ))}

        {chapter.pricing && (
          <div style={{ marginTop: '3rem' }}>
            <h3>{chapter.pricing.title}</h3>
            <div className="data-table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Объем операций</th>
                    <th>Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {chapter.pricing.data.map((row, i) => (
                    <tr key={i}>
                      <td>{row.range}</td>
                      <td><strong>{row.price}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
              Источник: Brao & Co, специализированные сервисы Intrastat
            </p>
          </div>
        )}
      </div>
    );
  }

  if (chapter.id === 'unit-economics') {
    return (
      <div>
        <h3>Коммерческие Пакеты</h3>
        <PricingTable />

        <div className="metrics-grid" style={{ margin: '2rem 0' }}>
          <MetricCard label="Target LTV" value="€35k+" subtext="3-5 лет retention" />
          <MetricCard label="Target CAC" value="€1.2k" subtext="Экспертные продажи" />
          <MetricCard label="Margin" value="45%" subtext="При автоматизации >60%" />
        </div>

        {chapter.sections.map((sec, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            <h3>{sec.title}</h3>
            {sec.text.map((p, j) => <p key={j} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />)}
            {sec.list && (
              <ul>
                {sec.list.map((item, k) => <li key={k} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />)}
              </ul>
            )}
          </div>
        ))}

        {chapter.salaries && (
          <>
            <h3>Зарплатные Вилки (OPEX)</h3>
            <div className="features-grid" style={{ marginTop: '1rem' }}>
              {chapter.salaries.map((s, i) => (
                <div key={i} className="card">
                  <h4>{s.role}</h4>
                  <p className="highlight">{s.salary}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  if (chapter.id === 'competitors') {
    return <CompetitorTable matrix={chapter.matrix} summary={chapter.summary} />;
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
    return (
      <div>
        <LegalShield insurance={chapter.insurance} clauses={chapter.clauses} />
        {chapter.process && (
          <div style={{ marginTop: '3rem' }}>
            <h3>Процесс Управления Рисками</h3>
            <div className="timeline-container">
              {chapter.process.map((item, i) => (
                <div key={i} className="roadmap-phase">
                  <div className="phase-header">
                    <h4 className="phase-title">{item.step}</h4>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (chapter.id === 'roadmap') {
    return <DetailedTimeline phases={chapter.phases} />;
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeChapterId, setActiveChapterId] = useState(content.chapters[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeChapter = content.chapters.find(c => c.id === activeChapterId);

  // Check auth on mount
  useEffect(() => {
    const auth = localStorage.getItem('gestoria_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

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
        <div className="header-section">
          <h1 className="chapter-title">{activeChapter.heading}</h1>
          <div className="chapter-subtitle">{activeChapter.title}</div>
        </div>
        <ChapterContent chapter={activeChapter} />
      </main>
    </div>
  );
}

export default App;
