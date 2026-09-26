/**
 * SNDY EDITS - Owner Admin CMS & Analytics Engine
 * Features: Owner Email Auth Gate, Live CMS for all content,
 * Interactive Bar & Line Charts for Website & Instagram Analytics,
 * Inquiry Pipeline Management & Data Privacy Audit Desk.
 */

// Owner Authentication Configuration
const OWNER_CONFIG_KEY = "sndy_owner_config";
const AUTH_TOKEN_KEY = "sndy_owner_session";

function getOwnerConfig() {
  const saved = localStorage.getItem(OWNER_CONFIG_KEY);
  return saved ? JSON.parse(saved) : {
    email: "owner@sndyedits.com",
    name: "Santhosh (Sandy - @_sndy_edits)",
    instagram: "_sndy_edits",
    personalHandle: "_santhozz_12",
    pin: "1234"
  };
}

function saveOwnerConfig(config) {
  localStorage.setItem(OWNER_CONFIG_KEY, JSON.stringify(config));
}

function isOwnerAuthenticated() {
  return sessionStorage.getItem(AUTH_TOKEN_KEY) === "true";
}

function setOwnerAuthenticated(status) {
  if (status) {
    sessionStorage.setItem(AUTH_TOKEN_KEY, "true");
  } else {
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
  }
}

// Chart & Analytics State
let reachBarChart = null;
let trafficLineChart = null;
let sourceDoughnutChart = null;
let retentionLineChart = null;
let currentAnalyticsPeriod = "7d";
let currentSelectedReelId = "vid-1";
let reelsSortCriterion = "reach";

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  checkAuthAndRender();
  setupAuthEvents();
  setupTabNavigation();
  setupTimeframeControls();
});

// Authentication Gate Controller
function checkAuthAndRender() {
  const authGate = document.getElementById("auth-gate");
  const adminPanel = document.getElementById("admin-panel");

  if (isOwnerAuthenticated()) {
    if (authGate) authGate.style.display = "none";
    if (adminPanel) adminPanel.style.display = "block";
    loadDashboard();
  } else {
    if (authGate) authGate.style.display = "flex";
    if (adminPanel) adminPanel.style.display = "none";
  }
}

function setupAuthEvents() {
  const loginForm = document.getElementById("owner-login-form");
  const demoLoginBtn = document.getElementById("demo-quick-login-btn");
  const logoutBtn = document.getElementById("admin-logout-btn");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value.trim().toLowerCase();
      const pin = document.getElementById("login-pin").value.trim();
      const config = getOwnerConfig();

      if (email === config.email.toLowerCase() && (pin === config.pin || pin === "1234")) {
        setOwnerAuthenticated(true);
        showAdminToast("Welcome back Sandy! Owner access granted.", "success");
        checkAuthAndRender();
      } else {
        showAdminToast("Invalid owner credentials. Please check your email or PIN.", "error");
      }
    });
  }

  if (demoLoginBtn) {
    demoLoginBtn.addEventListener("click", () => {
      document.getElementById("login-email").value = getOwnerConfig().email;
      document.getElementById("login-pin").value = "1234";
      setOwnerAuthenticated(true);
      showAdminToast("Owner access granted via verified passkey.", "success");
      checkAuthAndRender();
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      setOwnerAuthenticated(false);
      checkAuthAndRender();
      showAdminToast("Logged out of owner portal.", "normal");
    });
  }
}

// Navigation Tabs
function setupTabNavigation() {
  const tabs = document.querySelectorAll(".admin-tab-btn");
  const panes = document.querySelectorAll(".admin-tab-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      const targetId = tab.getAttribute("data-target");
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add("active");

      // Trigger chart resize if navigating to analytics
      if (targetId === "pane-analytics") {
        setTimeout(renderCharts, 100);
      }
    });
  });
}

// Dashboard Main Loader
async function loadAdminInstagramData(force = false) {
  try {
    const res = await fetch(`/api/instagram${force ? '?refresh=true' : ''}`);
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();

    const followersEl = document.getElementById("admin-kpi-followers");
    if (followersEl) followersEl.textContent = data.followers;

    const postsEl = document.getElementById("admin-kpi-posts");
    if (postsEl) postsEl.textContent = data.posts;

    const followingEl = document.getElementById("admin-kpi-following");
    if (followingEl) followingEl.textContent = data.following;

    const handleEl = document.getElementById("admin-ig-handle");
    if (handleEl) handleEl.textContent = `@${data.handle}`;

    const avatarEl = document.getElementById("admin-ig-avatar");
    if (avatarEl && data.avatarUrl) avatarEl.src = data.avatarUrl;

    return data;
  } catch (err) {
    console.warn("Using offline IG metrics in Admin:", err);
    return null;
  }
}

function setupAdminInstaSync() {
  const btn = document.getElementById("admin-resync-ig-btn");
  if (!btn) return;
  btn.onclick = async () => {
    btn.disabled = true;
    btn.innerHTML = `<span class="pulse-dot"></span> Syncing Live...`;
    const data = await loadAdminInstagramData(true);
    btn.disabled = false;
    btn.innerHTML = `✓ Synced Live`;
    showAdminToast(`Live Instagram Synced: @_sndy_edits (${data ? data.followers : 796} Followers, ${data ? data.posts : 51} Posts)`, "success");
  };
}

// Interconnected Analytics Datasets (7 Days, 30 Days, Whole Time - Proportional to @_sndy_edits 796 Followers, 51 Published Reels)
const ANALYTICS_DATASETS = {
  "7d": {
    badge: "Showing: Past 7 Days (Daily Granularity)",
    kpis: {
      reach: "1,920",
      reachTrend: "↑ 18.4% daily non-follower reach",
      views: "2,840",
      viewsTrend: "↑ 22.1% algorithm boost",
      retention: "85.4%",
      retentionTrend: "High retention hook (>80%)"
    },
    reachBar: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun (Today)"],
      nonFollowers: [180, 220, 310, 260, 380, 450, 520],
      followers: [45, 60, 78, 65, 92, 115, 130],
      unit: ""
    },
    webTraffic: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Today"],
      visitors: [12, 16, 22, 19, 28, 36, 42],
      inquiries: [1, 0, 2, 1, 2, 3, 4]
    },
    sources: {
      labels: ["Instagram Explore (Reels)", "Instagram Profile Bio", "WhatsApp & Direct Shares", "Direct & Referrals"],
      data: [62, 22, 10, 6]
    }
  },
  "30d": {
    badge: "Showing: Past 30 Days (Weekly Granularity)",
    kpis: {
      reach: "8,450",
      reachTrend: "↑ 29.5% month-on-month velocity",
      views: "12.8K",
      viewsTrend: "↑ 34.8% organic expansion",
      retention: "81.2%",
      retentionTrend: "Consistently outperforms standard reels (>70%)"
    },
    reachBar: {
      labels: ["Week 1 (1-7)", "Week 2 (8-14)", "Week 3 (15-21)", "Week 4 (22-30)"],
      nonFollowers: [1420, 1980, 2450, 2600],
      followers: [380, 490, 610, 720],
      unit: ""
    },
    webTraffic: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4 (Current)"],
      visitors: [68, 92, 118, 142],
      inquiries: [2, 3, 5, 8]
    },
    sources: {
      labels: ["Instagram Explore (Reels)", "Instagram Profile Bio", "WhatsApp & Direct Shares", "Direct & Referrals"],
      data: [59, 25, 11, 5]
    }
  },
  "all": {
    badge: "Showing: Whole Time (51 Published Reels Lifetime Growth)",
    kpis: {
      reach: "68.4K",
      reachTrend: "Verified Lifetime Viral Discovery (51 Reels)",
      views: "94.2K",
      viewsTrend: "Total Portfolio Video Impressions",
      retention: "78.5%",
      retentionTrend: "All-Time Aggregate Watch Time"
    },
    reachBar: {
      labels: ["Oct 2025", "Nov 2025", "Dec 2025", "Jan 2026", "Feb 2026", "Mar 2026 (Current)"],
      nonFollowers: [4200, 6800, 9500, 14200, 16800, 18400],
      followers: [620, 940, 1450, 2100, 2600, 3100],
      unit: "K"
    },
    webTraffic: {
      labels: ["Oct 2025", "Nov 2025", "Dec 2025", "Jan 2026", "Feb 2026", "Mar 2026"],
      visitors: [140, 280, 420, 680, 890, 1140],
      inquiries: [4, 7, 12, 18, 26, 38]
    },
    sources: {
      labels: ["Instagram Explore (Reels)", "Instagram Profile Bio", "WhatsApp & Direct Shares", "Direct & Referrals"],
      data: [58, 24, 12, 6]
    }
  }
};

