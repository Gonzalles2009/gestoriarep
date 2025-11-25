const InsuranceComparison = ({ insurance_comparison }) => {
  if (!insurance_comparison) return null;

  return (
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
  );
};

export default InsuranceComparison;
