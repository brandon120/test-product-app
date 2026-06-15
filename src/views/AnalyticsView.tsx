import { chartData } from "../data/mockData";

export function AnalyticsView() {
  const maxTotal = Math.max(...chartData.map((d) => d.passed + d.failed));

  return (
    <>
      <section className="panel chart-panel">
        <div className="panel-header">
          <h2>Test Results Over Time</h2>
          <span className="panel-badge">Last 6 months</span>
        </div>
        <div className="chart chart-stacked">
          {chartData.map((bar) => {
            const total = bar.passed + bar.failed;
            const passedHeight = (bar.passed / maxTotal) * 100;
            const failedHeight = (bar.failed / maxTotal) * 100;

            return (
              <div key={bar.month} className="chart-bar-group">
                <div className="chart-bar-stack">
                  <div className="chart-bar failed-bar" style={{ height: `${failedHeight}%` }} />
                  <div className="chart-bar passed-bar" style={{ height: `${passedHeight}%` }} />
                </div>
                <span className="chart-label">{bar.month}</span>
                <span className="chart-total">{total}</span>
              </div>
            );
          })}
        </div>
        <div className="chart-legend">
          <span className="legend-item">
            <span className="legend-dot passed" /> Passed
          </span>
          <span className="legend-item">
            <span className="legend-dot failed" /> Failed
          </span>
        </div>
      </section>

      <div className="content-grid">
        <section className="panel">
          <div className="panel-header">
            <h2>Flaky Tests</h2>
            <span className="panel-badge alert">3 detected</span>
          </div>
          <ul className="failure-list">
            {[
              { name: "PaymentGateway › retry on timeout", rate: "12%", runs: 48 },
              { name: "UserSession › refresh token rotation", rate: "8%", runs: 48 },
              { name: "SearchIndex › reindex on update", rate: "5%", runs: 48 },
            ].map((test) => (
              <li key={test.name} className="failure-item">
                <span className="failure-icon flaky">~</span>
                <div className="failure-body">
                  <span className="failure-name">{test.name}</span>
                  <span className="failure-meta">
                    {test.rate} failure rate · {test.runs} runs
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h2>Duration Trends</h2>
          </div>
          <div className="metric-rows">
            {[
              { label: "Unit Tests", current: "1m 12s", prev: "1m 28s", improved: true },
              { label: "Integration", current: "2m 45s", prev: "3m 02s", improved: true },
              { label: "E2E Tests", current: "8m 20s", prev: "7m 55s", improved: false },
              { label: "Full Suite", current: "4m 32s", prev: "4m 50s", improved: true },
            ].map((row) => (
              <div key={row.label} className="metric-row">
                <span className="metric-label">{row.label}</span>
                <span className="metric-current">{row.current}</span>
                <span className={`metric-change ${row.improved ? "positive" : "negative"}`}>
                  {row.improved ? "↓" : "↑"} from {row.prev}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