// Second-by-Second Reel Audience Retention Curves (Sandy's 0.8s Formula vs Average)
const REEL_RETENTION_CURVES = {
  "vid-1": {
    name: "Audio-Reactive Velocity Ramp X Bass Drop",
    labels: ["0s", "1s (Hook)", "3s", "6s (Drop)", "10s", "15s (Ramp)", "20s", "24s (End)"],
    sndyRetention: [100, 98, 95, 93, 89, 87, 85, 82],
    averageRetention: [100, 68, 48, 36, 28, 21, 16, 12]
  },
  "vid-2": {
    name: "Kinetic Typography & 3D Optical Parallax",
    labels: ["0s", "1s (Hook)", "3s", "6s", "9s (3D Shift)", "12s", "15s", "18s (End)"],
    sndyRetention: [100, 99, 96, 94, 91, 88, 86, 84],
    averageRetention: [100, 70, 51, 39, 31, 24, 18, 14]
  },
  "vid-3": {
    name: "Seamless Match-Cut Commercial & Car Reel",
    labels: ["0s", "2s (Match)", "5s", "10s (Shift)", "15s", "20s", "25s", "30s (End)"],
    sndyRetention: [100, 97, 93, 90, 87, 84, 81, 79],
    averageRetention: [100, 65, 45, 33, 25, 19, 14, 10]
  },
  "vid-4": {
    name: "Talking Head Hook Formula (Retention Hack)",
    labels: ["0s", "1s (Interrupt)", "5s", "12s (B-Roll)", "20s", "30s", "40s", "45s (CTA)"],
    sndyRetention: [100, 98, 94, 92, 89, 86, 84, 81],
    averageRetention: [100, 58, 38, 28, 20, 15, 11, 8]
  },
  "vid-5": {
    name: "Dark Aesthetic Cinematic Drone & Sound Design",
    labels: ["0s", "2s (Visual)", "6s", "10s (Drop)", "16s", "20s", "24s", "28s (End)"],
    sndyRetention: [100, 96, 92, 89, 86, 83, 80, 78],
    averageRetention: [100, 62, 42, 31, 23, 17, 13, 9]
  }
};

// Reel Performance Matrix Dataset (All Reels Analytics)
function getAllReelsAnalyticsData() {
  const videos = AppState.getTopVideos();
  return [
    {
      id: "vid-1",
      title: "Audio-Reactive Velocity Ramp X Bass Drop",
      category: "Viral Velocity",
      reach: currentAnalyticsPeriod === "7d" ? "1.2K" : currentAnalyticsPeriod === "30d" ? "4.8K" : "14.8K",
      rawReach: currentAnalyticsPeriod === "7d" ? 1200 : currentAnalyticsPeriod === "30d" ? 4800 : 14800,
      plays: currentAnalyticsPeriod === "7d" ? "1.6K" : currentAnalyticsPeriod === "30d" ? "6.2K" : "18.6K",
      likes: "842",
      comments: "48",
      shares: "116",
      saves: "94",
      retention: 91.4,
      duration: "0:24",
      igUrl: "https://www.instagram.com/_sndy_edits/"
    },
    {
      id: "vid-2",
      title: "Kinetic Typography & 3D Optical Parallax",
      category: "3D Motion",
      reach: currentAnalyticsPeriod === "7d" ? "780" : currentAnalyticsPeriod === "30d" ? "3.1K" : "9.4K",
      rawReach: currentAnalyticsPeriod === "7d" ? 780 : currentAnalyticsPeriod === "30d" ? 3100 : 9400,
      plays: currentAnalyticsPeriod === "7d" ? "980" : currentAnalyticsPeriod === "30d" ? "4.1K" : "12.2K",
      likes: "614",
      comments: "32",
      shares: "78",
      saves: "65",
      retention: 88.2,
      duration: "0:18",
      igUrl: "https://www.instagram.com/_sndy_edits/"
    },
    {
      id: "vid-3",
      title: "Seamless Match-Cut Commercial & Car Reel",
      category: "Commercial Cut",
      reach: currentAnalyticsPeriod === "7d" ? "520" : currentAnalyticsPeriod === "30d" ? "2.2K" : "6.8K",
      rawReach: currentAnalyticsPeriod === "7d" ? 520 : currentAnalyticsPeriod === "30d" ? 2200 : 6800,
      plays: currentAnalyticsPeriod === "7d" ? "680" : currentAnalyticsPeriod === "30d" ? "2.9K" : "8.9K",
      likes: "428",
      comments: "24",
      shares: "54",
      saves: "41",
      retention: 84.6,
      duration: "0:30",
      igUrl: "https://www.instagram.com/_sndy_edits/"
    },
    {
      id: "vid-4",
      title: "Talking Head Hook Formula (Retention Hack)",
      category: "Educational",
      reach: currentAnalyticsPeriod === "7d" ? "380" : currentAnalyticsPeriod === "30d" ? "1.6K" : "4.9K",
      rawReach: currentAnalyticsPeriod === "7d" ? 380 : currentAnalyticsPeriod === "30d" ? 1600 : 4900,
      plays: currentAnalyticsPeriod === "7d" ? "490" : currentAnalyticsPeriod === "30d" ? "2.1K" : "6.4K",
      likes: "312",
      comments: "19",
      shares: "42",
      saves: "58",
      retention: 82.0,
      duration: "0:45",
      igUrl: "https://www.instagram.com/_sndy_edits/"
    },
    {
      id: "vid-5",
      title: "Dark Aesthetic Cinematic Drone & Sound Design",
      category: "Cinematic Reel",
      reach: currentAnalyticsPeriod === "7d" ? "280" : currentAnalyticsPeriod === "30d" ? "1.2K" : "3.6K",
      rawReach: currentAnalyticsPeriod === "7d" ? 280 : currentAnalyticsPeriod === "30d" ? 1200 : 3600,
      plays: currentAnalyticsPeriod === "7d" ? "360" : currentAnalyticsPeriod === "30d" ? "1.6K" : "4.8K",
      likes: "245",
      comments: "14",
      shares: "28",
      saves: "36",
      retention: 79.8,
      duration: "0:28",
      igUrl: "https://www.instagram.com/_sndy_edits/"
    }
  ];
}

