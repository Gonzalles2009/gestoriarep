import { MetricCard } from '../ui';

const TargetPersona = ({ persona }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3 style={{ marginBottom: '1rem' }}>Целевой Клиент</h3>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
      gap: '0.75rem'
    }}>
      {Object.entries(persona).map(([key, value], i) => (
        <div key={i} style={{
          padding: '0.75rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '0.5rem',
          fontSize: '0.85rem'
        }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
            {key.replace(/_/g, ' ')}
          </div>
          <div style={{ color: 'var(--text-primary)' }}>{value}</div>
        </div>
      ))}
    </div>
  </div>
);

const PricingTiers = ({ tiers }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h3 style={{ marginBottom: '1rem' }}>Ценовые Пакеты</h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
      {tiers.map((tier, i) => (
        <div key={i} style={{
          padding: '1.5rem',
          background: i === 1 ? 'rgba(0, 242, 255, 0.05)' : 'var(--bg-card)',
          border: i === 1 ? '2px solid var(--accent-cyan)' : '1px solid var(--border-color)',
          borderRadius: '0.75rem'
        }}>
          {i === 1 && (
            <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', fontWeight: '600', marginBottom: '0.5rem' }}>
              ПОПУЛЯРНЫЙ
            </div>
          )}
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{tier.target}</div>
          <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>{tier.name}</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--accent-green)', marginBottom: '1rem' }}>
            {tier.price}
          </div>
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
            {tier.includes.map((item, j) => (
              <div key={j} style={{
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                marginBottom: '0.5rem',
                paddingLeft: '1rem',
                position: 'relative'
              }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-green)' }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Differentiators = ({ items }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h3 style={{ marginBottom: '1rem' }}>Ключевые Дифференциаторы</h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem' }}>
      {items.map((diff, i) => (
        <div key={i} style={{
          padding: '1rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '0.5rem',
          borderTop: '3px solid var(--accent-purple)'
        }}>
          <div style={{ fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{diff.title}</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{diff.description}</div>
        </div>
      ))}
    </div>
  </div>
);

const ExecutionRoadmap = ({ phases }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h3 style={{ marginBottom: '1rem' }}>План Запуска</h3>
    <div style={{ display: 'grid', gap: '1rem' }}>
      {phases.map((phase, i) => (
        <div key={i} style={{
          padding: '1.25rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '0.75rem',
          borderLeft: `4px solid ${
            i === 0 ? 'var(--accent-cyan)' :
            i === 1 ? 'var(--accent-purple)' :
            i === 2 ? 'var(--accent-green)' :
            '#ffaa00'
          }`
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <div style={{ fontWeight: '700' }}>{phase.phase}</div>
            <div style={{
              padding: '0.25rem 0.75rem',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '1rem',
              fontSize: '0.75rem'
            }}>
              {phase.duration}
            </div>
          </div>

          {phase.goal && (
            <div style={{
              padding: '0.5rem 0.75rem',
              background: 'rgba(0, 255, 136, 0.1)',
              borderRadius: '0.25rem',
              marginBottom: '1rem',
              fontSize: '0.85rem',
              fontWeight: '600',
              color: 'var(--accent-green)'
            }}>
              {phase.goal}
            </div>
          )}

          <div style={{ display: 'grid', gap: '0.5rem' }}>
            {phase.steps.map((step, j) => (
              <div key={j} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                • {step}
              </div>
            ))}
          </div>

          {phase.metrics && (
            <div style={{
              marginTop: '1rem',
              paddingTop: '0.75rem',
              borderTop: '1px solid var(--border-color)',
              fontSize: '0.75rem',
              color: 'var(--accent-cyan)'
            }}>
              Метрика: {phase.metrics}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const TechStack = ({ stack }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h3 style={{ marginBottom: '1rem' }}>{stack.title}</h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
      {stack.core.map((item, i) => (
        <div key={i} style={{
          padding: '0.75rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '0.5rem'
        }}>
          <div style={{ fontWeight: '600', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{item.name}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{item.desc}</div>
        </div>
      ))}
    </div>

    <div style={{ marginBottom: '1rem' }}>
      <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.75rem' }}>Build vs Buy</div>
      <div style={{ display: 'grid', gap: '0.5rem' }}>
        {stack.build_vs_buy.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.5rem',
            background: item.decision === 'BUILD' ? 'rgba(112, 0, 255, 0.1)' : 'rgba(255, 255, 255, 0.02)',
            borderRadius: '0.25rem',
            fontSize: '0.8rem'
          }}>
            <span>{item.item}</span>
            <span style={{
              padding: '0.2rem 0.5rem',
              background: item.decision === 'BUILD' ? 'var(--accent-purple)' : 'var(--accent-cyan)',
              color: '#000',
              borderRadius: '0.25rem',
              fontWeight: '600',
              fontSize: '0.7rem'
            }}>
              {item.decision}
            </span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
        {stack.investment}
      </div>
    </div>
  </div>
);

const CompetitiveMoats = ({ moats }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3 style={{ marginBottom: '1rem' }}>{moats.title}</h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1rem' }}>
      {[
        { title: 'Short-term (12-24 мес)', items: moats.short_term, color: 'var(--accent-cyan)' },
        { title: 'Medium-term (24-48 мес)', items: moats.medium_term, color: 'var(--accent-purple)' },
        { title: 'Long-term (48+ мес)', items: moats.long_term, color: 'var(--accent-green)' }
      ].map((moat, i) => (
        <div key={i} style={{
          padding: '1rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '0.5rem',
          borderTop: `3px solid ${moat.color}`
        }}>
          <div style={{ fontWeight: '600', fontSize: '0.85rem', marginBottom: '0.75rem' }}>{moat.title}</div>
          {moat.items.map((item, j) => (
            <div key={j} style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', lineHeight: '1.4' }}>
              • {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const StrategyLaunch = ({ chapter }) => {
  const { positioning, pricing_tiers, differentiators, execution_roadmap, tech_stack, moats, conclusion } = chapter;

  return (
    <div>
      {/* Key Metrics */}
      <div className="metrics-grid" style={{ marginBottom: '2rem' }}>
        <MetricCard label="Target Market" value="€2-8M" subtext="S.L. оборот" />
        <MetricCard label="Pricing" value="€400-950" subtext="в месяц" />
        <MetricCard label="Цель 2026" value="50" subtext="клиентов" />
        <MetricCard label="Break-even" value="Q2 2027" subtext="прогноз" />
      </div>

      {/* Target Persona */}
      <TargetPersona persona={positioning.target_persona} />

      {/* Pricing Tiers */}
      <PricingTiers tiers={pricing_tiers} />

      {/* Differentiators */}
      <Differentiators items={differentiators} />

      {/* Execution Roadmap */}
      <ExecutionRoadmap phases={execution_roadmap} />

      {/* Tech Stack */}
      <TechStack stack={tech_stack} />

      {/* Competitive Moats */}
      <CompetitiveMoats moats={moats} />

      {/* Conclusion */}
      <div style={{
        padding: '1.5rem',
        background: 'rgba(112, 0, 255, 0.05)',
        borderLeft: '3px solid var(--accent-purple)',
        borderRadius: '8px'
      }}>
        <p style={{ margin: 0, lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: conclusion.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
      </div>
    </div>
  );
};

export default StrategyLaunch;
