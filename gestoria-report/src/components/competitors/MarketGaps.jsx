const MarketGaps = ({ gaps }) => (
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
);

export default MarketGaps;