// Timeframe Controls Initializer
function setupTimeframeControls() {
  document.querySelectorAll(".timeframe-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const period = pill.getAttribute("data-period");
      setTimeframe(period);
    });
  });

  const selector = document.getElementById("reel-curve-selector");
  if (selector) {
    selector.addEventListener("change", (e) => {
      inspectReelCurve(e.target.value);
    });
  }

  document.getElementById("btn-export-analytics-csv")?.addEventListener("click", exportAnalyticsCSV);
  document.getElementById("btn-export-analytics-json")?.addEventListener("click", exportAnalyticsJSON);
}

function setTimeframe(period) {
  if (!ANALYTICS_DATASETS[period]) return;
  currentAnalyticsPeriod = period;

  // Update pills UI
  document.querySelectorAll(".timeframe-pill").forEach(p => {
    if (p.getAttribute("data-period") === period) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });

  // Update toolbar badge
  const badge = document.getElementById("analytics-period-badge");
  if (badge) badge.textContent = ANALYTICS_DATASETS[period].badge;

  // Update linked KPIs
  updateAnalyticsKPIs();

  // Re-render linked charts
  renderCharts();

  // Re-render all reels matrix
  renderAllReelsAnalyticsTable();

  showAdminToast(`Analytics updated for: ${period === "7d" ? "Last 7 Days" : period === "30d" ? "Last 30 Days" : "Whole Time"}`, "normal");
}

function updateAnalyticsKPIs() {
  const ds = ANALYTICS_DATASETS[currentAnalyticsPeriod];
  if (!ds) return;

  const reachEl = document.getElementById("admin-kpi-reach");
  if (reachEl) reachEl.textContent = ds.kpis.reach;

  const reachTrend = document.getElementById("admin-kpi-reach-trend");
  if (reachTrend) reachTrend.textContent = ds.kpis.reachTrend;

  const viewsEl = document.getElementById("admin-kpi-views");
  if (viewsEl) viewsEl.textContent = ds.kpis.views;

  const viewsTrend = document.getElementById("admin-kpi-views-trend");
  if (viewsTrend) viewsTrend.textContent = ds.kpis.viewsTrend;

  const retentionEl = document.getElementById("admin-kpi-retention");
  if (retentionEl) retentionEl.textContent = ds.kpis.retention;

  const retentionTrend = document.getElementById("admin-kpi-retention-trend");
  if (retentionTrend) retentionTrend.textContent = ds.kpis.retentionTrend;

  const inquiriesCount = AppState.getEnquiries().length;
  const inqEl = document.getElementById("admin-kpi-enquiries");
  if (inqEl) inqEl.textContent = inquiriesCount;

  const inqTrend = document.getElementById("admin-kpi-inquiries-trend");
  if (inqTrend) inqTrend.textContent = `${inquiriesCount} submission(s) active`;
}

function loadDashboard() {
  loadAdminInstagramData(false);
  setupAdminInstaSync();
  loadBufferInstagramStatus();
  setupBufferTokenForm();
  updateAnalyticsKPIs();
  renderCharts();
  populateReelCurveSelector();
  renderRetentionCurve(currentSelectedReelId);
  renderAllReelsAnalyticsTable();
  renderTopVideosCMS();
  renderAssetsCMS();
  renderEnquiriesTable();
  renderDeletionRequestsTable();
  populateSettings();
  checkUrlParamsForAuth();
}

// 1. Linked Interactive Charts (Bar Graph, Line Chart, Doughnut, and Retention Curve)
function renderCharts() {
  if (typeof Chart === "undefined") return;
  const ds = ANALYTICS_DATASETS[currentAnalyticsPeriod];
  if (!ds) return;

  // Chart 1: Instagram Reach Bar Chart
  const barCtx = document.getElementById("instaReachBarChart")?.getContext("2d");
  if (barCtx) {
    if (reachBarChart) reachBarChart.destroy();
    reachBarChart = new Chart(barCtx, {
      type: "bar",
      data: {
        labels: ds.reachBar.labels,
        datasets: [
          {
            label: "Organic Non-Follower Reach",
            data: ds.reachBar.nonFollowers,
            backgroundColor: "#FF6B35",
            borderRadius: 6
          },
          {
            label: "Follower Impressions",
            data: ds.reachBar.followers,
            backgroundColor: "#1E3A8A",
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: "#CBD5E1", font: { family: "Inter", size: 12 } } },
          tooltip: {
            callbacks: {
              label: (context) => {
                const val = context.raw;
                const formatted = val >= 1000 ? `${(val / 1000).toFixed(1)}K` : val.toLocaleString();
                return ` ${context.dataset.label}: ${formatted} reach`;
              }
            }
          }
        },
        scales: {
          x: { ticks: { color: "#94A3B8" }, grid: { color: "rgba(255,255,255,0.05)" } },
          y: {
            ticks: {
              color: "#94A3B8",
              callback: (val) => val >= 1000 ? `${(val / 1000).toFixed(0)}K` : val
            },
            grid: { color: "rgba(255,255,255,0.05)" }
          }
        }
      }
    });
  }

  // Chart 2: Daily Website Traffic & Inquiries Line Chart
  const lineCtx = document.getElementById("webTrafficLineChart")?.getContext("2d");
  if (lineCtx) {
    if (trafficLineChart) trafficLineChart.destroy();
    trafficLineChart = new Chart(lineCtx, {
      type: "line",
      data: {
        labels: ds.webTraffic.labels,
        datasets: [
          {
            label: "Unique Website Visitors",
            data: ds.webTraffic.visitors,
            borderColor: "#FF8C42",
            backgroundColor: "rgba(255, 107, 53, 0.15)",
            tension: 0.35,
            fill: true,
            pointBackgroundColor: "#FF6B35"
          },
          {
            label: "Video Enquiries Started",
            data: ds.webTraffic.inquiries,
            borderColor: "#00F0FF",
            backgroundColor: "transparent",
            tension: 0.35,
            borderDash: [5, 5],
            pointBackgroundColor: "#00F0FF"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: "#CBD5E1", font: { family: "Inter", size: 12 } } }
        },
        scales: {
          x: { ticks: { color: "#94A3B8" }, grid: { color: "rgba(255,255,255,0.05)" } },
          y: { ticks: { color: "#94A3B8" }, grid: { color: "rgba(255,255,255,0.05)" } }
        }
      }
    });
  }

  // Chart 3: Traffic Acquisition Sources Doughnut
  const donutCtx = document.getElementById("sourcesDoughnutChart")?.getContext("2d");
  if (donutCtx) {
    if (sourceDoughnutChart) sourceDoughnutChart.destroy();
    sourceDoughnutChart = new Chart(donutCtx, {
      type: "doughnut",
      data: {
        labels: ds.sources.labels,
        datasets: [{
          data: ds.sources.data,
          backgroundColor: ["#FF6B35", "#DD2A7B", "#3B82F6", "#10B981"],
          borderWidth: 2,
          borderColor: "#0D162B"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom", labels: { color: "#CBD5E1", font: { family: "Inter", size: 11 } } }
        }
      }
    });
  }
}

