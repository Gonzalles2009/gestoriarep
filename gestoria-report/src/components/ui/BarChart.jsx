const BarChart = ({ data }) => (
  <div className="bar-chart">
    {data.map((item, i) => (
      <div key={i} className="bar-row">
        <div className="bar-label">{item.label}</div>
        <div className="bar-track">
          <div
            className="bar-fill"
            style={{
              width: `${(item.value / data[0].value) * 100}%`,
              background: item.color || 'var(--accent-cyan)'
            }}
          />
        </div>
        <div className="bar-value">€{item.value}M</div>
      </div>
    ))}
  </div>
);

export default BarChart;
