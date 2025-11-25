import { segmentColors } from '../../data/constants';

const CompetitorProfile = ({ company, onClose }) => (
  <div style={{
    padding: '1.5rem',
    background: 'var(--bg-card)',
    border: '2px solid var(--accent-cyan)',
    borderRadius: '0.75rem',
    borderLeft: `4px solid ${segmentColors[company.segment]}`
  }}>
    {/* Header */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
      <div>
        <div style={{ fontWeight: '700', fontSize: '1.2rem', marginBottom: '0.25rem' }}>{company.name}</div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          {company.location} • {company.year} • {company.team}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <div style={{
          padding: '0.5rem 0.75rem',
          background: 'var(--accent-green)',
          color: '#000',
          borderRadius: '0.5rem',
          fontWeight: '700',
          fontSize: '0.9rem'
        }}>
          {company.price}
        </div>
        <button
          onClick={onClose}
          style={{
            background: 'transparent',
            border: '1px solid var(--border-color)',
            borderRadius: '0.25rem',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            padding: '0.5rem 0.75rem',
            fontSize: '0.8rem'
          }}
        >
          ✕ Закрыть
        </button>
      </div>
    </div>

    {/* SLA & Insurance Row */}
    {(company.sla || company.insurance) && (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
        {company.sla && (
          <div style={{
            padding: '0.75rem',
            background: 'rgba(0, 242, 255, 0.05)',
            borderRadius: '0.5rem',
            fontSize: '0.8rem'
          }}>
            <div style={{ color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>SLA</div>
            <div style={{ fontWeight: '600', color: company.sla === '1ч' || company.sla === '<24ч' || company.sla === '24ч' ? 'var(--accent-green)' : 'var(--text-primary)', fontSize: '1rem' }}>
              {company.sla}
            </div>
            {company.sla_type && <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{company.sla_type}</div>}
          </div>
        )}
        {company.guarantee && (
          <div style={{
            padding: '0.75rem',
            background: 'rgba(112, 0, 255, 0.05)',
            borderRadius: '0.5rem',
            fontSize: '0.8rem'
          }}>
            <div style={{ color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Гарантия</div>
            <div style={{ fontWeight: '600', color: company.guarantee.includes('Zero Multas') || company.guarantee.includes('Превентивный') ? 'var(--accent-purple)' : 'var(--text-primary)', fontSize: '1rem' }}>
              {company.guarantee}
            </div>
          </div>
        )}
        {company.insurance && (
          <div style={{
            padding: '0.75rem',
            background: 'rgba(0, 255, 136, 0.05)',
            borderRadius: '0.5rem',
            fontSize: '0.8rem'
          }}>
            <div style={{ color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Страховка</div>
            <div style={{ fontWeight: '600', color: company.insurance.includes('€') ? 'var(--accent-green)' : 'var(--text-primary)', fontSize: '1rem' }}>
              {company.insurance}
            </div>
          </div>
        )}
      </div>
    )}

    {/* Positioning */}
    {company.positioning && (
      <div style={{
        padding: '0.75rem 1rem',
        background: 'rgba(0, 242, 255, 0.05)',
        borderRadius: '0.5rem',
        marginBottom: '1rem',
        fontSize: '0.85rem',
        fontStyle: 'italic',
        lineHeight: '1.5'
      }}>
        {company.positioning}
      </div>
    )}

    {/* Services */}
    {company.services && (
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Услуги</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {company.services.map((service, j) => (
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

    {/* Strengths & Weaknesses */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
      <div>
        <div style={{ color: 'var(--accent-green)', marginBottom: '0.5rem', fontWeight: '600' }}>✓ Сильные стороны</div>
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{company.strengths}</div>
      </div>
      <div>
        <div style={{ color: 'var(--accent-red)', marginBottom: '0.5rem', fontWeight: '600' }}>✗ Слабые стороны</div>
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{company.weaknesses}</div>
      </div>
    </div>

    {/* Key Insight */}
    {company.key_insight && (
      <div style={{
        padding: '0.75rem 1rem',
        background: 'rgba(112, 0, 255, 0.1)',
        borderRadius: '0.5rem',
        borderLeft: '3px solid var(--accent-purple)',
        fontSize: '0.85rem',
        lineHeight: '1.5'
      }}>
        <span style={{ fontWeight: '600', color: 'var(--accent-purple)' }}>💡 Ключевой инсайт: </span>
        <span style={{ color: 'var(--text-secondary)' }}>{company.key_insight}</span>
      </div>
    )}
  </div>
);

export default CompetitorProfile;