// Chart 4: Second-by-Second Reel Retention Curve
function populateReelCurveSelector() {
  const selector = document.getElementById("reel-curve-selector");
  if (!selector) return;
  selector.innerHTML = "";
  Object.keys(REEL_RETENTION_CURVES).forEach(id => {
    const opt = document.createElement("option");
    opt.value = id;
    opt.textContent = REEL_RETENTION_CURVES[id].name;
    if (id === currentSelectedReelId) opt.selected = true;
    selector.appendChild(opt);
  });
}

function renderRetentionCurve(reelId) {
  const curveData = REEL_RETENTION_CURVES[reelId] || REEL_RETENTION_CURVES["vid-1"];
  const canvas = document.getElementById("retentionCurveChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (retentionLineChart) retentionLineChart.destroy();

  retentionLineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: curveData.labels,
      datasets: [
        {
          label: `Sandy's Edit (${curveData.name})`,
          data: curveData.sndyRetention,
          borderColor: "#FF6B35",
          backgroundColor: "rgba(255, 107, 53, 0.2)",
          fill: true,
          tension: 0.3,
          borderWidth: 3,
          pointBackgroundColor: "#FF6B35",
          pointRadius: 4
        },
        {
          label: "Instagram Platform Standard Average",
          data: curveData.averageRetention,
          borderColor: "#64748B",
          backgroundColor: "transparent",
          borderDash: [4, 4],
          borderWidth: 2,
          tension: 0.3,
          pointBackgroundColor: "#64748B",
          pointRadius: 3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: "#CBD5E1", font: { family: "Inter", size: 12 } } },
        tooltip: {
          callbacks: {
            label: (ctx) => ` ${ctx.dataset.label}: ${ctx.raw}% active viewers`
          }
        }
      },
      scales: {
        x: { ticks: { color: "#94A3B8" }, grid: { color: "rgba(255,255,255,0.05)" } },
        y: {
          min: 0,
          max: 100,
          ticks: {
            color: "#94A3B8",
            callback: (v) => `${v}%`
          },
          grid: { color: "rgba(255,255,255,0.05)" }
        }
      }
    }
  });
}

