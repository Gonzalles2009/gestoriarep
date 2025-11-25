const MarketInsights = ({ insights }) => (
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
);

export default MarketInsights;
