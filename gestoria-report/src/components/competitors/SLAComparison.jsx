const SLAComparison = ({ sla_comparison }) => {
  if (!sla_comparison) return null;

  return (
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
  );
};

export default SLAComparison;