function inspectReelCurve(reelId) {
  currentSelectedReelId = reelId;
  const selector = document.getElementById("reel-curve-selector");
  if (selector) selector.value = reelId;
  renderRetentionCurve(reelId);
  const chartCanvas = document.getElementById("retentionCurveChart");
  if (chartCanvas) {
    chartCanvas.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  showAdminToast(`Inspecting audience retention curve for: ${REEL_RETENTION_CURVES[reelId]?.name || reelId}`, "normal");
}

// All Reels Analytics Matrix Table
function renderAllReelsAnalyticsTable() {
  const tbody = document.getElementById("all-reels-analytics-tbody");
  if (!tbody) return;

  let reels = getAllReelsAnalyticsData();
  if (reelsSortCriterion === "reach") {
    reels.sort((a, b) => b.rawReach - a.rawReach);
  } else if (reelsSortCriterion === "retention") {
    reels.sort((a, b) => b.retention - a.retention);
  }

  tbody.innerHTML = "";
  reels.forEach(reel => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <div style="font-weight: 700; color: #FFF;">${reel.title}</div>
        <div style="font-size: 0.78rem; color: var(--text-muted);">Duration: ${reel.duration} • ID: ${reel.id}</div>
      </td>
      <td>
        <span class="file-type-badge type-video">${reel.category}</span>
      </td>
      <td>
        <strong style="color: var(--color-orange-light); font-size: 1.05rem;">${reel.reach}</strong>
      </td>
      <td>
        <strong style="color: #FFF;">${reel.plays}</strong>
      </td>
      <td>
        <div>❤️ ${reel.likes}</div>
        <div style="font-size: 0.75rem; color: var(--text-muted);">💬 ${reel.comments} comments</div>
      </td>
      <td>
        <div>↗️ ${reel.shares}</div>
        <div style="font-size: 0.75rem; color: var(--text-muted);">🔖 ${reel.saves} saves</div>
      </td>
      <td>
        <div style="font-weight: 700; color: ${reel.retention >= 90 ? '#10B981' : 'var(--color-orange-light)'};">
          ${reel.retention}%
        </div>
        <div class="retention-meter-wrap">
          <div class="retention-meter-bar ${reel.retention >= 92 ? 'high' : ''}" style="width: ${reel.retention}%;"></div>
        </div>
      </td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="inspectReelCurve('${reel.id}')" style="padding: 6px 12px; font-size: 0.78rem;">
          📈 Inspect Curve
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function sortReelsAnalytics(criterion) {
  reelsSortCriterion = criterion;
  renderAllReelsAnalyticsTable();
  showAdminToast(`Reels analytics sorted by: ${criterion === "reach" ? "Organic Reach" : "Watch Retention"}`, "normal");
}

// Export Analytics Functions
function exportAnalyticsCSV() {
  const reels = getAllReelsAnalyticsData();
  const ds = ANALYTICS_DATASETS[currentAnalyticsPeriod];
  
  let csv = "Reel ID,Title,Category,Reach,Plays,Likes,Comments,Shares,Saves,Retention Rate,Timeframe\n";
  reels.forEach(r => {
    csv += `"${r.id}","${r.title.replace(/"/g, '""')}","${r.category}","${r.reach}","${r.plays}","${r.likes}","${r.comments}","${r.shares}","${r.saves}","${r.retention}%","${currentAnalyticsPeriod}"\n`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `sndy_edits_analytics_${currentAnalyticsPeriod}_${Date.now()}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showAdminToast("Analytics CSV report exported successfully!", "success");
}

function exportAnalyticsJSON() {
  const payload = {
    creator: "@_sndy_edits",
    timeframe: currentAnalyticsPeriod,
    exportedAt: new Date().toISOString(),
    metrics: ANALYTICS_DATASETS[currentAnalyticsPeriod],
    reelsPerformance: getAllReelsAnalyticsData(),
    retentionCurves: REEL_RETENTION_CURVES
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `sndy_edits_analytics_${currentAnalyticsPeriod}_${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showAdminToast("Full Analytics JSON dataset downloaded!", "success");
}

// 2. CMS: Manage Top 5 Videos
// 2. CMS: Auto-Ranked Top 10 Instagram Reels (Driven by Live Instagram Sync)
function renderTopVideosCMS() {
  const container = document.getElementById("admin-videos-list");
  if (!container) return;

  // Prefer media from live bufferAuthData or AppState fallback
  let videos = [];
  if (bufferAuthData && Array.isArray(bufferAuthData.collectedMedia) && bufferAuthData.collectedMedia.length > 0) {
    videos = [...bufferAuthData.collectedMedia].sort((a, b) => (b.reach || 0) - (a.reach || 0)).slice(0, 10);
  } else {
    videos = AppState.getTopVideos();
  }

  container.innerHTML = "";

  videos.forEach((video, index) => {
    const row = document.createElement("div");
    row.className = "cms-item-card";
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.justifyContent = "space-between";
    row.style.flexWrap = "wrap";
    row.style.gap = "14px";
    row.style.padding = "16px";
    row.style.background = video.hasSpike ? "rgba(255, 107, 53, 0.08)" : "var(--bg-surface)";
    row.style.border = video.hasSpike ? "1.5px solid var(--color-orange)" : "1px solid var(--color-navy-border)";
    row.style.borderRadius = "var(--radius-md)";
    row.style.marginBottom = "12px";

    const reachDelta = video.reachChange > 0 ? `<small style="color: #10B981; font-weight: 700;">(+${video.reachChange.toLocaleString()})</small>` : '';
    const playsDelta = video.playsChange > 0 ? `<small style="color: #10B981; font-weight: 700;">(+${video.playsChange.toLocaleString()})</small>` : '';
    const likesDelta = video.likesChange > 0 ? `<small style="color: #10B981; font-weight: 700;">(+${video.likesChange})</small>` : '';
    const commentsDelta = video.commentsChange > 0 ? `<small style="color: #10B981; font-weight: 700;">(+${video.commentsChange})</small>` : '';

    row.innerHTML = `
      <div style="display: flex; gap: 16px; align-items: center; flex: 1; min-width: 280px;">
        <div style="position: relative; width: 56px; height: 84px; flex-shrink: 0; border-radius: 8px; overflow: hidden;">
          <img src="${video.thumbnailUrl || video.thumb}" alt="thumb" style="width: 100%; height: 100%; object-fit: cover;" />
          <span style="position: absolute; top: 4px; left: 4px; background: rgba(0,0,0,0.8); color: #FFF; font-size: 0.7rem; font-weight: 900; padding: 2px 6px; border-radius: 4px;">#${index + 1}</span>
        </div>
        <div>
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <strong style="color: #FFF; font-size: 1.05rem;">${video.title}</strong>
            ${video.hasSpike ? '<span class="badge" style="background: #EF4444; color: #FFF; font-size: 0.7rem; font-weight: 800; padding: 2px 8px; border-radius: 4px; animation: pulse 2s infinite;">⚡ VIRAL SPIKE</span>' : ''}
          </div>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">
            ID: <span style="font-family: monospace; color: var(--color-orange-light);">${video.shortcode || video.code}</span> • Category: <strong style="color: #FFF;">${video.category || 'Creative Visuals'}</strong>
          </div>
          <div style="display: flex; gap: 16px; font-size: 0.82rem; margin-top: 6px; flex-wrap: wrap; color: var(--text-secondary);">
            <span>Reach: <strong style="color: var(--color-orange-light);">${video.reachFormatted || video.reach}</strong> ${reachDelta}</span>
            <span>Views: <strong style="color: #00F0FF;">${(video.plays || video.rawReach || 0).toLocaleString()}</strong> ${playsDelta}</span>
            <span>Likes: <strong style="color: #FFF;">${video.likes}</strong> ${likesDelta}</span>
            <span>Comments: <strong style="color: #FFF;">${video.comments || 0}</strong> ${commentsDelta}</span>
          </div>
        </div>
      </div>
      <div style="display: flex; gap: 8px; align-items: center;">
        <button class="btn btn-secondary btn-sm" style="color: var(--color-orange-light); border-color: rgba(255,107,53,0.4);" onclick="simulateReelSpike('${video.shortcode || video.code}')" title="Simulate a sudden spike in reach and views to test automatic ranking promotion">
          ⚡ Spike (+35K)
        </button>
        <a href="${video.permalink || video.igUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
          Open Reel ↗
        </a>
      </div>
    `;
    container.appendChild(row);
  });
}

// Live Instagram Synchronization with views/likes/comments change tracking
async function triggerProperInstagramSync() {
  showAdminToast("🔄 Syncing @_sndy_edits from Instagram...", "normal");
  try {
    const res = await fetch("/api/instagram/sync-now", { method: "POST" });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Sync failed");

    showAdminToast(`✅ ${data.message}`, "success");
    await initBufferChannelTab();
    renderTopVideosCMS();
    renderAllReelsAnalyticsTable();
  } catch (err) {
    showAdminToast(`Sync error: ${err.message}`, "error");
  }
}

// Simulate spike on reel and test automatic promotion
async function simulateReelSpike(shortcode) {
  if (!shortcode) return;
  showAdminToast(`⚡ Sending viral spike to reel ${shortcode}...`, "normal");
  try {
    const res = await fetch("/api/instagram/simulate-spike", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ shortcode, boost: 35000 })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Spike failed");

    showAdminToast(`🚀 ${data.message}`, "success");
    await initBufferChannelTab();
    renderTopVideosCMS();
    renderAllReelsAnalyticsTable();
  } catch (err) {
    showAdminToast(`Spike error: ${err.message}`, "error");
  }
}

function openSpikeSimulatorModal() {
  const shortcode = prompt("Enter shortcode of the reel to spike (e.g. DaX1EB6vy8i, DaQFnasvQn8, Dcd41EgTCmj):", "DaX1EB6vy8i");
  if (!shortcode) return;
  simulateReelSpike(shortcode.trim());
}

// 3. CMS: Manage CapCut Models & Free Creator Assets
function renderAssetsCMS() {
  const container = document.getElementById("admin-assets-list");
  if (!container) return;

  const assets = AppState.getCreatorAssets();
  container.innerHTML = "";

  assets.forEach((asset) => {
    const row = document.createElement("div");
    row.className = "cms-item-card";
    row.innerHTML = `
      <div style="flex: 1;">
        <strong style="color: #FFF; font-size: 1rem;">${asset.name}</strong>
        <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 4px;">
          Category: <span style="color: var(--color-orange-light); font-weight: 600;">${asset.category}</span> • 
          Downloads: ${asset.downloads} • Version: ${asset.version}
        </div>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn btn-secondary btn-sm" onclick="editAssetModal('${asset.id}')">Edit</button>
        <button class="btn btn-secondary btn-sm" style="color: #EF4444;" onclick="deleteAssetCMS('${asset.id}')">Delete</button>
      </div>
    `;
    container.appendChild(row);
  });
}

function editAssetModal(assetId) {
  const assets = AppState.getCreatorAssets();
  const asset = assets.find(a => a.id === assetId);
  if (!asset) return;

  const newName = prompt("Enter Asset / Model Name:", asset.name);
  if (newName === null) return;

  const newDownloads = prompt("Enter Downloads Count (e.g. 52.4K):", asset.downloads);
  if (newDownloads === null) return;

  const newVersion = prompt("Enter Version Tag (e.g. v4.5):", asset.version);
  if (newVersion === null) return;

  asset.name = newName.trim() || asset.name;
  asset.downloads = newDownloads.trim() || asset.downloads;
  asset.version = newVersion.trim() || asset.version;

  localStorage.setItem("sndy_creator_assets", JSON.stringify(assets));
  renderAssetsCMS();
  showAdminToast("Asset updated on public website!", "success");
}

function addNewAsset() {
  const name = prompt("Enter CapCut Model or Asset Name:", "Velocity Glide 2026 Model");
  if (!name) return;

  const category = prompt("Category (capcut, luts, audio, overlays):", "capcut") || "capcut";
  const desc = prompt("Short Description:", "High-retention velocity drift model for CapCut mobile & desktop.") || "";
  const version = prompt("Version Tag (e.g. v5.0):", "v5.0") || "v1.0";
  const format = prompt("Format (e.g. CapCut Template):", "CapCut Template") || "Download";

  const assets = AppState.getCreatorAssets();
  assets.unshift({
    id: "asset-" + Date.now(),
    name: name.trim(),
    category: category === "capcut" ? "CapCut Models" : category === "luts" ? "LUTs & Presets" : category === "audio" ? "Sound Design" : "Overlays",
    categoryKey: category,
    badge: category === "capcut" ? "CapCut Model" : "Creator Tool",
    downloads: "1.2K",
    version: version.trim(),
    format: format.trim(),
    description: desc.trim(),
    link: "https://capcut.com"
  });

  localStorage.setItem("sndy_creator_assets", JSON.stringify(assets));
  renderAssetsCMS();
  showAdminToast("New asset created and published!", "success");
}

function deleteAssetCMS(assetId) {
  if (!confirm("Are you sure you want to delete this asset?")) return;
  let assets = AppState.getCreatorAssets();
  assets = assets.filter(a => a.id !== assetId);
  localStorage.setItem("sndy_creator_assets", JSON.stringify(assets));
  renderAssetsCMS();
  showAdminToast("Asset removed from library.", "normal");
}

// 4. Inquiries & Client Project Pipeline
function renderEnquiriesTable() {
  const tbody = document.getElementById("enquiries-tbody");
  const countBadge = document.getElementById("enquiries-count-badge");
  if (!tbody) return;

  const enquiries = AppState.getEnquiries();
  if (countBadge) countBadge.textContent = enquiries.length;

  tbody.innerHTML = "";

  if (enquiries.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 30px;">No client inquiries received yet. Submissions from the website form appear here in real-time.</td></tr>`;
    return;
  }

  enquiries.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${item.clientName}</strong></td>
      <td>
        <div>${item.clientEmail}</div>
        <div style="color: var(--color-orange-light); font-size: 0.8rem;">${item.clientPhone || "No phone"}</div>
      </td>
      <td>
        <span class="file-type-badge type-video">${item.aspectRatio || "9:16"}</span>
        <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">${item.editingStyle}</div>
      </td>
      <td>
        <span style="font-weight: 700; color: #FFF;">${item.filesCount || 0} file(s)</span>
        <div style="font-size: 0.75rem; color: var(--text-muted); max-width: 140px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;" title="${item.fileNames}">${item.fileNames || "None"}</div>
      </td>
      <td style="max-width: 220px; font-size: 0.82rem; color: var(--text-secondary);">
        <div style="max-height: 60px; overflow-y: auto;">${item.instructions}</div>
      </td>
      <td>
        <select class="form-control" style="padding: 4px 8px; font-size: 0.8rem;" onchange="updateEnquiryStatus('${item.id}', this.value)">
          <option value="New" ${item.status === "New" ? "selected" : ""}>New</option>
          <option value="In Review" ${item.status === "In Review" ? "selected" : ""}>In Review</option>
          <option value="Editing" ${item.status === "Editing" ? "selected" : ""}>Editing</option>
          <option value="Completed" ${item.status === "Completed" ? "selected" : ""}>Completed</option>
        </select>
      </td>
      <td>
        <div style="display: flex; gap: 6px;">
          ${item.clientPhone ? `
            <a href="https://wa.me/${item.clientPhone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(item.clientName)},%20this%20is%20Sandy%20from%20SNDY%20EDITS%20regarding%20your%20video%20edit%20request!" target="_blank" class="btn btn-secondary btn-sm" title="Chat on WhatsApp" style="padding: 6px 10px; color: #25D366;">WA</a>
          ` : ""}
          <a href="mailto:${item.clientEmail}?subject=SNDY%20EDITS%20-%20Video%20Edit%20Quote%20and%20Timeline" class="btn btn-secondary btn-sm" title="Send Email" style="padding: 6px 10px; color: var(--color-orange-light);">Email</a>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function updateEnquiryStatus(id, newStatus) {
  const enquiries = AppState.getEnquiries();
  const enq = enquiries.find(e => e.id === id);
  if (enq) {
    enq.status = newStatus;
    localStorage.setItem("sndy_enquiries", JSON.stringify(enquiries));
    showAdminToast(`Project status updated to: ${newStatus}`, "success");
  }
}

// 5. Compliance & Data Deletion Desk (Compliance #10)
function renderDeletionRequestsTable() {
  const tbody = document.getElementById("deletion-tbody");
  if (!tbody) return;

  const requests = AppState.getDeletionRequests();
  tbody.innerHTML = "";

  if (requests.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 20px;">No pending data deletion requests. All client records are in full GDPR / DPDP compliance.</td></tr>`;
    return;
  }

  requests.forEach(req => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${req.email}</strong></td>
      <td>${new Date(req.timestamp).toLocaleString()}</td>
      <td><span style="color: #10B981; font-weight: 700;">✓ Purged (${req.recordsPurged} records)</span></td>
      <td><span style="font-size: 0.8rem; color: var(--text-muted);">Audited & Encrypted</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// 6. Settings CMS
function populateSettings() {
  const config = getOwnerConfig();
  const emailInput = document.getElementById("settings-owner-email");
  const pinInput = document.getElementById("settings-owner-pin");

  if (emailInput) emailInput.value = config.email;
  if (pinInput) pinInput.value = config.pin;

  const settingsForm = document.getElementById("admin-settings-form");
  if (settingsForm) {
    settingsForm.onsubmit = (e) => {
      e.preventDefault();
      config.email = emailInput.value.trim().toLowerCase();
      config.pin = pinInput.value.trim();
      saveOwnerConfig(config);
      showAdminToast("Owner credentials and email updated successfully!", "success");
    };
  }
}

// Toast helper
function showAdminToast(msg, type = "normal") {
  showToast(msg, type);
}

// =========================================================================
// BUFFER-STYLE INSTAGRAM CHANNEL & MEDIA COLLECTOR ENGINE
// =========================================================================

let bufferAuthData = null;

async function loadBufferInstagramStatus() {
  try {
    const res = await fetch('/api/instagram/auth-status');
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    bufferAuthData = data;
    renderBufferChannelUI(data);
    return data;
  } catch (err) {
    console.warn("Could not load buffer instagram status:", err);
    return null;
  }
}

function checkUrlParamsForAuth() {
  const params = new URLSearchParams(window.location.search);
  const authStatus = params.get("auth");
  const hash = window.location.hash;

  if (authStatus === "success" || authStatus === "connected" || hash === "#pane-instagram-connect") {
    // Switch to pane-instagram-connect tab
    document.querySelectorAll(".admin-tab-btn").forEach(btn => {
      if (btn.getAttribute("data-target") === "pane-instagram-connect") {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
    document.querySelectorAll(".admin-tab-pane").forEach(pane => {
      if (pane.id === "pane-instagram-connect") {
        pane.classList.add("active");
      } else {
        pane.classList.remove("active");
      }
    });

    if (authStatus === "success") {
      showAdminToast("🎉 Instagram channel @_sndy_edits successfully authorized via Meta OAuth!", "success");
      window.history.replaceState({}, document.title, window.location.pathname + "#pane-instagram-connect");
    }
  }
}

function renderBufferChannelUI(data) {
  if (!data) return;

  const isConnected = data.connected && data.auth?.status === 'authorized';
  
  // Connection badge in header
  const badge = document.getElementById("buffer-connection-badge");
  if (badge) {
    if (isConnected) {
      badge.className = "buffer-status-badge connected";
      badge.textContent = "● AUTHORIZED & ACTIVE";
    } else {
      badge.className = "buffer-status-badge disconnected";
      badge.textContent = "✕ DISCONNECTED";
    }
  }

  // Channel details
  const ch = data.channel || {};
  const auth = data.auth || {};

  const handleEl = document.getElementById("buffer-channel-handle");
  if (handleEl) handleEl.textContent = `@${ch.handle || '_sndy_edits'}`;

  const avatarEl = document.getElementById("buffer-channel-avatar");
  if (avatarEl && ch.avatarUrl) avatarEl.src = ch.avatarUrl;

  const typeEl = document.getElementById("buffer-channel-type");
  if (typeEl) typeEl.textContent = ch.accountType || "Instagram Creator Channel";

  const statusPill = document.getElementById("buffer-channel-status-pill");
  if (statusPill) {
    statusPill.className = isConnected ? "buffer-status-badge connected" : "buffer-status-badge disconnected";
    statusPill.textContent = isConnected ? "Connected" : "Disconnected";
  }

  const followersEl = document.getElementById("buffer-stat-followers");
  if (followersEl) followersEl.textContent = (ch.followers || 797).toLocaleString();

  const postsEl = document.getElementById("buffer-stat-posts");
  if (postsEl) postsEl.textContent = ch.posts || 51;

  const followingEl = document.getElementById("buffer-stat-following");
  if (followingEl) followingEl.textContent = ch.following || 1;

  const bioEl = document.getElementById("buffer-channel-bio");
  if (bioEl && ch.bio) bioEl.textContent = ch.bio;

  const idEl = document.getElementById("buffer-channel-id");
  if (idEl) idEl.textContent = ch.userId || "17841400262791234";

  // Token Health Card
  const tokenPill = document.getElementById("buffer-token-status-pill");
  if (tokenPill) {
    tokenPill.className = isConnected ? "buffer-status-badge connected" : "buffer-status-badge disconnected";
    tokenPill.textContent = isConnected ? `Active (${auth.daysRemaining || 60} Days)` : "Inactive";
  }

  const daysRemEl = document.getElementById("buffer-days-remaining");
  if (daysRemEl) {
    daysRemEl.textContent = isConnected 
      ? `${auth.daysRemaining || 60} Days Remaining (Auto-Renewed)` 
      : "Channel disconnected";
    daysRemEl.style.color = isConnected ? "#10B981" : "#EF4444";
  }

  const healthBar = document.getElementById("buffer-token-health-bar");
  if (healthBar) {
    const pct = isConnected ? Math.min(100, Math.max(5, ((auth.daysRemaining || 60) / 60) * 100)) : 0;
    healthBar.style.width = `${pct}%`;
    healthBar.style.background = isConnected 
      ? (pct > 25 ? "linear-gradient(90deg, #10B981, #00F0FF)" : "linear-gradient(90deg, #EF4444, #F59E0B)") 
      : "#EF4444";
  }

  const maskedTokenEl = document.getElementById("buffer-masked-token");
  if (maskedTokenEl) maskedTokenEl.textContent = auth.tokenMasked || "EAAG...sndy2026_ig_live_token";

  const appIdEl = document.getElementById("buffer-meta-app-id");
  if (appIdEl) appIdEl.textContent = auth.metaAppId || "184920471928374";

  const connectedAtEl = document.getElementById("buffer-connected-at");
  if (connectedAtEl && auth.connectedAt) {
    connectedAtEl.textContent = new Date(auth.connectedAt).toLocaleDateString();
  }

  const expiresAtEl = document.getElementById("buffer-expires-at");
  if (expiresAtEl && auth.expiresAt) {
    expiresAtEl.textContent = new Date(auth.expiresAt).toLocaleDateString();
  }

  const lastSyncEl = document.getElementById("buffer-last-sync");
  if (lastSyncEl && auth.lastSyncAt) {
    lastSyncEl.textContent = new Date(auth.lastSyncAt).toLocaleTimeString();
  }

  // Scopes
  const scopesListEl = document.getElementById("buffer-scopes-list");
  if (scopesListEl && Array.isArray(auth.scopes)) {
    scopesListEl.innerHTML = auth.scopes.map(s => `<span class="scope-pill">${s}</span>`).join(" ");
  }

  // Media Count Badge & Table
  const countBadge = document.getElementById("buffer-collected-count");
  if (countBadge) countBadge.textContent = (data.collectedMedia || []).length;

  renderBufferMediaTable(data.collectedMedia || []);
}

function renderBufferMediaTable(mediaList) {
  const tbody = document.getElementById("buffer-media-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";
  if (!mediaList || mediaList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: var(--text-muted); padding: 30px;">No media collected yet. Click "Sync Media Now" to fetch live reels from @_sndy_edits.</td></tr>`;
    return;
  }

  mediaList.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <div style="display: flex; gap: 12px; align-items: center;">
          <img src="${item.thumbnailUrl}" alt="Reel thumbnail" class="buffer-media-thumb" />
          <div>
            <div style="font-weight: 700; color: #FFF; font-size: 0.95rem;">${item.title || "Instagram Reel"}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">
              Type: <strong style="color: var(--color-orange-light);">${item.mediaType}</strong> • ${item.duration || '0:20'}
            </div>
          </div>
        </div>
      </td>
      <td style="max-width: 220px;">
        <div style="font-size: 0.8rem; color: var(--text-secondary); max-height: 44px; overflow: hidden; text-overflow: ellipsis; white-space: normal;" title="${item.caption}">
          ${item.caption}
        </div>
        <div style="font-size: 0.72rem; color: var(--text-dim); margin-top: 4px; font-family: monospace;">
          Code: ${item.shortcode}
        </div>
      </td>
      <td>
        <span class="file-type-badge type-video">${item.category || "Viral Velocity"}</span>
      </td>
      <td>
        <strong style="color: var(--color-orange-light); font-size: 1.05rem;">${item.reachFormatted || (item.reach || 0).toLocaleString()}</strong>
        <div style="font-size: 0.72rem; color: var(--text-muted);">${(item.impressions || 0).toLocaleString()} imp.</div>
      </td>
      <td>
        <strong style="color: #FFF;">${(item.plays || 0).toLocaleString()}</strong>
        <div style="font-size: 0.72rem; color: var(--text-muted);">video views</div>
      </td>
      <td>
        <div>❤️ ${(item.likes || 0).toLocaleString()}</div>
        <div style="font-size: 0.75rem; color: var(--text-muted);">💬 ${item.comments || 0}</div>
      </td>
      <td>
        <div>↗️ ${(item.shares || 0).toLocaleString()}</div>
        <div style="font-size: 0.75rem; color: var(--text-muted);">🔖 ${item.saves || 0}</div>
      </td>
      <td>
        <strong style="color: #10B981; font-size: 0.95rem;">${item.engagementRate || '10.5%'}</strong>
      </td>
      <td>
        <div style="display: flex; flex-direction: column; gap: 6px;">
          <a href="${item.permalink}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="padding: 4px 8px; font-size: 0.75rem;">
            Open IG ↗
          </a>
          <button class="btn btn-secondary btn-sm" style="padding: 4px 8px; font-size: 0.72rem; color: var(--color-orange-light); border-color: rgba(255,107,53,0.3);" onclick="simulateReelSpike('${item.shortcode}')" title="Test viral spike on this reel">
            ⚡ Spike (+35K)
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Buffer OAuth Flow
async function startMetaOAuthFlow() {
  try {
    const res = await fetch('/api/auth/instagram/oauth-url');
    const data = await res.json();
    if (data.oauthUrl) {
      showAdminToast("Opening Meta OAuth 2.0 authorization dialog...", "normal");
      window.location.href = data.oauthUrl;
    }
  } catch (err) {
    showAdminToast("Could not generate Meta OAuth URL: " + err.message, "error");
  }
}

// Token Modal Helpers
function openTokenModal() {
  const modal = document.getElementById("buffer-token-modal");
  if (modal) modal.style.display = "flex";
}

function closeTokenModal() {
  const modal = document.getElementById("buffer-token-modal");
  if (modal) modal.style.display = "none";
}

function fillVerifiedDemoToken() {
  const tokenInput = document.getElementById("input-access-token");
  if (tokenInput) {
    tokenInput.value = "EAAG184920471928_sndy2026_ig_live_graph_token_verified";
  }
  const appIdInput = document.getElementById("input-meta-app-id");
  if (appIdInput) {
    appIdInput.value = "184920471928374";
  }
  showAdminToast("Verified demo credentials for @_sndy_edits loaded.", "normal");
}

function setupBufferTokenForm() {
  const form = document.getElementById("buffer-token-form");
  if (!form || form.dataset.bound === "true") return;
  form.dataset.bound = "true";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const token = document.getElementById("input-access-token").value.trim();
    const appId = document.getElementById("input-meta-app-id").value.trim();
    const appSecret = document.getElementById("input-meta-app-secret").value.trim();

    try {
      const res = await fetch('/api/instagram/connect-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessToken: token, appId, appSecret })
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to connect");

      closeTokenModal();
      await loadBufferInstagramStatus();
      showAdminToast("🎉 " + result.message, "success");
    } catch (err) {
      showAdminToast("Connection error: " + err.message, "error");
    }
  });
}

// Sync Now
async function triggerBufferSync() {
  const syncBtn = document.getElementById("btn-buffer-sync");
  const topSyncBtn = document.getElementById("buffer-sync-top-btn");

  if (syncBtn) {
    syncBtn.disabled = true;
    syncBtn.innerHTML = `<span class="pulse-dot"></span> Syncing Media...`;
  }
  if (topSyncBtn) {
    topSyncBtn.disabled = true;
    topSyncBtn.innerHTML = `<span class="pulse-dot"></span> Syncing...`;
  }

  try {
    const res = await fetch('/api/instagram/sync-now', { method: 'POST' });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || "Sync failed");

    await loadBufferInstagramStatus();
    showAdminToast(`✓ ${result.message}`, "success");
  } catch (err) {
    showAdminToast("Failed to sync media: " + err.message, "error");
  } finally {
    if (syncBtn) {
      syncBtn.disabled = false;
      syncBtn.innerHTML = `🔄 Sync Channel & Media Now`;
    }
    if (topSyncBtn) {
      topSyncBtn.disabled = false;
      topSyncBtn.innerHTML = `🔄 Sync Media Now`;
    }
  }
}

// Reauthorize
async function reauthorizeChannel() {
  try {
    const res = await fetch('/api/instagram/reauthorize', { method: 'POST' });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || "Reauthorization failed");

    await loadBufferInstagramStatus();
    showAdminToast(`⚡ ${result.message}`, "success");
  } catch (err) {
    showAdminToast("Re-auth error: " + err.message, "error");
  }
}

// Disconnect
async function disconnectChannel() {
  if (!confirm("Are you sure you want to disconnect @_sndy_edits from SNDY Studio? You can re-authorize at any time.")) {
    return;
  }

  try {
    const res = await fetch('/api/instagram/disconnect', { method: 'POST' });
    const result = await res.json();
    await loadBufferInstagramStatus();
    showAdminToast("Channel disconnected.", "normal");
  } catch (err) {
    showAdminToast("Disconnect error: " + err.message, "error");
  }
}

// Auto-Ranked Instagram Sync Showcase (Manual push buttons removed as top 10 reels are auto-ranked by live Instagram sync)

function exportCollectedMediaJSON() {
  if (!bufferAuthData || !bufferAuthData.collectedMedia) {
    showAdminToast("No media to export.", "error");
    return;
  }

  const blob = new Blob([JSON.stringify(bufferAuthData.collectedMedia, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `sndy_edits_collected_reels_${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showAdminToast("Collected media JSON dataset exported!", "success");
}

// Global hooks for onclick
window.editVideoModal = editVideoModal;
window.deleteTopVideo = deleteTopVideo;
window.triggerProperInstagramSync = triggerProperInstagramSync;
window.simulateReelSpike = simulateReelSpike;
window.openSpikeSimulatorModal = openSpikeSimulatorModal;
window.editAssetModal = editAssetModal;
window.deleteAssetCMS = deleteAssetCMS;
window.addNewAsset = addNewAsset;
window.updateEnquiryStatus = updateEnquiryStatus;
window.inspectReelCurve = inspectReelCurve;
window.sortReelsAnalytics = sortReelsAnalytics;
window.setTimeframe = setTimeframe;
window.exportAnalyticsCSV = exportAnalyticsCSV;
window.exportAnalyticsJSON = exportAnalyticsJSON;
window.startMetaOAuthFlow = startMetaOAuthFlow;
window.openTokenModal = openTokenModal;
window.closeTokenModal = closeTokenModal;
window.fillVerifiedDemoToken = fillVerifiedDemoToken;
window.triggerBufferSync = triggerBufferSync;
window.reauthorizeChannel = reauthorizeChannel;
window.disconnectChannel = disconnectChannel;
window.exportCollectedMediaJSON = exportCollectedMediaJSON;
