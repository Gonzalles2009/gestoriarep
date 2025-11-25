const SegmentFilter = ({ segments, selectedSegment, onSelect }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
    {segments.map((seg, i) => (
      <div
        key={i}
        onClick={() => onSelect(selectedSegment === seg.name ? 'all' : seg.name)}
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
);

export default SegmentFilter;
