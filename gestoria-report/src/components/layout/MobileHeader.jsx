const MobileHeader = ({ onMenuClick, title }) => (
  <div className="mobile-header">
    <button className="hamburger-btn" onClick={onMenuClick} aria-label="Открыть меню">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div className="mobile-title">{title}</div>
  </div>
);

export default MobileHeader;
