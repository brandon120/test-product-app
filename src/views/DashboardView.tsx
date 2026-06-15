import { stats, recentRuns, testSuites, failedTests } from "../data/mockData";

export function DashboardView() {
  const runningCount = recentRuns.filter((r) => r.status === "running").length;

  return (
    <>
      <section className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <span className="stat-label">{stat.label}</span>
            <span className="stat-value">{stat.value}</span>
            <span className={`stat-change ${stat.positive ? "positive" : "negative"}`}>
              {stat.change} vs last week
            </span>
          </div>
        ))}
      </section>

      <div className="content-grid">
        <section className="panel">
          <div className="panel-header">
            <h2>Test Suites</h2>
            <span className="panel-badge">{runningCount} running</span>
          </div>
          <div className="suite-grid">
            {testSuites.map((suite) => (
              <div key={suite.id} className={`suite-card ${suite.status}`}>
                <div className="suite-header">
                  <span className="suite-name">{suite.name}</span>
                  <span className={`status-badge ${suite.status}`}>{suite.status}</span>
                </div>
                <div className="suite-stats">
                  <span className="suite-stat passed">{suite.passed} passed</span>
                  <span className="suite-stat failed">{suite.failed} failed</span>
                  <span className="suite-stat skipped">{suite.skipped} skipped</span>
                </div>
                <span className="suite-duration">{suite.duration}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h2>Recent Runs</h2>
            <button className="btn-text">View all</button>
          </div>
          <ul className="run-list">
            {recentRuns.slice(0, 5).map((run) => (
              <li key={run.id} className="run-item">
                <span className={`run-status-dot ${run.status}`} />
                <div className="run-body">
                  <span className="run-id">{run.id}</span>
                  <span className="run-meta">
                    {run.branch} · {run.commit} · {run.trigger}
                  </span>
                </div>
                <div className="run-details">
                  <span className={`status-badge ${run.status}`}>{run.status}</span>
                  <span className="run-time">{run.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {failedTests.length > 0 && (
        <section className="panel failures-panel">
          <div className="panel-header">
            <h2>Active Failures</h2>
            <span className="panel-badge alert">{failedTests.length} failing</span>
          </div>
          <ul className="failure-list">
            {failedTests.map((test) => (
              <li key={test.name} className="failure-item">
                <span className="failure-icon">✕</span>
                <div className="failure-body">
                  <span className="failure-name">{test.name}</span>
                  <span className="failure-meta">
                    {test.suite} · {test.file}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
