const PricingTable = () => (
  <div className="data-table-container">
    <table className="data-table">
      <thead>
        <tr>
          <th>Пакет</th>
          <th>Целевой Клиент</th>
          <th>SLA</th>
          <th>Цена / мес</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span className="tag standard">Standard</span></td>
          <td>S.L. €1-3M, базовая ВЭД</td>
          <td>&lt; 24ч</td>
          <td style={{ fontWeight: '600' }}>€800</td>
        </tr>
        <tr style={{ background: 'rgba(0, 242, 255, 0.05)' }}>
          <td><span className="tag premium">Premium</span></td>
          <td>S.L. €3-8M, активная ВЭД</td>
          <td>&lt; 4ч критичные</td>
          <td style={{ fontWeight: '600', color: 'var(--accent-cyan)' }}>€2,000</td>
        </tr>
        <tr style={{ background: 'rgba(112, 0, 255, 0.05)' }}>
          <td><span className="tag elite">Ultra</span></td>
          <td>S.L. €8-20M+, заменяет найм</td>
          <td>&lt; 1ч, 24/7</td>
          <td style={{ fontWeight: '600', color: 'var(--accent-purple)' }}>€3,500</td>
        </tr>
      </tbody>
    </table>
    <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
      Ultra €3,500/мес = дешевле найма бухгалтера (€4.5-5.5k с налогами) + команда + гарантия
    </div>
  </div>
);

export default PricingTable;
