import { useEffect, useState } from "react";
import { envVars } from "../data/mockData";

type HealthStatus = "loading" | "healthy" | "offline";

export function SettingsView() {
  const [health, setHealth] = useState<HealthStatus>("loading");
  const [healthTime, setHealthTime] = useState<string>("");

  useEffect(() => {
    fetch("/health")
      .then((res) => res.json())
      .then((data) => {
        setHealth(data.status === "ok" ? "healthy" : "offline");
        setHealthTime(data.timestamp ?? "");
      })
      .catch(() => setHealth("offline"));
  }, []);

  return (
    <>
      <section className="panel">
        <div className="panel-header">
          <h2>Deployment</h2>
          <span className={`status-badge ${health === "healthy" ? "completed" : health === "offline" ? "alert" : "pending"}`}>
            {health === "loading" ? "checking..." : health === "healthy" ? "live" : "offline"}
          </span>
        </div>
        <div className="settings-grid">
          <div className="setting-item">
            <span className="setting-label">Platform</span>
            <span className="setting-value">Railway</span>
          </div>
          <div className="setting-item">
            <span className="setting-label">Runtime</span>
            <span className="setting-value">Node.js + Express</span>
          </div>
          <div className="setting-item">
            <span className="setting-label">Build</span>
            <span className="setting-value">Vite + TypeScript</span>
          </div>
          <div className="setting-item">
            <span className="setting-label">Health Check</span>
            <span className="setting-value mono">GET /health</span>
          </div>
          {healthTime && (
            <div className="setting-item">
              <span className="setting-label">Last Check</span>
              <span className="setting-value">{new Date(healthTime).toLocaleString()}</span>
            </div>
          )}
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h2>Environment Variables</h2>
          <button className="btn-text">+ Add variable</button>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {envVars.map((env) => (
                <tr key={env.key}>
                  <td className="mono">{env.key}</td>
                  <td className={env.secret ? "secret" : "mono"}>{env.value}</td>
                  <td>
                    <span className={`type-badge ${env.secret ? "secret" : "plain"}`}>
                      {env.secret ? "secret" : "plain"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="settings-note">
          Set variables in the Railway dashboard under your service&apos;s Variables tab.
        </p>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h2>Deploy Commands</h2>
        </div>
        <pre className="code-block">{`# Build locally
npm run build

# Start production server
npm start

# Railway auto-detects from railway.toml:
#   build: npm run build
#   start: npm start`}</pre>
      </section>
    </>
  );
}
