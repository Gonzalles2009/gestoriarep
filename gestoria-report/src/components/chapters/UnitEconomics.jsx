import { MetricCard, PricingTable } from '../ui';

const SalaryTable = ({ salaries, teamCost }) => (
  <div style={{ marginTop: '2rem' }}>
    <h3 style={{ marginBottom: '1rem' }}>Зарплатные Вилки (OPEX)</h3>

    {/* Salary Grid */}
    <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
      <table className="data-table" style={{ minWidth: '800px' }}>
        <thead>
          <tr>
            <th>Роль</th>
            <th>Зарплата/год</th>
            <th>Опыт</th>
            <th>Ключевые задачи</th>
            <th style={{ textAlign: 'center' }}>2026</th>
            <th style={{ textAlign: 'center' }}>2027</th>
            <th style={{ textAlign: 'center' }}>2028</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map((s, i) => (
            <tr key={i}>
              <td style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>{s.role}</td>
              <td style={{ color: 'var(--accent-green)', fontFamily: 'monospace' }}>{s.salary}</td>
              <td style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{s.experience}</td>
              <td style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{s.tasks}</td>
              <td style={{ textAlign: 'center' }}>
                <span style={{
                  display: 'inline-block',
                  minWidth: '1.5rem',
                  padding: '0.25rem 0.5rem',
                  background: s.needed.year1 > 0 ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.05)',
                  color: s.needed.year1 > 0 ? '#000' : 'var(--text-secondary)',
                  borderRadius: '0.25rem',
                  fontWeight: '600',
                  fontSize: '0.85rem'
                }}>
                  {s.needed.year1}
                </span>
              </td>
              <td style={{ textAlign: 'center' }}>
                <span style={{
                  display: 'inline-block',
                  minWidth: '1.5rem',
                  padding: '0.25rem 0.5rem',
                  background: s.needed.year2 > 0 ? 'var(--accent-purple)' : 'rgba(255,255,255,0.05)',
                  color: s.needed.year2 > 0 ? '#000' : 'var(--text-secondary)',
                  borderRadius: '0.25rem',
                  fontWeight: '600',
                  fontSize: '0.85rem'
                }}>
                  {s.needed.year2}
                </span>
              </td>
              <td style={{ textAlign: 'center' }}>
                <span style={{
                  display: 'inline-block',
                  minWidth: '1.5rem',
                  padding: '0.25rem 0.5rem',
                  background: s.needed.year3 > 0 ? 'var(--accent-green)' : 'rgba(255,255,255,0.05)',
                  color: s.needed.year3 > 0 ? '#000' : 'var(--text-secondary)',
                  borderRadius: '0.25rem',
                  fontWeight: '600',
                  fontSize: '0.85rem'
                }}>
                  {s.needed.year3}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Team Cost Summary */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
      gap: '1rem',
      marginTop: '1.5rem'
    }}>
      {teamCost.map((tc, i) => (
        <div key={i} style={{
          padding: '1rem',
          background: i === 0 ? 'rgba(0, 242, 255, 0.05)' : i === 1 ? 'rgba(112, 0, 255, 0.05)' : 'rgba(0, 255, 136, 0.05)',
          border: `1px solid ${i === 0 ? 'var(--accent-cyan)' : i === 1 ? 'var(--accent-purple)' : 'var(--accent-green)'}`,
          borderRadius: '0.5rem'
        }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
            {tc.year}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>{tc.headcount}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>чел.</span>
          </div>
          <div style={{
            fontSize: '1rem',
            fontWeight: '600',
            color: i === 0 ? 'var(--accent-cyan)' : i === 1 ? 'var(--accent-purple)' : 'var(--accent-green)',
            marginBottom: '0.25rem'
          }}>
            {tc.totalCost}
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
            ~{tc.avgPerPerson} / чел.
          </div>
        </div>
      ))}
    </div>

    {/* Notes */}
    <div style={{
      marginTop: '1rem',
      padding: '0.75rem',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '0.5rem',
      fontSize: '0.75rem',
      color: 'var(--text-secondary)'
    }}>
      <strong>Примечания:</strong> Зарплаты gross (до налогов). Реальная стоимость +30-35% (Seguridad Social).
      Источник: Talent.com, Michael Page España 2025.
    </div>
  </div>
);

