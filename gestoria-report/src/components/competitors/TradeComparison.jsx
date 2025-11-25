const TradeComparison = ({ intl_trade_comparison }) => {
  if (!intl_trade_comparison) return null;

  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <h3 style={{ marginBottom: '1rem' }}>{intl_trade_comparison.title}</h3>

      {/* OEA Certification */}
      <div style={{
        padding: '1.25rem',
        background: 'rgba(0, 255, 136, 0.05)',
        border: '1px solid rgba(0, 255, 136, 0.3)',
        borderRadius: '0.75rem',
        marginBottom: '1.5rem'
      }}>
        <div style={{ fontWeight: '700', marginBottom: '0.5rem', color: 'var(--accent-green)' }}>
          🏆 {intl_trade_comparison.oea_certified.title}
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          {intl_trade_comparison.oea_certified.description}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-green)', marginBottom: '0.5rem' }}>Сертифицированы</div>
            {intl_trade_comparison.oea_certified.certified.map((name, i) => (
              <div key={i} style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>✓ {name}</div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-red)', marginBottom: '0.5rem' }}>Не сертифицированы</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{intl_trade_comparison.oea_certified.not_certified}</div>
          </div>
        </div>

        {/* OEA Benefits & Requirements */}
        {intl_trade_comparison.oea_certified.benefits && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(0, 255, 136, 0.2)' }}>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>Преимущества OEA</div>
              {intl_trade_comparison.oea_certified.benefits.map((benefit, i) => (
                <div key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>✓ {benefit}</div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-purple)', marginBottom: '0.5rem' }}>Требования</div>
              {intl_trade_comparison.oea_certified.requirements && intl_trade_comparison.oea_certified.requirements.map((req, i) => (
                <div key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>• {req}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Customs Brokers */}
      {intl_trade_comparison.customs_brokers && (
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.5rem' }}>
            🚢 {intl_trade_comparison.customs_brokers.title}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            {intl_trade_comparison.customs_brokers.description}
          </div>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {intl_trade_comparison.customs_brokers.brokers.map((broker, i) => (
              <div key={i} style={{
                padding: '1.25rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '0.75rem',
                borderLeft: '4px solid var(--accent-cyan)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '0.25rem' }}>{broker.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      {broker.type} • {broker.location} • {broker.established}
                    </div>
                  </div>
                  <span style={{
                    padding: '0.25rem 0.5rem',
                    background: 'var(--accent-green)',
                    color: '#000',
                    borderRadius: '0.25rem',
                    fontSize: '0.7rem',
                    fontWeight: '600'
                  }}>
                    OEA
                  </span>
                </div>

                {broker.credentials && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    {broker.credentials.map((cred, j) => (
                      <span key={j} style={{
                        padding: '0.2rem 0.5rem',
                        background: 'rgba(0, 242, 255, 0.1)',
                        borderRadius: '0.25rem',
                        fontSize: '0.7rem',
                        color: 'var(--accent-cyan)'
                      }}>
                        {cred}
                      </span>
                    ))}
                  </div>
                )}

                {broker.services && (
                  <div style={{ marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Услуги</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{broker.services.join(' • ')}</div>
                  </div>
                )}

                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', fontStyle: 'italic' }}>
                  {broker.specialization}
                </div>

                {broker.key_insight && (
                  <div style={{
                    padding: '0.5rem 0.75rem',
                    background: 'rgba(112, 0, 255, 0.1)',
                    borderRadius: '0.25rem',
                    fontSize: '0.8rem'
                  }}>
                    <span style={{ color: 'var(--accent-purple)', fontWeight: '600' }}>💡 </span>
                    <span style={{ color: 'var(--text-secondary)' }}>{broker.key_insight}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          {intl_trade_comparison.customs_brokers.integration_note && (
            <div style={{
              marginTop: '1rem',
              padding: '0.75rem 1rem',
              background: 'rgba(0, 242, 255, 0.05)',
              borderLeft: '3px solid var(--accent-cyan)',
              borderRadius: '0.5rem',
              fontSize: '0.85rem'
            }}>
              💡 {intl_trade_comparison.customs_brokers.integration_note}
            </div>
          )}
        </div>
      )}

      {/* Specialists Table */}
      {intl_trade_comparison.specialists && (
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.75rem' }}>Обзор ВЭД-специалистов</div>

          {/* Mobile: Card View */}
          <div className="trade-cards-mobile" style={{ display: 'grid', gap: '1rem' }}>
            {intl_trade_comparison.specialists.map((spec, i) => (
              <div key={i} style={{
                padding: '1rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '0.75rem',
                borderLeft: '4px solid var(--accent-cyan)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div style={{ fontWeight: '700', fontSize: '1rem' }}>{spec.name}</div>
                  <span style={{
                    padding: '0.2rem 0.5rem',
                    background: 'rgba(0, 242, 255, 0.2)',
                    color: 'var(--accent-cyan)',
                    borderRadius: '0.25rem',
                    fontSize: '0.7rem',
                    fontWeight: '600'
                  }}>
                    {spec.focus}
                  </span>
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: '1.1rem', fontWeight: '600', color: 'var(--accent-green)', marginBottom: '0.75rem' }}>
                  {spec.pricing}
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Услуги</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{spec.services.join(' • ')}</div>
                </div>
                <div style={{ fontSize: '0.8rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-color)' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Глубина: </span>
                  <span>{spec.trade_depth}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Table View */}
          <div className="trade-table-desktop" style={{ overflowX: 'auto' }}>
            <table className="data-table" style={{ minWidth: '700px' }}>
              <thead>
                <tr>
                  <th>Провайдер</th>
                  <th>Фокус</th>
                  <th>Услуги</th>
                  <th>Цена</th>
                  <th>Глубина</th>
                </tr>
              </thead>
              <tbody>
                {intl_trade_comparison.specialists.map((spec, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: '600' }}>{spec.name}</td>
                    <td style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>{spec.focus}</td>
                    <td style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', maxWidth: '200px' }}>
                      {spec.services.slice(0, 3).join(', ')}
                      {spec.services.length > 3 && '...'}
                    </td>
                    <td style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--accent-green)' }}>{spec.pricing}</td>
                    <td style={{ fontSize: '0.75rem' }}>{spec.trade_depth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Market Gap */}
      {intl_trade_comparison.market_gap && (
        <div style={{
          padding: '0.75rem 1rem',
          background: 'rgba(0, 255, 136, 0.1)',
          borderLeft: '3px solid var(--accent-green)',
          borderRadius: '0.5rem',
          fontSize: '0.85rem',
          fontWeight: '600'
        }}>
          🎯 {intl_trade_comparison.market_gap}
        </div>
      )}
    </div>
  );
};

export default TradeComparison;
