import { segmentColors } from '../../data/constants';

const CompetitorMatrix = ({ matrix, selectedSegment, selectedCompany, onSelectCompany }) => {
  const filteredMatrix = selectedSegment === 'all'
    ? matrix
    : matrix.filter(c => c.segment === selectedSegment);

  return (
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
  );
};

export default CompetitorMatrix;
