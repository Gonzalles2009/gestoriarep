import { MetricCard, BarChart } from '../ui';

const MarketSegmentCard = ({ segment }) => (
  <div style={{
    padding: '1.25rem',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '0.75rem',
    borderLeft: `4px solid ${segment.color}`
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
      <div>
        <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>{segment.name}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{segment.subtitle}</div>
      </div>
      <div style={{
        padding: '0.25rem 0.5rem',
        background: segment.color,
        color: '#000',
        borderRadius: '0.25rem',
        fontSize: '0.7rem',
        fontWeight: '600'
      }}>
        {segment.revenue}
      </div>
    </div>
    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0 0 0.75rem 0', lineHeight: '1.5' }}>
      {segment.description}
    </p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {segment.players.map((player, i) => (
        <span key={i} style={{
          padding: '0.2rem 0.5rem',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '0.25rem',
          fontSize: '0.7rem'
        }}>
          {player}
        </span>
      ))}
    </div>
    <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Цена для S.L. €3-20M:</div>
      <div style={{ fontSize: '0.85rem', fontWeight: '600', color: segment.color }}>{segment.priceRange}</div>
    </div>
  </div>
);

const GapAnalysis = ({ gaps }) => (
  <div style={{
    padding: '1.5rem',
    background: 'rgba(0, 255, 136, 0.05)',
    border: '1px solid rgba(0, 255, 136, 0.2)',
    borderRadius: '0.75rem',
    marginTop: '2rem'
  }}>
    <h3 style={{ margin: '0 0 1rem 0', color: 'var(--accent-green)' }}>Gap-Анализ: Рыночные Возможности</h3>
    <div style={{ display: 'grid', gap: '1rem' }}>
      {gaps.map((gap, i) => (
        <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <div style={{
            minWidth: '2rem',
            height: '2rem',
            background: 'var(--accent-green)',
            color: '#000',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '700',
            fontSize: '0.85rem'
          }}>
            {i + 1}
          </div>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{gap.title}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{gap.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const HiringComparison = ({ data }) => (
  <div style={{ marginTop: '2rem' }}>
    <h3 style={{ marginBottom: '1rem' }}>{data.title}</h3>
    <div style={{ overflowX: 'auto' }}>
      <table className="data-table" style={{ minWidth: '500px' }}>
        <thead>
          <tr>
            <th>Параметр</th>
            <th style={{ textAlign: 'center' }}>Свой бухгалтер</th>
            <th style={{ textAlign: 'center', background: 'rgba(112, 0, 255, 0.1)' }}>Gestoría Ultra</th>
          </tr>
        </thead>
        <tbody>
          {data.comparison.map((row, i) => (
            <tr key={i}>
              <td style={{ fontWeight: '600' }}>{row.item}</td>
              <td style={{ textAlign: 'center' }}>{row.inhouse}</td>
              <td style={{
                textAlign: 'center',
                background: 'rgba(112, 0, 255, 0.05)',
                color: row.outsource !== '—' ? 'var(--accent-green)' : 'var(--text-secondary)',
                fontWeight: row.outsource !== '—' ? '600' : '400'
              }}>
                {row.outsource}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div style={{
      marginTop: '1rem',
      padding: '1rem',
      background: 'linear-gradient(135deg, rgba(112, 0, 255, 0.1), rgba(0, 255, 136, 0.1))',
      border: '2px solid var(--accent-green)',
      borderRadius: '0.5rem',
      fontSize: '0.9rem',
      fontWeight: '600',
      color: 'var(--accent-green)',
      textAlign: 'center'
    }}>
      {data.verdict}
    </div>
  </div>
);

const ClientPersona = ({ personas }) => (
  <div style={{ marginTop: '2rem' }}>
    <h3 style={{ marginBottom: '1rem' }}>Психотипы Целевых Клиентов</h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
      {personas.map((persona, i) => (
        <div key={i} style={{
          padding: '1.25rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '0.75rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>{persona.icon}</span>
            <div>
              <div style={{ fontWeight: '700' }}>{persona.type}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{persona.size}</div>
            </div>
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            {persona.needs}
          </div>
          <div style={{
            padding: '0.5rem',
            background: 'rgba(0, 255, 136, 0.1)',
            borderRadius: '0.25rem',
            fontSize: '0.8rem'
          }}>
            <span style={{ color: 'var(--text-secondary)' }}>Готовы платить: </span>
            <span style={{ color: 'var(--accent-green)', fontWeight: '600' }}>{persona.willPay}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MarketArchitecture = ({ chapter }) => {
  const { metrics, segments, revenues, gaps, personas, hiring_comparison } = chapter;

  return (
    <div>
      {/* Key Metrics */}
      <div className="metrics-grid">
        {metrics.map((m, i) => (
          <MetricCard key={i} label={m.label} value={m.value} trend={m.trend} subtext={m.subtext} />
        ))}
      </div>

      {/* Market Segments */}
      <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Сегментация Рынка</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1rem' }}>
        {segments.map((segment, i) => (
          <MarketSegmentCard key={i} segment={segment} />
        ))}
      </div>

      {/* Revenue Benchmark */}
      <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>Выручка Ключевых Игроков (€M, 2023)</h3>
      <BarChart data={revenues} />

      {/* Gap Analysis */}
      <GapAnalysis gaps={gaps} />

      {/* Client Personas */}
      <ClientPersona personas={personas} />

      {/* Hiring Comparison */}
      {hiring_comparison && <HiringComparison data={hiring_comparison} />}
    </div>
  );
};

export default MarketArchitecture;
