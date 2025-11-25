const MetricCard = ({ label, value, trend, subtext }) => (
  <div className="metric-card">
    <div className="metric-label">{label}</div>
    <div className="metric-value">{value}</div>
    {trend && <div className="metric-trend">{trend}</div>}
    {subtext && <div className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>{subtext}</div>}
  </div>
);

export default MetricCard;
