import { recentRuns, testSuites } from "../data/mockData";

export function TestsView() {
  return (
    <>
      <section className="panel">
        <div className="panel-header">
          <h2>All Test Runs</h2>
          <button className="btn-primary">+ Trigger Run</button>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Run</th>
                <th>Branch</th>
                <th>Commit</th>
                <th>Trigger</th>
                <th>Tests</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {recentRuns.map((run) => (
                <tr key={run.id}>
                  <td className="mono">{run.id}</td>
                  <td>
                    <span className="branch-tag">{run.branch}</span>
                  </td>
                  <td className="mono">{run.commit}</td>
                  <td>{run.trigger}</td>
                  <td>{run.tests}</td>
                  <td>{run.duration}</td>
                  <td>
                    <span className={`status-badge ${run.status}`}>{run.status}</span>
                  </td>
                  <td className="muted">{run.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h2>Suite Breakdown</h2>
        </div>
        <div className="suite-grid">
          {testSuites.map((suite) => {
            const total = suite.passed + suite.failed + suite.skipped;
            const passPct = Math.round((suite.passed / total) * 100);

            return (
              <div key={suite.id} className={`suite-card ${suite.status}`}>
                <div className="suite-header">
                  <span className="suite-name">{suite.name}</span>
                  <span className="suite-pct">{passPct}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill passed" style={{ width: `${passPct}%` }} />
                  <div
                    className="progress-fill failed"
                    style={{ width: `${Math.round((suite.failed / total) * 100)}%` }}
                  />
                </div>
                <div className="suite-stats">
                  <span className="suite-stat passed">{suite.passed} passed</span>
                  <span className="suite-stat failed">{suite.failed} failed</span>
                  <span className="suite-stat skipped">{suite.skipped} skipped</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
