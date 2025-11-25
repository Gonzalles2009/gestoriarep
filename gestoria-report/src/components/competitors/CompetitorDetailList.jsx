import { segmentColors } from '../../data/constants';

const CompetitorDetailList = ({ companies, segmentName }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h4 style={{ marginBottom: '1rem' }}>Детальные профили: {segmentName}</h4>
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      {companies.map((comp, i) => (
        <div key={i} style={{
          padding: '1.5rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '0.75rem',
          borderLeft: `4px solid ${segmentColors[comp.segment]}`
        }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div>
              <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{comp.name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {comp.location} • {comp.year} • {comp.team}
              </div>
            </div>
            <div style={{
              padding: '0.5rem 0.75rem',
              background: 'var(--accent-green)',
              color: '#000',
              borderRadius: '0.5rem',
              fontWeight: '700',
              fontSize: '0.9rem'
            }}>
              {comp.price}
            </div>
          </div>

          {/* SLA & Insurance Row */}
          {(comp.sla || comp.insurance) && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
              {comp.sla && (
                <div style={{
                  padding: '0.5rem',
                  background: 'rgba(0, 242, 255, 0.05)',
                  borderRadius: '0.25rem',
                  fontSize: '0.75rem'
                }}>
                  <div style={{ color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>SLA</div>
                  <div style={{ fontWeight: '600', color: comp.sla === '1ч' || comp.sla === '<24ч' || comp.sla === '24ч' ? 'var(--accent-green)' : 'var(--text-primary)' }}>
                    {comp.sla}
                  </div>
                  {comp.sla_type && <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{comp.sla_type}</div>}
                </div>
              )}
              {comp.guarantee && (
                <div style={{
                  padding: '0.5rem',
                  background: 'rgba(112, 0, 255, 0.05)',
                  borderRadius: '0.25rem',
                  fontSize: '0.75rem'
                }}>
                  <div style={{ color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Гарантия</div>
                  <div style={{ fontWeight: '600', color: comp.guarantee.includes('Zero Multas') || comp.guarantee.includes('Превентивный') ? 'var(--accent-purple)' : 'var(--text-primary)' }}>
                    {comp.guarantee}
                  </div>
                </div>
              )}
              {comp.insurance && (
                <div style={{
                  padding: '0.5rem',
                  background: 'rgba(0, 255, 136, 0.05)',
                  borderRadius: '0.25rem',
                  fontSize: '0.75rem'
                }}>
                  <div style={{ color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Страховка</div>
                  <div style={{ fontWeight: '600', color: comp.insurance.includes('€') ? 'var(--accent-green)' : 'var(--text-primary)' }}>
                    {comp.insurance}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Positioning */}
          {comp.positioning && (
            <div style={{
              padding: '0.75rem 1rem',
              background: 'rgba(0, 242, 255, 0.05)',
              borderRadius: '0.5rem',
              marginBottom: '1rem',
              fontSize: '0.85rem',
              fontStyle: 'italic',
              color: 'var(--text-primary)',
              lineHeight: '1.5'
            }}>
              {comp.positioning}
            </div>
          )}

          {/* Services */}
          {comp.services && (
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Услуги</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {comp.services.map((service, j) => (
                  <span key={j} style={{
                    padding: '0.25rem 0.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '0.25rem',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Pricing Tiers */}
          {comp.pricing_tiers && (
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Тарифы</div>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                {comp.pricing_tiers.map((tier, j) => (
                  <div key={j} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '0.25rem',
                    fontSize: '0.8rem'
                  }}>
                    <span style={{ color: 'var(--text-secondary)' }}>
                      {tier.name} {tier.desc && <span style={{ opacity: 0.7 }}>— {tier.desc}</span>}
                    </span>
                    <span style={{ fontWeight: '600', color: 'var(--accent-green)', fontFamily: 'monospace' }}>{tier.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Strengths & Weaknesses */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
            <div>
              <div style={{ color: 'var(--accent-green)', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.8rem' }}>✓ Сильные стороны</div>
              <div style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{comp.strengths}</div>
            </div>
            <div>
              <div style={{ color: 'var(--accent-red)', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.8rem' }}>✗ Слабые стороны</div>
              <div style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{comp.weaknesses}</div>
            </div>
          </div>

          {/* Key Insight */}
          {comp.key_insight && (
            <div style={{
              padding: '0.75rem 1rem',
              background: 'rgba(112, 0, 255, 0.1)',
              borderRadius: '0.5rem',
              borderLeft: '3px solid var(--accent-purple)',
              fontSize: '0.85rem',
              lineHeight: '1.5'
            }}>
              <span style={{ fontWeight: '600', color: 'var(--accent-purple)' }}>💡 Ключевой инсайт: </span>
              <span style={{ color: 'var(--text-secondary)' }}>{comp.key_insight}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default CompetitorDetailList;
