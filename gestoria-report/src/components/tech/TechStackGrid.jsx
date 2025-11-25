import { MetricCard } from '../ui';

const TechStackGrid = ({ stack }) => {
  const categoryIcons = ['📊', '🔄', '🖥️', '💬', '🔒'];
  const categoryColors = ['var(--accent-cyan)', 'var(--accent-yellow)', 'var(--accent-purple)', 'var(--accent-green)', 'var(--accent-red)'];

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

export default TechStackGrid;