const FinancialProjections = ({ projections }) => (
  <div style={{ marginTop: '2rem' }}>
    <h3 style={{ marginBottom: '1rem' }}>Финансовые Прогнозы</h3>
    <div style={{ overflowX: 'auto' }}>
      <table className="data-table" style={{ minWidth: '700px' }}>
        <thead>
          <tr>
            <th>Год</th>
            <th>Клиенты</th>
            <th>MRR</th>
            <th>ARR</th>
            <th>Команда</th>
            <th>Margin</th>
            <th>EBITDA</th>
          </tr>
        </thead>
        <tbody>
          {projections.map((year, i) => (
            <tr key={i}>
              <td style={{ fontWeight: '600' }}>{year.year}</td>
              <td>{year.clients}</td>
              <td style={{ fontFamily: 'monospace' }}>{year.mrr}</td>
              <td style={{ fontFamily: 'monospace', color: 'var(--accent-green)' }}>{year.arr}</td>
              <td>{year.team}</td>
              <td>{year.margin}</td>
              <td style={{
                color: year.ebitda.includes('-') ? 'var(--accent-red)' : 'var(--accent-green)',
                fontWeight: '600'
              }}>
                {year.ebitda}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const RiskMatrix = ({ risks }) => {
  const impactColors = {
    critical: 'var(--accent-red)',
    high: '#ffaa00',
    medium: 'var(--accent-cyan)'
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3 style={{ marginBottom: '1rem' }}>Матрица Рисков</h3>
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        {risks.map((risk, i) => (
          <div key={i} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            padding: '1rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '0.5rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{risk.risk}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  Вероятность: {risk.probability}
                </div>
              </div>
              <div style={{
                padding: '0.25rem 0.5rem',
                background: impactColors[risk.impact],
                color: '#000',
                borderRadius: '0.25rem',
                fontSize: '0.7rem',
                fontWeight: '600',
                textAlign: 'center',
                flexShrink: 0
              }}>
                {risk.impact.toUpperCase()}
              </div>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--accent-green)' }}>Митигация: </span>
              {risk.mitigation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LaunchRoadmap = ({ phases }) => (
  <div style={{ marginTop: '2rem' }}>
    <h3 style={{ marginBottom: '1rem' }}>Дорожная Карта Запуска</h3>
    <div style={{ display: 'grid', gap: '1rem' }}>
      {phases.map((phase, i) => (
        <div key={i} style={{
          padding: '1.25rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '0.75rem',
          borderLeft: `4px solid ${i === 0 ? 'var(--accent-cyan)' : i === 1 ? 'var(--accent-purple)' : 'var(--accent-green)'}`
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ fontWeight: '700' }}>{phase.name}</div>
            <div style={{
              padding: '0.25rem 0.75rem',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '1rem',
              fontSize: '0.75rem'
            }}>
              {phase.duration}
            </div>
          </div>
          <div style={{
            padding: '0.5rem 0.75rem',
            background: 'rgba(0, 255, 136, 0.1)',
            borderRadius: '0.25rem',
            marginBottom: '1rem',
            fontSize: '0.85rem',
            color: 'var(--accent-green)'
          }}>
            {phase.goal}
          </div>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            {phase.tasks.map((task, j) => (
              <div key={j} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                • {task}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const FundingOptions = ({ options }) => (
  <div style={{ marginTop: '2rem' }}>
    <h3 style={{ marginBottom: '1rem' }}>Варианты Финансирования</h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1rem' }}>
      {options.map((opt, i) => (
        <div key={i} style={{
          padding: '1.25rem',
          background: opt.recommended ? 'rgba(0, 255, 136, 0.05)' : 'var(--bg-card)',
          border: opt.recommended ? '2px solid var(--accent-green)' : '1px solid var(--border-color)',
          borderRadius: '0.75rem'
        }}>
          {opt.recommended && (
            <div style={{
              fontSize: '0.7rem',
              color: 'var(--accent-green)',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              РЕКОМЕНДОВАНО
            </div>
          )}
          <div style={{ fontWeight: '700', marginBottom: '0.5rem' }}>{opt.type}</div>
          <div style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>{opt.amount}</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{opt.description}</div>
        </div>
      ))}
    </div>
  </div>
);

const UnitEconomics = ({ chapter }) => {
  const { metrics, projections, risks, roadmap, funding, salaries, teamCost } = chapter;

  return (
    <div>
      {/* Key Metrics */}
      <div className="metrics-grid">
        {metrics.map((m, i) => (
          <MetricCard key={i} label={m.label} value={m.value} subtext={m.subtext} />
        ))}
      </div>

      {/* Pricing Table */}
      <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Коммерческие Пакеты</h3>
      <PricingTable />

      {/* Financial Projections */}
      <FinancialProjections projections={projections} />

      {/* Salaries - New improved version */}
      <SalaryTable salaries={salaries} teamCost={teamCost} />

      {/* Launch Roadmap */}
      <LaunchRoadmap phases={roadmap} />

      {/* Funding Options */}
      <FundingOptions options={funding} />

      {/* Risk Matrix */}
      <RiskMatrix risks={risks} />
    </div>
  );
};

export default UnitEconomics;
