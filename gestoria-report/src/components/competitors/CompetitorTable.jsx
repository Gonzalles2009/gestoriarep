import { useState } from 'react';
import { MetricCard } from '../ui';
import SegmentFilter from './SegmentFilter';
import CompetitorMatrix from './CompetitorMatrix';
import CompetitorProfile from './CompetitorProfile';
import CompetitorDetailList from './CompetitorDetailList';
import MarketInsights from './MarketInsights';
import MarketGaps from './MarketGaps';
import SLAComparison from './SLAComparison';
import InsuranceComparison from './InsuranceComparison';
import TradeComparison from './TradeComparison';

const CompetitorTable = ({ segments, matrix, insights, gaps, summary, sla_comparison, insurance_comparison, intl_trade_comparison }) => {
  const [selectedSegment, setSelectedSegment] = useState('all');
  const [selectedCompany, setSelectedCompany] = useState(null);

  const filteredMatrix = selectedSegment === 'all'
    ? matrix
    : matrix.filter(c => c.segment === selectedSegment);

  return (
    <div>
      {/* Key Metrics */}
      <div className="metrics-grid" style={{ marginBottom: '2rem' }}>
        <MetricCard label="Конкурентов в базе" value={matrix.length} subtext="Все сегменты" />
        <MetricCard label="Market Gap" value="S.L. €1-10M" subtext="Пропущенная середина" />
        <MetricCard label="Рыночных возможностей" value={gaps.length} subtext="Для входа" />
      </div>

      {/* Segments Overview */}
      <h3 style={{ marginBottom: '0.5rem' }}>Сегменты Рынка</h3>
      <p style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>
        👆 Кликните на сегмент для фильтрации и просмотра детальных профилей с SLA, гарантиями и страховкой
      </p>
      <SegmentFilter
        segments={segments}
        selectedSegment={selectedSegment}
        onSelect={setSelectedSegment}
      />

      {/* Competitor Matrix */}
      <h3 style={{ marginBottom: '0.5rem' }}>
        Матрица Конкурентов
        {selectedSegment !== 'all' && (
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginLeft: '0.75rem' }}>
            ({filteredMatrix.length} из {matrix.length})
          </span>
        )}
      </h3>
      <p style={{ fontSize: '0.8rem', color: 'var(--accent-green)', marginBottom: '1rem' }}>
        👆 Кликните на название компании для просмотра детального профиля
      </p>
      <CompetitorMatrix
        matrix={matrix}
        selectedSegment={selectedSegment}
        selectedCompany={selectedCompany}
        onSelectCompany={setSelectedCompany}
      />

      {/* Selected Company Detail */}
      {selectedCompany && (
        <div style={{ marginBottom: '2.5rem' }}>
          {matrix.filter(comp => comp.name === selectedCompany).map((comp, i) => (
            <CompetitorProfile
              key={i}
              company={comp}
              onClose={() => setSelectedCompany(null)}
            />
          ))}
        </div>
      )}

      {/* Expandable Competitor Details */}
      {selectedSegment !== 'all' && filteredMatrix.length > 0 && (
        <CompetitorDetailList
          companies={filteredMatrix}
          segmentName={selectedSegment}
        />
      )}

      {/* Market Insights */}
      <h3 style={{ marginBottom: '1rem' }}>Рыночные Инсайты</h3>
      <MarketInsights insights={insights} />

      {/* Market Gaps */}
      <h3 style={{ marginBottom: '1rem' }}>Рыночные Возможности ({gaps.length} Gaps)</h3>
      <MarketGaps gaps={gaps} />

      {/* SLA Comparison */}
      <SLAComparison sla_comparison={sla_comparison} />

      {/* Insurance Comparison */}
      <InsuranceComparison insurance_comparison={insurance_comparison} />

      {/* International Trade Comparison */}
      <TradeComparison intl_trade_comparison={intl_trade_comparison} />

      {/* Summary */}
      {summary && (
        <div style={{
          padding: '1.25rem',
          background: 'rgba(0, 242, 255, 0.05)',
          borderLeft: '4px solid var(--accent-cyan)',
          borderRadius: '0.5rem',
          fontSize: '0.9rem',
          lineHeight: '1.6'
        }}
        dangerouslySetInnerHTML={{ __html: summary.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
        />
      )}
    </div>
  );
};

export default CompetitorTable;
