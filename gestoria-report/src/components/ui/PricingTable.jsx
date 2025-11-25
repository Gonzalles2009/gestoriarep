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
          <td><span className="tag standard">Business Standard</span></td>
          <td>S.L. &lt;2M€, Локальные</td>
          <td>&lt; 24ч</td>
          <td>€450 - €700</td>
        </tr>
        <tr>
          <td><span className="tag premium">Global Premium</span></td>
          <td>S.L. 2-5M€, Импорт/Экспорт</td>
          <td>&lt; 4ч (Приоритет)</td>
          <td>€750 - €1200</td>
        </tr>
        <tr>
          <td><span className="tag elite">Corporate Elite</span></td>
          <td>S.L. &gt;5M€, Холдинги</td>
          <td>24/7 Личный менеджер</td>
          <td>&gt; €1500</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PricingTable;
