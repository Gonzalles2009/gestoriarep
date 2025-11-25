import { segmentColors } from '../../data/constants';

// Mobile card component
const CompetitorCard = ({ row, isSelected, onSelect }) => (
  <div
    onClick={() => onSelect(isSelected ? null : row.name)}
    style={{
      padding: '1rem',
      background: isSelected ? 'rgba(0, 242, 255, 0.08)' : 'var(--bg-card)',
      border: `1px solid ${isSelected ? 'var(--accent-cyan)' : 'var(--border-color)'}`,
      borderLeft: `4px solid ${segmentColors[row.segment]}`,
      borderRadius: '0.75rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }}
  >
    {/* Header: Company + Segment */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: `${segmentColors[row.segment]}20`,
          border: `2px solid ${segmentColors[row.segment]}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.85rem',
          fontWeight: 'bold',
          color: segmentColors[row.segment]
        }}>
          {row.name.charAt(0)}
        </div>
        <div>
          <strong style={{ display: 'block', color: 'var(--accent-cyan)', fontSize: '1rem' }}>{row.name}</strong>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{row.year}</span>
        </div>
      </div>
      <span style={{
        fontSize: '0.7rem',
        padding: '0.2rem 0.5rem',
        background: `${segmentColors[row.segment]}20`,
        color: segmentColors[row.segment],
        borderRadius: '0.25rem',
        whiteSpace: 'nowrap'
      }}>
        {row.segment}
      </span>
    </div>

    {/* Price - prominent */}
    <div style={{
      fontSize: '1.25rem',
      fontWeight: '700',
      color: 'var(--accent-green)',
      fontFamily: 'monospace',
      marginBottom: '0.75rem'
    }}>
      {row.price}
    </div>

    {/* Info grid */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.75rem' }}>
      <div>
        <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Локация</div>
        <div style={{ fontSize: '0.8rem' }}>{row.location}</div>
      </div>
      <div>
        <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Команда</div>
        <div style={{ fontSize: '0.8rem' }}>{row.team}</div>
      </div>
    </div>

    {/* Tech */}
    <div style={{ marginBottom: '0.5rem' }}>
      <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Технологии</div>
      <div style={{ fontSize: '0.75rem', color: 'var(--text-primary)' }}>{row.tech}</div>
    </div>

    {/* Ideal for */}
    <div style={{
      fontSize: '0.75rem',
      color: 'var(--text-secondary)',
      paddingTop: '0.5rem',
      borderTop: '1px solid var(--border-color)'
    }}>
      {row.ideal_for}
    </div>
  </div>
);

const CompetitorMatrix = ({ matrix, selectedSegment, selectedCompany, onSelectCompany }) => {
  const filteredMatrix = selectedSegment === 'all'
    ? matrix
    : matrix.filter(c => c.segment === selectedSegment);

  return (
    <div style={{ marginBottom: '2.5rem' }}>
      {/* Mobile: Card View */}
      <div className="competitor-cards-mobile" style={{ display: 'grid', gap: '1rem' }}>
        {filteredMatrix.map((row, i) => (
          <CompetitorCard
            key={i}
            row={row}
            isSelected={selectedCompany === row.name}
            onSelect={onSelectCompany}
          />
        ))}
      </div>

      {/* Desktop: Table View */}
      <div className="competitor-table-desktop" style={{ overflowX: 'auto' }}>
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
              <tr key={i} style={{ background: selectedCompany === row.name ? 'rgba(0, 242, 255, 0.05)' : 'transparent' }}>
                <td>
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
                    onClick={() => onSelectCompany(selectedCompany === row.name ? null : row.name)}
                  >
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
                      <strong style={{ display: 'block', color: 'var(--accent-cyan)' }}>{row.name}</strong>
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
    </div>
  );
};

export default CompetitorMatrix;
