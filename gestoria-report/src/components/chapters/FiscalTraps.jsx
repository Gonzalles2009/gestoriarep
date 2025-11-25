const RiskCard = ({ risk }) => {
  const severityColors = {
    critical: { bg: 'rgba(255, 0, 102, 0.1)', border: 'var(--accent-red)', icon: '🔴' },
    high: { bg: 'rgba(255, 170, 0, 0.1)', border: '#ffaa00', icon: '🟠' },
    medium: { bg: 'rgba(0, 242, 255, 0.1)', border: 'var(--accent-cyan)', icon: '🟡' }
  };
  const style = severityColors[risk.severity] || severityColors.medium;

  return (
    <div style={{
      padding: '1.25rem',
      background: style.bg,
      border: `1px solid ${style.border}`,
      borderRadius: '0.75rem',
      borderLeft: `4px solid ${style.border}`
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>{style.icon}</span>
          <h4 style={{ margin: 0, fontSize: '1rem' }}>{risk.title}</h4>
        </div>
        {risk.deadline && (
          <span style={{
            padding: '0.2rem 0.5rem',
            background: 'var(--accent-red)',
            color: '#000',
            borderRadius: '0.25rem',
            fontSize: '0.7rem',
            fontWeight: '600'
          }}>
            {risk.deadline}
          </span>
        )}
      </div>

      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
        {risk.description}
      </div>

      {risk.penalties && (
        <div style={{
          padding: '0.75rem',
          background: 'rgba(0,0,0,0.2)',
          borderRadius: '0.5rem',
          marginBottom: '0.75rem'
        }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>ШТРАФЫ</div>
          <div style={{ fontSize: '0.9rem', fontWeight: '600', color: style.border }}>{risk.penalties}</div>
        </div>
      )}

      {risk.action && (
        <div style={{
          padding: '0.5rem 0.75rem',
          background: 'rgba(0, 255, 136, 0.1)',
          borderRadius: '0.25rem',
          fontSize: '0.8rem'
        }}>
          <span style={{ color: 'var(--accent-green)' }}>✓ </span>
          <span style={{ color: 'var(--text-secondary)' }}>{risk.action}</span>
        </div>
      )}
    </div>
  );
};

const ThresholdTable = ({ thresholds }) => (
  <div style={{ marginTop: '2rem' }}>
    <h3 style={{ marginBottom: '1rem' }}>Критические Пороги</h3>
    <div className="data-table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Порог</th>
            <th>Обязательство</th>
            <th>Последствия</th>
          </tr>
        </thead>
        <tbody>
          {thresholds.map((t, i) => (
            <tr key={i}>
              <td style={{ fontWeight: '600', color: 'var(--accent-cyan)' }}>{t.threshold}</td>
              <td>{t.obligation}</td>
              <td style={{ color: 'var(--accent-red)' }}>{t.consequence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const VeriFactuTimeline = () => (
  <div style={{
    marginTop: '2rem',
    padding: '1.5rem',
    background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 242, 255, 0.1))',
    borderRadius: '0.75rem',
    border: '1px solid var(--accent-green)'
  }}>
    <h3 style={{ margin: '0 0 1.5rem 0' }}>VeriFactu — УЖЕ ОБЯЗАТЕЛЬНО</h3>
    <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: '1rem',
        left: '10%',
        right: '10%',
        height: '2px',
        background: 'var(--accent-green)'
      }} />
      {[
        { date: 'Янв 2025', label: 'Сертификация ПО', active: true, done: true },
        { date: 'Июль 2025', label: 'Обязательно', active: true, done: true },
        { date: 'Ноя 2025', label: 'АКТИВНО', active: true, highlight: true }
      ].map((step, i) => (
        <div key={i} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            background: step.highlight ? 'var(--accent-green)' : step.done ? 'var(--accent-green)' : 'var(--bg-card)',
            border: `2px solid ${step.highlight ? 'var(--accent-green)' : step.done ? 'var(--accent-green)' : 'var(--border-color)'}`,
            margin: '0 auto 0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.8rem'
          }}>
            {step.done && !step.highlight && '✓'}
          </div>
          <div style={{ fontSize: '0.75rem', fontWeight: '600' }}>{step.date}</div>
          <div style={{
            fontSize: '0.7rem',
            color: step.highlight ? 'var(--accent-green)' : 'var(--text-secondary)',
            fontWeight: step.highlight ? '600' : '400'
          }}>
            {step.label}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const IntrastatPricing = ({ pricing }) => (
  <div style={{ marginTop: '2rem' }}>
    <h3 style={{ marginBottom: '1rem' }}>{pricing.title}</h3>
    <div className="data-table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Объем операций</th>
            <th>Стоимость</th>
          </tr>
        </thead>
        <tbody>
          {pricing.data.map((row, i) => (
            <tr key={i}>
              <td>{row.range}</td>
              <td><strong>{row.price}</strong></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const FiscalTraps = ({ chapter }) => {
  const { risks, thresholds, pricing } = chapter;

  return (
    <div>
      {/* Risk Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '1rem' }}>
        {risks.map((risk, i) => (
          <RiskCard key={i} risk={risk} />
        ))}
      </div>

      {/* VeriFactu Timeline */}
      <VeriFactuTimeline />

      {/* Threshold Table */}
      <ThresholdTable thresholds={thresholds} />

      {/* Intrastat Pricing */}
      {pricing && <IntrastatPricing pricing={pricing} />}
    </div>
  );
};

export default FiscalTraps;
