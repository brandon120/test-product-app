import { useState } from "react";
import { navItems, type NavId } from "./data/mockData";
import { DashboardView } from "./views/DashboardView";
import { TestsView } from "./views/TestsView";
import { AnalyticsView } from "./views/AnalyticsView";
import { SettingsView } from "./views/SettingsView";

const pageMeta: Record<NavId, { title: string; subtitle: string }> = {
  dashboard: {
    title: "Dashboard",
    subtitle: "Overview of test health and recent activity.",
  },
  tests: {
    title: "Test Runs",
    subtitle: "Browse and trigger CI test runs.",
  },
  analytics: {
    title: "Analytics",
    subtitle: "Trends, flaky tests, and performance metrics.",
  },
  settings: {
    title: "Settings",
    subtitle: "Deployment config and environment variables.",
  },
};

function ActiveView({ nav }: { nav: NavId }) {
  switch (nav) {
    case "dashboard":
      return <DashboardView />;
    case "tests":
      return <TestsView />;
    case "analytics":
      return <AnalyticsView />;
    case "settings":
      return <SettingsView />;
  }
}

export default function App() {
  const [activeNav, setActiveNav] = useState<NavId>("dashboard");
  const meta = pageMeta[activeNav];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span className="brand-icon">◆</span>
          <span className="brand-name">TestPulse</span>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeNav === item.id ? "active" : ""}`}
              onClick={() => setActiveNav(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-card">
            <div className="avatar">CI</div>
            <div>
              <div className="user-name">CI Bot</div>
              <div className="user-role">Railway Deploy</div>
            </div>
          </div>
        </div>
      </aside>

      <div className="main">
        <header className="header">
          <div>
            <h1 className="page-title">{meta.title}</h1>
            <p className="page-subtitle">{meta.subtitle}</p>
          </div>
          <div className="header-actions">
            <input className="search-input" type="search" placeholder="Search tests..." />
            {activeNav === "tests" ? (
              <button className="btn-primary">+ Trigger Run</button>
            ) : (
              <button className="btn-primary">Export Report</button>
            )}
          </div>
        </header>

        <ActiveView nav={activeNav} />
      </div>
    </div>
  );
}
