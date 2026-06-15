export type NavId = "dashboard" | "tests" | "analytics" | "settings";

export const navItems: { id: NavId; label: string; icon: string }[] = [
  { id: "dashboard", label: "Dashboard", icon: "▦" },
  { id: "tests", label: "Test Runs", icon: "✓" },
  { id: "analytics", label: "Analytics", icon: "◫" },
  { id: "settings", label: "Settings", icon: "⚙" },
];

export const stats = [
  { label: "Pass Rate", value: "94.2%", change: "+2.1%", positive: true },
  { label: "Tests Run", value: "1,248", change: "+156", positive: true },
  { label: "Failures", value: "12", change: "-4", positive: true },
  { label: "Avg Duration", value: "4m 32s", change: "-18s", positive: true },
];

export const chartData = [
  { month: "Jan", passed: 820, failed: 45 },
  { month: "Feb", passed: 910, failed: 38 },
  { month: "Mar", passed: 875, failed: 52 },
  { month: "Apr", passed: 980, failed: 28 },
  { month: "May", passed: 1020, failed: 22 },
  { month: "Jun", passed: 1080, failed: 18 },
];

export const testSuites = [
  {
    id: "unit",
    name: "Unit Tests",
    passed: 342,
    failed: 2,
    skipped: 8,
    duration: "1m 12s",
    status: "failed" as const,
  },
  {
    id: "integration",
    name: "Integration Tests",
    passed: 89,
    failed: 0,
    skipped: 3,
    duration: "2m 45s",
    status: "passed" as const,
  },
  {
    id: "e2e",
    name: "E2E Tests",
    passed: 24,
    failed: 1,
    skipped: 0,
    duration: "8m 20s",
    status: "failed" as const,
  },
  {
    id: "smoke",
    name: "Smoke Tests",
    passed: 12,
    failed: 0,
    skipped: 0,
    duration: "45s",
    status: "passed" as const,
  },
];

export const recentRuns = [
  {
    id: "run-1842",
    branch: "main",
    commit: "a3f9c2d",
    status: "passed" as const,
    tests: 467,
    duration: "4m 18s",
    time: "12 min ago",
    trigger: "push",
  },
  {
    id: "run-1841",
    branch: "feat/auth",
    commit: "b7e1a04",
    status: "failed" as const,
    tests: 467,
    duration: "3m 52s",
    time: "1 hr ago",
    trigger: "pull_request",
  },
  {
    id: "run-1840",
    branch: "main",
    commit: "c2d8f91",
    status: "passed" as const,
    tests: 465,
    duration: "4m 05s",
    time: "3 hr ago",
    trigger: "push",
  },
  {
    id: "run-1839",
    branch: "fix/checkout",
    commit: "d4a6b33",
    status: "passed" as const,
    tests: 463,
    duration: "4m 11s",
    time: "5 hr ago",
    trigger: "pull_request",
  },
  {
    id: "run-1838",
    branch: "main",
    commit: "e5c7d22",
    status: "running" as const,
    tests: 467,
    duration: "—",
    time: "Just now",
    trigger: "schedule",
  },
];

export const failedTests = [
  { suite: "Unit Tests", name: "AuthService › validates token expiry", file: "auth.test.ts:42" },
  { suite: "Unit Tests", name: "CartStore › handles empty cart checkout", file: "cart.test.ts:118" },
  { suite: "E2E Tests", name: "Checkout flow › completes payment", file: "checkout.spec.ts:67" },
];

export const envVars = [
  { key: "NODE_ENV", value: "production", secret: false },
  { key: "PORT", value: "3000", secret: false },
  { key: "DATABASE_URL", value: "••••••••••••", secret: true },
  { key: "API_KEY", value: "••••••••••••", secret: true },
];
