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

const CompetitorTable = ({ segments, matrix, insights, gaps, summary, sla_comparison, insurance_comparison, intl_trade_comparison }) => {
  const [selectedSegment, setSelectedSegment] = useState('all');

  // Segment colors
  const segmentColors = {
    'Tech-Forward': 'var(--accent-cyan)',
    'ВЭД-специалист': 'var(--accent-green)',
    'Odoo Integrator': 'var(--accent-purple)',
    'E-Commerce': 'var(--accent-yellow)',
    'Low-Cost Factory': 'var(--accent-red)',
    'Mid-Tier Сеть': '#6b7280'
  };

  // Filter matrix by segment
  const filteredMatrix = selectedSegment === 'all'
    ? matrix
    : matrix.filter(c => c.segment === selectedSegment);

  return (
    <div>
      {/* Key Metrics */}
      <div className="metrics-grid" style={{ marginBottom: '2rem' }}>
        <MetricCard label="Конкурентов в базе" value={matrix.length} subtext="Все сегменты" />
        <MetricCard label="Market Gap" value="S.L. €1-10M" subtext="Пропущенная середина" />
        <MetricCard label="Рыночных возможностей" value={gaps.length} subtext="Для входа" />
      </div>

      {/* Segments Overview */}
      <h3 style={{ marginBottom: '1.5rem' }}>Сегменты Рынка</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        {segments.map((seg, i) => (
          <div
            key={i}
            onClick={() => setSelectedSegment(selectedSegment === seg.name ? 'all' : seg.name)}
            style={{
              padding: '1.25rem',
              background: selectedSegment === seg.name ? 'rgba(0, 242, 255, 0.1)' : 'var(--bg-card)',
              border: selectedSegment === seg.name ? '2px solid var(--accent-primary)' : '1px solid var(--border-color)',
              borderRadius: '0.75rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{seg.icon}</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>{seg.name}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              {seg.examples}
            </div>
            <div style={{
              marginTop: '0.75rem',
              fontSize: '0.7rem',
              padding: '0.25rem 0.5rem',
              background: seg.priority === 'Высший' ? 'rgba(239, 68, 68, 0.2)' : seg.priority === 'Высокий' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(107, 114, 128, 0.2)',
              color: seg.priority === 'Высший' ? '#ef4444' : seg.priority === 'Высокий' ? '#f59e0b' : '#9ca3af',
              borderRadius: '0.25rem',
              display: 'inline-block'
            }}>
              {seg.priority} приоритет
            </div>
          </div>
        ))}
      </div>

      {/* Competitor Matrix */}
      <h3 style={{ marginBottom: '1rem' }}>
        Матрица Конкурентов
        {selectedSegment !== 'all' && (
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginLeft: '0.75rem' }}>
            ({filteredMatrix.length} из {matrix.length})
          </span>
        )}
      </h3>

      <div className="competitor-table-container" style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
        <table className="competitor-table" style={{ minWidth: '900px' }}>
          <thead>
            <tr>
              <th>Компания</th>
              <th>Сегмент</th>
              <th>Локация</th>
              <th>Команда</th>
              <th>Цена/мес</th>
              <th>Технологии</th>
              <th>Идеальный клиент</th>
            </tr>
          </thead>
          <tbody>
            {filteredMatrix.map((row, i) => (
              <tr key={i}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: `${segmentColors[row.segment]}20`,
                      border: `2px solid ${segmentColors[row.segment]}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      color: segmentColors[row.segment]
                    }}>
                      {row.name.charAt(0)}
                    </div>
                    <div>
                      <strong style={{ display: 'block' }}>{row.name}</strong>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{row.year}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span style={{
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.5rem',
                    background: `${segmentColors[row.segment]}20`,
                    color: segmentColors[row.segment],
                    borderRadius: '0.25rem',
                    whiteSpace: 'nowrap'
                  }}>
                    {row.segment}
                  </span>
                </td>
                <td style={{ fontSize: '0.85rem' }}>{row.location}</td>
                <td style={{ fontSize: '0.85rem', textAlign: 'center' }}>{row.team}</td>
                <td style={{ fontFamily: 'monospace', fontSize: '0.9rem', fontWeight: '600', color: 'var(--accent-green)' }}>
                  {row.price}
                </td>
                <td style={{ fontSize: '0.8rem', maxWidth: '150px' }}>{row.tech}</td>
                <td style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', maxWidth: '150px' }}>{row.ideal_for}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Expandable Competitor Details */}
      {selectedSegment !== 'all' && filteredMatrix.length > 0 && (
        <div style={{ marginBottom: '2.5rem' }}>
          <h4 style={{ marginBottom: '1rem' }}>Детальные профили: {selectedSegment}</h4>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {filteredMatrix.map((comp, i) => (
              <div key={i} style={{
                padding: '1.5rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '0.75rem',
                borderLeft: `4px solid ${segmentColors[comp.segment]}`
              }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{comp.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      {comp.location} • {comp.year} • {comp.team}
                    </div>
                  </div>
                  <div style={{
                    padding: '0.5rem 0.75rem',
                    background: 'var(--accent-green)',
                    color: '#000',
                    borderRadius: '0.5rem',
                    fontWeight: '700',
                    fontSize: '0.9rem'
                  }}>
                    {comp.price}
                  </div>
                </div>

                {/* Positioning */}
                {comp.positioning && (
                  <div style={{
                    padding: '0.75rem 1rem',
                    background: 'rgba(0, 242, 255, 0.05)',
                    borderRadius: '0.5rem',
                    marginBottom: '1rem',
                    fontSize: '0.85rem',
                    fontStyle: 'italic',
                    color: 'var(--text-primary)',
                    lineHeight: '1.5'
                  }}>
                    {comp.positioning}
                  </div>
                )}

                {/* Services */}
                {comp.services && (
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Услуги</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {comp.services.map((service, j) => (
                        <span key={j} style={{
                          padding: '0.25rem 0.5rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '0.25rem',
                          fontSize: '0.75rem',
                          color: 'var(--text-secondary)'
                        }}>
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing Tiers */}
                {comp.pricing_tiers && (
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Тарифы</div>
                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                      {comp.pricing_tiers.map((tier, j) => (
                        <div key={j} style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '0.5rem',
                          background: 'rgba(255, 255, 255, 0.02)',
                          borderRadius: '0.25rem',
                          fontSize: '0.8rem'
                        }}>
                          <span style={{ color: 'var(--text-secondary)' }}>
                            {tier.name} {tier.desc && <span style={{ opacity: 0.7 }}>— {tier.desc}</span>}
                          </span>
                          <span style={{ fontWeight: '600', color: 'var(--accent-green)', fontFamily: 'monospace' }}>{tier.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Strengths & Weaknesses */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
                  <div>
                    <div style={{ color: 'var(--accent-green)', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.8rem' }}>✓ Сильные стороны</div>
                    <div style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{comp.strengths}</div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--accent-red)', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.8rem' }}>✗ Слабые стороны</div>
                    <div style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{comp.weaknesses}</div>
                  </div>
                </div>

                {/* Key Insight */}
                {comp.key_insight && (
                  <div style={{
                    padding: '0.75rem 1rem',
                    background: 'rgba(112, 0, 255, 0.1)',
                    borderRadius: '0.5rem',
                    borderLeft: '3px solid var(--accent-purple)',
                    fontSize: '0.85rem',
                    lineHeight: '1.5'
                  }}>
                    <span style={{ fontWeight: '600', color: 'var(--accent-purple)' }}>💡 Ключевой инсайт: </span>
                    <span style={{ color: 'var(--text-secondary)' }}>{comp.key_insight}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Market Insights */}
      <h3 style={{ marginBottom: '1rem' }}>Рыночные Инсайты</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        {insights.map((insight, i) => (
          <div key={i} style={{
            padding: '1.25rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '0.75rem',
            borderTop: '3px solid var(--accent-cyan)'
          }}>
            <div style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.75rem' }}>{insight.title}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{insight.text}</div>
          </div>
        ))}
      </div>

      {/* Market Gaps */}
      <h3 style={{ marginBottom: '1rem' }}>Рыночные Возможности (6 Gaps)</h3>
      <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }}>
        {gaps.map((gap, i) => (
          <div key={i} style={{
            padding: '1.5rem',
            background: 'rgba(0, 255, 136, 0.05)',
            border: '1px solid rgba(0, 255, 136, 0.3)',
            borderRadius: '0.75rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'var(--accent-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: '0.85rem',
                  flexShrink: 0
                }}>
                  {i + 1}
                </div>
                <div style={{ fontWeight: '700', fontSize: '1rem' }}>{gap.title}</div>
              </div>
              {gap.opportunity && (
                <div style={{
                  padding: '0.35rem 0.75rem',
                  background: 'var(--accent-green)',
                  color: '#000',
                  borderRadius: '0.5rem',
                  fontWeight: '700',
                  fontSize: '0.8rem',
                  whiteSpace: 'nowrap'
                }}>
                  {gap.opportunity}
                </div>
              )}
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
              {gap.description}
            </div>

            {gap.solution && (
              <div style={{ marginBottom: '0.75rem' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: '0.25rem', letterSpacing: '0.05em' }}>Решение</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>{gap.solution}</div>
              </div>
            )}

            {gap.market_size && (
              <div style={{
                padding: '0.5rem 0.75rem',
                background: 'rgba(0, 242, 255, 0.1)',
                borderRadius: '0.25rem',
                fontSize: '0.8rem',
                color: 'var(--accent-cyan)',
                fontFamily: 'monospace'
              }}>
                📊 {gap.market_size}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* SLA Comparison */}
      {sla_comparison && (
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>{sla_comparison.title}</h3>
          <div style={{
            padding: '0.75rem 1rem',
            background: 'rgba(239, 68, 68, 0.1)',
            borderRadius: '0.5rem',
            marginBottom: '1rem',
            fontSize: '0.85rem',
            color: 'var(--accent-red)'
          }}>
            ⚠️ {sla_comparison.note}
          </div>
          <div className="data-table-container" style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table className="data-table" style={{ minWidth: '600px' }}>
              <thead>
                <tr>
                  <th>Провайдер</th>
                  <th>SLA</th>
                  <th>Гарантия</th>
                  <th>Примечания</th>
                </tr>
              </thead>
              <tbody>
                {sla_comparison.data.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: '600' }}>{row.name}</td>
                    <td style={{
                      fontFamily: 'monospace',
                      color: row.sla === '1 час' ? 'var(--accent-green)' : row.sla.includes('24') ? 'var(--accent-cyan)' : 'var(--text-secondary)'
                    }}>
                      {row.sla}
                    </td>
                    <td>
                      <span style={{
                        padding: '0.2rem 0.5rem',
                        borderRadius: '0.25rem',
                        fontSize: '0.75rem',
                        background: row.guarantee === 'Письменная' ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        color: row.guarantee === 'Письменная' ? 'var(--accent-green)' : 'var(--text-secondary)'
                      }}>
                        {row.guarantee}
                      </span>
                    </td>
                    <td style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{
            padding: '0.75rem 1rem',
            background: 'rgba(0, 242, 255, 0.05)',
            borderLeft: '3px solid var(--accent-cyan)',
            borderRadius: '0.5rem',
            fontSize: '0.85rem'
          }}>
            💡 {sla_comparison.recommendation}
          </div>
        </div>
      )}

      {/* Insurance Comparison */}
      {insurance_comparison && (
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>{insurance_comparison.title}</h3>

          {/* Legal Requirements */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{
              padding: '1rem',
              background: 'rgba(239, 68, 68, 0.05)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '0.5rem'
            }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-red)', marginBottom: '0.5rem' }}>Юридическое требование</div>
              <div style={{ fontSize: '0.85rem' }}>{insurance_comparison.legal_requirement}</div>
            </div>
            <div style={{
              padding: '1rem',
              background: 'rgba(0, 255, 136, 0.05)',
              border: '1px solid rgba(0, 255, 136, 0.3)',
              borderRadius: '0.5rem'
            }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-green)', marginBottom: '0.5rem' }}>Рекомендация</div>
              <div style={{ fontSize: '0.85rem' }}>{insurance_comparison.recommended}</div>
            </div>
          </div>

          {/* Coverage */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{
              padding: '1rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '0.5rem'
            }}>
              <div style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--accent-green)', marginBottom: '0.75rem' }}>✓ Покрывается</div>
              {insurance_comparison.coverage.covered.map((item, i) => (
                <div key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>• {item}</div>
              ))}
            </div>
            <div style={{
              padding: '1rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '0.5rem'
            }}>
              <div style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--accent-red)', marginBottom: '0.75rem' }}>✗ НЕ покрывается</div>
              {insurance_comparison.coverage.not_covered.map((item, i) => (
                <div key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>• {item}</div>
              ))}
            </div>
          </div>

          {/* By Provider Type */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.75rem' }}>Страхование по типу провайдера</div>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {insurance_comparison.by_type.map((item, i) => (
                <div key={i} style={{
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '0.5rem',
                  display: 'grid',
                  gridTemplateColumns: '150px 1fr',
                  gap: '1rem',
                  alignItems: 'center',
                  fontSize: '0.8rem'
                }}>
                  <div style={{ fontWeight: '600' }}>{item.type}</div>
                  <div>
                    <span style={{ color: 'var(--text-secondary)' }}>{item.insurance}</span>
                    <span style={{ color: 'var(--accent-green)', marginLeft: '0.5rem' }}>+ {item.pros}</span>
                    <span style={{ color: 'var(--accent-red)', marginLeft: '0.5rem' }}>− {item.cons}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Zero Multas Warning */}
          <div style={{
            padding: '0.75rem 1rem',
            background: 'rgba(245, 158, 11, 0.1)',
            borderLeft: '3px solid var(--accent-yellow)',
            borderRadius: '0.5rem',
            fontSize: '0.85rem',
            marginBottom: '1.5rem'
          }}>
            ⚠️ {insurance_comparison.zero_multas}
          </div>

          {/* Zero Multas Tiers */}
          {insurance_comparison.zero_multas_tiers && (
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.75rem' }}>Уровни покрытия «Zero Multas»</div>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {insurance_comparison.zero_multas_tiers.map((tier, i) => (
                  <div key={i} style={{
                    padding: '1rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem',
                    borderLeft: `4px solid ${i === 0 ? 'var(--accent-cyan)' : i === 1 ? 'var(--accent-purple)' : 'var(--accent-green)'}`
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <div style={{ fontWeight: '600' }}>{tier.tier}</div>
                      <span style={{
                        padding: '0.2rem 0.5rem',
                        background: i === 2 ? 'var(--accent-green)' : i === 1 ? 'var(--accent-purple)' : 'var(--accent-cyan)',
                        color: '#000',
                        borderRadius: '0.25rem',
                        fontSize: '0.7rem',
                        fontWeight: '600'
                      }}>
                        {tier.coverage}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{tier.description}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-red)' }}>✗ {tier.excludes}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Personal Guarantees */}
          {insurance_comparison.personal_guarantees && (
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                {insurance_comparison.personal_guarantees.title}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                {insurance_comparison.personal_guarantees.intro}
              </div>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {insurance_comparison.personal_guarantees.examples.map((ex, i) => (
                  <div key={i} style={{
                    padding: '0.75rem 1rem',
                    background: 'rgba(0, 255, 136, 0.05)',
                    border: '1px solid rgba(0, 255, 136, 0.2)',
                    borderRadius: '0.5rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <div style={{ fontWeight: '600', fontSize: '0.85rem' }}>{ex.provider}</div>
                      <span style={{
                        padding: '0.2rem 0.5rem',
                        background: 'var(--accent-green)',
                        color: '#000',
                        borderRadius: '0.25rem',
                        fontSize: '0.7rem',
                        fontWeight: '600'
                      }}>
                        {ex.guarantee}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{ex.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contract Pitfalls */}
          {insurance_comparison.contract_pitfalls && (
            <div style={{
              padding: '1rem',
              background: 'rgba(239, 68, 68, 0.05)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '0.5rem'
            }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--accent-red)', marginBottom: '0.75rem' }}>
                ⚠️ {insurance_comparison.contract_pitfalls.title}
              </div>
              {insurance_comparison.contract_pitfalls.items.map((item, i) => (
                <div key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', paddingLeft: '1rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>•</span>
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* International Trade Comparison */}
      {intl_trade_comparison && (
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>{intl_trade_comparison.title}</h3>

          {/* OEA Certification */}
          <div style={{
            padding: '1.25rem',
            background: 'rgba(0, 255, 136, 0.05)',
            border: '1px solid rgba(0, 255, 136, 0.3)',
            borderRadius: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{ fontWeight: '700', marginBottom: '0.5rem', color: 'var(--accent-green)' }}>
              🏆 {intl_trade_comparison.oea_certified.title}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              {intl_trade_comparison.oea_certified.description}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-green)', marginBottom: '0.5rem' }}>Сертифицированы</div>
                {intl_trade_comparison.oea_certified.certified.map((name, i) => (
                  <div key={i} style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>✓ {name}</div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-red)', marginBottom: '0.5rem' }}>Не сертифицированы</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{intl_trade_comparison.oea_certified.not_certified}</div>
              </div>
            </div>
          </div>

          {/* ВЭД Specialists */}
          <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '1rem' }}>ВЭД Специалисты</div>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {intl_trade_comparison.specialists.map((spec, i) => (
              <div key={i} style={{
                padding: '1.25rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '0.75rem',
                borderLeft: `4px solid ${i === 0 ? 'var(--accent-cyan)' : i === 1 ? 'var(--accent-green)' : 'var(--accent-purple)'}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '1rem' }}>{spec.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>{spec.focus}</div>
                  </div>
                  <div style={{
                    padding: '0.35rem 0.75rem',
                    background: 'var(--accent-green)',
                    color: '#000',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    fontSize: '0.8rem'
                  }}>
                    {spec.pricing}
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  {spec.services.map((service, j) => (
                    <span key={j} style={{
                      padding: '0.25rem 0.5rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '0.25rem',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)'
                    }}>
                      {service}
                    </span>
                  ))}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Глубина экспертизы: <span style={{ color: 'var(--accent-purple)', fontWeight: '600' }}>{spec.trade_depth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Summary */}
      <div style={{
        padding: '1.5rem',
        background: 'rgba(112, 0, 255, 0.05)',
        borderLeft: '3px solid var(--accent-purple)',
        borderRadius: '8px'
      }}>
        <p style={{ margin: 0, lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: summary.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
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

// Market Entry Strategy Component
const MarketEntryStrategy = ({ chapter }) => {
  const { positioning, pricing_tiers, differentiators, go_to_market, financials, tech_stack, moats, conclusion } = chapter;

  return (
    <div>
      {/* Key Metrics */}
      <div className="metrics-grid" style={{ marginBottom: '2rem' }}>
        <MetricCard label="Target Market" value="€2-8M" subtext="S.L. Revenue" />
        <MetricCard label="Pricing Range" value="€400-950" subtext="Per Month" />
        <MetricCard label="Year 3 ARR" value="€1.8M" subtext="250 Clients" />
      </div>

      {/* Target Persona */}
      <h3 style={{ marginBottom: '1rem' }}>Целевой Клиент</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '0.75rem',
        marginBottom: '2rem'
      }}>
        {Object.entries(positioning.target_persona).map(([key, value], i) => (
          <div key={i} style={{
            padding: '0.75rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '0.5rem',
            fontSize: '0.85rem'
          }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              {key.replace(/_/g, ' ')}
            </div>
            <div style={{ color: 'var(--text-primary)' }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Pricing Tiers */}
      <h3 style={{ marginBottom: '1rem' }}>Ценовые Tier'ы</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        {pricing_tiers.map((tier, i) => (
          <div key={i} style={{
            padding: '1.5rem',
            background: i === 1 ? 'rgba(0, 242, 255, 0.05)' : 'var(--bg-card)',
            border: i === 1 ? '2px solid var(--accent-cyan)' : '1px solid var(--border-color)',
            borderRadius: '0.75rem'
          }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{tier.target}</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>{tier.name}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--accent-green)', marginBottom: '1rem' }}>
              {tier.price}
            </div>
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
              {tier.includes.map((item, j) => (
                <div key={j} style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '0.5rem',
                  paddingLeft: '1rem',
                  position: 'relative'
                }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Differentiators */}
      <h3 style={{ marginBottom: '1rem' }}>Ключевые Дифференциаторы</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        {differentiators.map((diff, i) => (
          <div key={i} style={{
            padding: '1rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '0.5rem',
            borderTop: '3px solid var(--accent-purple)'
          }}>
            <div style={{ fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{diff.title}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{diff.description}</div>
          </div>
        ))}
      </div>

      {/* Go-to-Market */}
      <h3 style={{ marginBottom: '1rem' }}>Go-to-Market Strategy</h3>
      <div style={{ marginBottom: '2.5rem' }}>
        {go_to_market.map((phase, i) => (
          <div key={i} style={{
            padding: '1.25rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '0.75rem',
            marginBottom: '1rem',
            borderLeft: `4px solid ${i === 0 ? 'var(--accent-cyan)' : i === 1 ? 'var(--accent-purple)' : 'var(--accent-green)'}`
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ fontWeight: '700' }}>{phase.phase}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{phase.duration}</div>
            </div>
            <div style={{
              padding: '0.5rem 0.75rem',
              background: 'rgba(0, 255, 136, 0.1)',
              borderRadius: '0.25rem',
              marginBottom: '1rem',
              fontSize: '0.85rem',
              fontWeight: '600',
              color: 'var(--accent-green)'
            }}>
              🎯 {phase.goal}
            </div>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              {phase.actions.map((action, j) => (
                <div key={j} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                  • {action}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Financial Projections */}
      <h3 style={{ marginBottom: '1rem' }}>{financials.title}</h3>
      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table className="competitor-table" style={{ minWidth: '600px' }}>
          <thead>
            <tr>
              <th>Год</th>
              <th>Клиенты</th>
              <th>MRR</th>
              <th>ARR</th>
              <th>Команда</th>
              <th>Margin</th>
              <th>EBITDA</th>
            </tr>
          </thead>
          <tbody>
            {financials.years.map((year, i) => (
              <tr key={i}>
                <td style={{ fontWeight: '600' }}>{year.year}</td>
                <td>{year.clients}</td>
                <td style={{ fontFamily: 'monospace' }}>{year.mrr}</td>
                <td style={{ fontFamily: 'monospace', color: 'var(--accent-green)' }}>{year.arr}</td>
                <td>{year.team}</td>
                <td>{year.margin}</td>
                <td style={{ color: year.ebitda.includes('-') ? 'var(--accent-red)' : 'var(--accent-green)' }}>{year.ebitda}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{
          padding: '1rem',
          background: 'rgba(0, 242, 255, 0.05)',
          borderRadius: '0.5rem',
          marginBottom: '1rem'
        }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Capital Required</div>
          <div style={{ fontWeight: '700', color: 'var(--accent-cyan)' }}>{financials.capital_required}</div>
        </div>
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          {financials.funding_options.map((option, i) => (
            <div key={i} style={{ fontSize: '0.85rem', display: 'flex', gap: '0.5rem' }}>
              <span style={{ fontWeight: '600', minWidth: '100px' }}>{option.type}:</span>
              <span style={{ color: option.type === 'Angel' ? 'var(--accent-green)' : 'var(--text-secondary)' }}>
                {option.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <h3 style={{ marginBottom: '1rem' }}>{tech_stack.title}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
        {tech_stack.core.map((item, i) => (
          <div key={i} style={{
            padding: '0.75rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '0.5rem'
          }}>
            <div style={{ fontWeight: '600', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{item.name}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{item.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.75rem' }}>Build vs Buy</div>
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          {tech_stack.build_vs_buy.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.5rem',
              background: item.decision === 'BUILD' ? 'rgba(112, 0, 255, 0.1)' : 'rgba(255, 255, 255, 0.02)',
              borderRadius: '0.25rem',
              fontSize: '0.8rem'
            }}>
              <span>{item.item}</span>
              <span style={{
                padding: '0.2rem 0.5rem',
                background: item.decision === 'BUILD' ? 'var(--accent-purple)' : 'var(--accent-cyan)',
                color: '#000',
                borderRadius: '0.25rem',
                fontWeight: '600',
                fontSize: '0.7rem'
              }}>
                {item.decision}
              </span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          💰 {tech_stack.investment}
        </div>
      </div>

      {/* Competitive Moats */}
      <h3 style={{ marginBottom: '1rem' }}>{moats.title}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {[
          { title: 'Short-term (12-24 мес)', items: moats.short_term, color: 'var(--accent-cyan)' },
          { title: 'Medium-term (24-48 мес)', items: moats.medium_term, color: 'var(--accent-purple)' },
          { title: 'Long-term (48+ мес)', items: moats.long_term, color: 'var(--accent-green)' }
        ].map((moat, i) => (
          <div key={i} style={{
            padding: '1rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '0.5rem',
            borderTop: `3px solid ${moat.color}`
          }}>
            <div style={{ fontWeight: '600', fontSize: '0.85rem', marginBottom: '0.75rem' }}>{moat.title}</div>
            {moat.items.map((item, j) => (
              <div key={j} style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', lineHeight: '1.4' }}>
                • {item}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Conclusion */}
      <div style={{
        padding: '1.5rem',
        background: 'rgba(112, 0, 255, 0.05)',
        borderLeft: '3px solid var(--accent-purple)',
        borderRadius: '8px'
      }}>
        <p style={{ margin: 0, lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: conclusion.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
      </div>
    </div>
  );
};

// --- Main Content Renderer ---

const ChapterContent = ({ chapter }) => {
  // Custom renders for specific chapters based on ID
  if (chapter.id === 'market-entry') {
    return <MarketEntryStrategy chapter={chapter} />;
  }

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
