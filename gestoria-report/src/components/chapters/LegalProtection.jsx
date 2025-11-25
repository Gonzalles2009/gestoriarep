const LegalReality = ({ data }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h3 style={{ marginBottom: '0.5rem' }}>{data.title}</h3>
    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>{data.subtitle}</p>

    {/* Key Distinction Cards */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
      <div style={{
        padding: '1.25rem',
        background: 'rgba(0, 255, 136, 0.05)',
        border: '1px solid var(--accent-green)',
        borderRadius: '0.75rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '1.25rem' }}>✓</span>
          <span style={{ fontWeight: '700', color: 'var(--accent-green)' }}>{data.key_distinction.sancion.label}</span>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
          {data.key_distinction.sancion.description}
        </p>
        <div style={{ marginTop: '0.75rem', padding: '0.5rem', background: 'rgba(0, 255, 136, 0.1)', borderRadius: '0.25rem', fontSize: '0.8rem', fontWeight: '600', color: 'var(--accent-green)' }}>
          Можно взыскать с гестории
        </div>
      </div>

      <div style={{
        padding: '1.25rem',
        background: 'rgba(255, 0, 102, 0.05)',
        border: '1px solid var(--accent-red)',
        borderRadius: '0.75rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '1.25rem' }}>✗</span>
          <span style={{ fontWeight: '700', color: 'var(--accent-red)' }}>{data.key_distinction.cuota.label}</span>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
          {data.key_distinction.cuota.description}
        </p>
        <div style={{ marginTop: '0.75rem', padding: '0.5rem', background: 'rgba(255, 0, 102, 0.1)', borderRadius: '0.25rem', fontSize: '0.8rem', fontWeight: '600', color: 'var(--accent-red)' }}>
          НЕ покрывается никогда
        </div>
      </div>
    </div>

    {/* Civil Liability */}
    <div style={{ padding: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', marginBottom: '1rem' }}>
      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
        <strong style={{ color: 'var(--text-primary)' }}>Responsabilidad Civil:</strong> {data.civil_liability}
      </div>
    </div>

    {/* Exemptions */}
    <div style={{ padding: '1rem', background: 'rgba(255, 170, 0, 0.05)', borderLeft: '3px solid #ffaa00', borderRadius: '0.5rem' }}>
      <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#ffaa00', marginBottom: '0.5rem' }}>Exención de responsabilidad:</div>
      {data.exemptions.map((ex, i) => (
        <div key={i} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>• {ex}</div>
      ))}
    </div>
  </div>
);

const InsuranceProviders = ({ data }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h3 style={{ marginBottom: '0.5rem' }}>{data.title}</h3>
    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>{data.subtitle}</p>

    {/* Recommended Coverage */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', padding: '1rem', background: 'rgba(0, 242, 255, 0.05)', borderRadius: '0.5rem' }}>
      <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--accent-cyan)' }}>{data.recommended_coverage}</div>
      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Рекомендуемый лимит для S.L. €1-10M</div>
    </div>

    {/* Coverage Grid */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
      <div style={{ padding: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '0.5rem' }}>
        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--accent-green)', marginBottom: '0.5rem' }}>Покрывает</div>
        {data.coverage_includes.map((item, i) => (
          <div key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>✓ {item}</div>
        ))}
      </div>
      <div style={{ padding: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '0.5rem' }}>
        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--accent-red)', marginBottom: '0.5rem' }}>НЕ покрывает</div>
        {data.coverage_excludes.map((item, i) => (
          <div key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>✗ {item}</div>
        ))}
      </div>
    </div>

    {/* Providers */}
    <div style={{ display: 'grid', gap: '1rem' }}>
      {data.providers.map((p, i) => (
        <div key={i} style={{
          padding: '1.25rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '0.75rem',
          borderLeft: `4px solid ${i === 0 ? 'var(--accent-cyan)' : i === 1 ? 'var(--accent-purple)' : 'var(--accent-green)'}`
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <div>
              <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>{p.name}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>{p.tier}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: '600', color: 'var(--accent-green)' }}>{p.coverage}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{p.premium}</div>
            </div>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{p.specialty}</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.8rem' }}>
            <div>
              {p.pros.map((pro, j) => (
                <div key={j} style={{ color: 'var(--accent-green)' }}>+ {pro}</div>
              ))}
            </div>
            <div>
              {p.cons.map((con, j) => (
                <div key={j} style={{ color: 'var(--accent-red)' }}>- {con}</div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', padding: '0.5rem', background: 'rgba(0, 242, 255, 0.05)', borderRadius: '0.25rem' }}>
            <strong>Лучше для:</strong> {p.best_for}
          </div>
        </div>
      ))}
    </div>

    {/* Warning */}
    <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(255, 170, 0, 0.1)', borderRadius: '0.5rem', fontSize: '0.85rem', color: '#ffaa00' }}>
      ⚠️ {data.policy_warning}
    </div>
  </div>
);

const CompanyGuarantees = ({ data }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h3 style={{ marginBottom: '0.5rem' }}>{data.title}</h3>
    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>{data.subtitle}</p>

    {/* Guarantee Types */}
    <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
      {data.types.map((g, i) => (
        <div key={i} style={{
          padding: '1.25rem',
          background: i === 0 ? 'rgba(0, 255, 136, 0.05)' : i === 1 ? 'rgba(255, 170, 0, 0.05)' : 'rgba(112, 0, 255, 0.05)',
          border: `1px solid ${i === 0 ? 'var(--accent-green)' : i === 1 ? '#ffaa00' : 'var(--accent-purple)'}`,
          borderRadius: '0.75rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <div style={{ fontWeight: '700' }}>{g.type}</div>
            <div style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '0.25rem' }}>{g.provider}</div>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: '1.5' }}>{g.description}</p>
          <div style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Покрытие: </span>
            <span style={{ color: 'var(--text-primary)' }}>{g.coverage}</span>
          </div>
          {g.strength && (
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-green)' }}>✓ {g.strength}</div>
          )}
          {g.warning && (
            <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', padding: '0.5rem', background: 'rgba(255, 0, 102, 0.1)', borderRadius: '0.25rem', color: 'var(--accent-red)' }}>
              ⚠️ {g.warning}
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Comparison Table */}
    <div style={{ overflowX: 'auto' }}>
      <table className="data-table" style={{ minWidth: '500px' }}>
        <thead>
          <tr>
            <th>Тип провайдера</th>
            <th>Страховка</th>
            <th>Процесс claims</th>
            <th>Гибкость</th>
          </tr>
        </thead>
        <tbody>
          {data.comparison.map((row, i) => (
            <tr key={i}>
              <td style={{ fontWeight: '600' }}>{row.provider}</td>
              <td>{row.insurance}</td>
              <td style={{ fontSize: '0.85rem' }}>{row.process}</td>
              <td style={{ color: row.flexibility === 'Высокая' ? 'var(--accent-green)' : row.flexibility === 'Низкая' ? 'var(--accent-red)' : 'var(--accent-cyan)' }}>
                {row.flexibility}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ZeroMultas = ({ data }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h3 style={{ marginBottom: '0.5rem' }}>{data.title}</h3>
    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>{data.subtitle}</p>

    {/* How it works */}
    <div style={{ padding: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{data.how_it_works}</p>
    </div>

    {/* Pricing Impact */}
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '140px', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '0.5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Стандарт</div>
        <div style={{ fontSize: '1.25rem', fontWeight: '700' }}>{data.pricing_impact.standard}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-secondary)' }}>→</div>
      <div style={{ flex: '1', minWidth: '140px', padding: '1rem', background: 'rgba(0, 255, 136, 0.05)', border: '1px solid var(--accent-green)', borderRadius: '0.5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '0.7rem', color: 'var(--accent-green)', marginBottom: '0.25rem' }}>С гарантией</div>
        <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--accent-green)' }}>{data.pricing_impact.with_guarantee}</div>
      </div>
    </div>

    {/* Tiers */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
      {data.tiers.map((tier, i) => (
        <div key={i} style={{
          padding: '1rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '0.5rem',
          borderTop: `3px solid ${i === 0 ? 'var(--accent-cyan)' : i === 1 ? 'var(--accent-purple)' : 'var(--accent-green)'}`
        }}>
          <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{tier.tier}</div>
          <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--accent-green)', marginBottom: '0.5rem' }}>{tier.price}</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>{tier.coverage}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>{tier.sla}</div>
        </div>
      ))}
    </div>

    {/* Exclusions */}
    <div style={{ padding: '1rem', background: 'rgba(255, 0, 102, 0.05)', borderLeft: '3px solid var(--accent-red)', borderRadius: '0.5rem' }}>
      <div style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--accent-red)', marginBottom: '0.5rem' }}>Исключения из покрытия:</div>
      {data.exclusions.map((ex, i) => (
        <div key={i} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>✗ {ex}</div>
      ))}
    </div>
  </div>
);

const ContractClauses = ({ data }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h3 style={{ marginBottom: '0.5rem' }}>{data.title}</h3>
    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>{data.subtitle}</p>

    <div style={{ display: 'grid', gap: '0.75rem' }}>
      {data.clauses.map((clause, i) => (
        <div key={i} style={{
          display: 'flex',
          gap: '1rem',
          padding: '1rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '0.5rem'
        }}>
          <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>{clause.icon}</div>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{clause.title}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{clause.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const RiskProcess = ({ data }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h3 style={{ marginBottom: '0.5rem' }}>{data.title}</h3>
    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>{data.subtitle}</p>

    <div style={{ display: 'grid', gap: '1rem' }}>
      {data.steps.map((step, i) => (
        <div key={i} style={{
          display: 'flex',
          gap: '1rem',
          padding: '1.25rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '0.75rem',
          borderLeft: `4px solid ${i === 0 ? 'var(--accent-cyan)' : i === 1 ? 'var(--accent-purple)' : i === 2 ? 'var(--accent-green)' : '#ffaa00'}`
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: `${i === 0 ? 'var(--accent-cyan)' : i === 1 ? 'var(--accent-purple)' : i === 2 ? 'var(--accent-green)' : '#ffaa00'}`,
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
            flexShrink: 0
          }}>
            {step.icon}
          </div>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{i + 1}. {step.step}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{step.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Recommendations = ({ data }) => (
  <div style={{
    padding: '1.5rem',
    background: 'linear-gradient(135deg, rgba(112, 0, 255, 0.1), rgba(0, 242, 255, 0.1))',
    border: '1px solid var(--border-color)',
    borderRadius: '0.75rem'
  }}>
    <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>{data.title}</h3>
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      {data.items.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: 'var(--accent-green)',
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '0.8rem',
            flexShrink: 0
          }}>
            {i + 1}
          </div>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{item.advice}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.reason}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const LegalProtection = ({ chapter }) => {
  const { legal_reality, insurance, company_guarantees, zero_multas, contract_clauses, risk_process, recommendations } = chapter;

  return (
    <div>
      <LegalReality data={legal_reality} />
      <InsuranceProviders data={insurance} />
      <CompanyGuarantees data={company_guarantees} />
      <ZeroMultas data={zero_multas} />
      <ContractClauses data={contract_clauses} />
      <RiskProcess data={risk_process} />
      <Recommendations data={recommendations} />
    </div>
  );
};

export default LegalProtection;
