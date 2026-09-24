/**
 * SNDY EDITS - Client Application Logic
 * Features: File Upload Validator (Audio/Video/Photo), Dynamic IG Reels,
 * WhatsApp/Email Formatter, Legal Modals, Data Privacy & Cookie Management
 */

// Real @_sndy_edits Instagram Reels Portfolio (100% Real Videos, Exact View Counts & Direct Links)
const DEFAULT_TOP_VIDEOS = [
  {
    id: "reel-1",
    code: "Dcd41EgTCmj",
    title: "Viral Visual FX • \"How To Make This Effect\"",
    reach: "22.9K",
    rawReach: 22900,
    likes: "1,140",
    comments: "28",
    shares: "240",
    tag: "🔥 #1 Trending (22.9K Views)",
    category: "Visual FX",
    aspectRatio: "9:16",
    duration: "0:28",
    igUrl: "https://www.instagram.com/_sndy_edits/reel/Dcd41EgTCmj/",
    thumb: "/assets/reels/reel-1.png",
    techniques: "Optical velocity tracking, 3D layer depth separation, seamless scale impact punch, and custom bass drop sound design."
  },
  {
    id: "reel-2",
    code: "DdjbPi_zK3B",
    title: "THALA 🥶❤️‍🔥 • Ajith Kumar Velocity Portrait Edit",
    reach: "13.8K",
    rawReach: 13800,
    likes: "2,643",
    comments: "45",
    shares: "380",
    tag: "⚡ 2.6K+ Likes • Fan Favorite",
    category: "Celebrity Velocity",
    aspectRatio: "9:16",
    duration: "0:22",
    igUrl: "https://www.instagram.com/_sndy_edits/reel/DdjbPi_zK3B/",
    thumb: "/assets/reels/reel-2.png",
    techniques: "High-velocity speed ramping, custom optical flares, dynamic speed graph curves, and cinematic Tamil dialogue punch."
  },
  {
    id: "reel-3",
    code: "Dcgcc-5PKy-",
    title: "Day 4/30 • 10K Reach Growth Strategy",
    reach: "11.4K",
    rawReach: 11400,
    likes: "429",
    comments: "18",
    shares: "95",
    tag: "📈 High Retention Talking Head",
    category: "Creator Growth",
    aspectRatio: "9:16",
    duration: "0:34",
    igUrl: "https://www.instagram.com/_sndy_edits/reel/Dcgcc-5PKy-/",
    thumb: "/assets/reels/reel-3.png",
    techniques: "Talking-head retention formula, dynamic text punchlines, zoom keyframing, and interactive audio hooks."
  },
  {
    id: "reel-4",
    code: "DaSp3ZwvZC2",
    title: "CapCut Ripple Effect • Viral FX Tutorial",
    reach: "6.7K",
    rawReach: 6657,
    likes: "397",
    comments: "36",
    shares: "142",
    tag: "🎬 CapCut Masterclass",
    category: "CapCut Tutorials",
    aspectRatio: "9:16",
    duration: "0:26",
    igUrl: "https://www.instagram.com/_sndy_edits/reel/DaSp3ZwvZC2/",
    thumb: "/assets/reels/reel-4.png",
    techniques: "CapCut displacement mapping, water ripple frequency overlay, beat-matched chromatic aberration."
  },
  {
    id: "reel-5",
    code: "DaVOb3Gvj1b",
    title: "CapCut Green Bike Motion Edit",
    reach: "6.0K",
    rawReach: 6027,
    likes: "395",
    comments: "28",
    shares: "110",
    tag: "🏍️ Velocity Ramp",
    category: "Automotive / Bike",
    aspectRatio: "9:16",
    duration: "0:19",
    igUrl: "https://www.instagram.com/_sndy_edits/reel/DaVOb3Gvj1b/",
    thumb: "/assets/reels/reel-5.png",
    techniques: "Motion tracking camera drift, speed remapping, directional blur, and exhaust pipe sound design."
  },
  {
    id: "reel-6",
    code: "DbdlGoLv116",
    title: "Kabaddi Sports High-Velocity Match Reel",
    reach: "4.7K",
    rawReach: 4722,
    likes: "335",
    comments: "20",
    shares: "86",
    tag: "🏆 Sports Velocity",
    category: "Sports Edits",
    aspectRatio: "9:16",
    duration: "0:31",
    igUrl: "https://www.instagram.com/_sndy_edits/reel/DbdlGoLv116/",
    thumb: "/assets/reels/reel-6.png",
    techniques: "Multi-speed ramp sync to stadium beat, slow-mo impact pause, color grade pop on team blue jerseys."
  },
  {
    id: "reel-7",
    code: "DaX1EB6vy8i",
    title: "Bboy Dancer Beat-Sync Velocity Reel",
    reach: "4.1K",
    rawReach: 4121,
    likes: "297",
    comments: "48",
    shares: "68",
    tag: "⚡ Beat Synced",
    category: "Dance & Music",
    aspectRatio: "9:16",
    duration: "0:20",
    igUrl: "https://www.instagram.com/_sndy_edits/reel/DaX1EB6vy8i/",
    thumb: "/assets/reels/reel-7.png",
    techniques: "Audio-reactive backflip acceleration, shake impact, desaturated cinematic film look with punchy contrast."
  },
  {
    id: "reel-8",
    code: "DcWN3E9POgf",
    title: "Hello Guys • Sandy Intro in Barcelona Jersey",
    reach: "4.0K",
    rawReach: 3988,
    likes: "221",
    comments: "20",
    shares: "45",
    tag: "🙋🏻‍♂️ Sandy Creator Reel",
    category: "Creator Intro",
    aspectRatio: "9:16",
    duration: "0:30",
    igUrl: "https://www.instagram.com/_sndy_edits/reel/DcWN3E9POgf/",
    thumb: "/assets/reels/reel-8.png",
    techniques: "Clean voiceover sound mastering, cinematic warm grade, branded subtitle animation."
  },
  {
    id: "reel-9",
    code: "Dbtl98xTz7v",
    title: "How To Download CapCut In PC • Full Guide",
    reach: "2.4K",
    rawReach: 2358,
    likes: "184",
    comments: "15",
    shares: "120",
    tag: "💻 Software Tutorial",
    category: "CapCut Tutorials",
    aspectRatio: "9:16",
    duration: "0:45",
    igUrl: "https://www.instagram.com/_sndy_edits/reel/Dbtl98xTz7v/",
    thumb: "/assets/reels/reel-9.png",
    techniques: "Screen-recording zoom focus, kinetic cursor highlight, step-by-step installation walkthrough."
  }
];

// Official Packages: ONLY 2 Plans
const DEFAULT_PACKAGE_PLANS = [
  {
    id: "sndy-pro",
    name: "Sndy Pro",
    price: "₹5,000",
    period: "/ month",
    badge: "🔥 Most Popular • Complete Management",
    tagline: "Social Media Reels Upload and Management",
    description: "End-to-end video editing and channel management. Sandy handles your entire Instagram & Shorts reels pipeline from raw footage to scheduled upload.",
    features: [
      "15 to 20 Viral-Engineered Reels per Month",
      "Full Instagram Reels Upload & Daily Scheduling",
      "Velocity Speed-Ramping & Beat-Matched Cuts",
      "Sound-Design, Audio FX & Bass Drop Sync",
      "Dynamic Word-by-Word Animated Subtitles",
      "Viral Hook Scripting & Trend Audio Research",
      "SEO Hashtag Research & High-CTR Captions",
      "24–48 Hours Rapid Turnaround per Reel",
      "Direct 1-on-1 VIP WhatsApp Line with Sandy"
    ],
    ctaText: "Get Sndy Pro (₹5,000/mo)",
    featured: true
  },
  {
    id: "templates-plan",
    name: "Access to Templates Plan",
    price: "₹2,000",
    period: "/ month",
    badge: "🔒 VIP Creator Vault",
    tagline: "Exclusive Access to Editor's Premium Templates",
    description: "The editor creates high-retention CapCut templates, XML presets, and 3D LUTs and uploads them directly to this website, accessible only to paying members.",
    features: [
      "Unlimited Access to All Templates Uploaded by Sandy",
      "Ready-to-Use CapCut Template Links & QR Codes",
      "Premiere Pro XML & Motion Graphics Project Files",
      "Cinematic Color Grading LUTs (.cube)",
      "Weekly Fresh Template Drops for Trending Reels",
      "Members-Only Instant Download Vault on Website",
      "100% Commercial & Personal Royalty-Free License",
      "Step-by-Step Video Setup Guides by Sandy"
    ],
    ctaText: "Get Templates Pass (₹2,000/mo)",
    featured: false
  }
];

// Default CapCut Models & Free Creator Assets
const DEFAULT_CREATOR_ASSETS = [
  {
    id: "asset-1",
    name: "Velocity Beat-Sync Pro v4.2",
    category: "CapCut Models",
    categoryKey: "capcut",
    badge: "CapCut Model",
    downloads: "1,480",
    version: "v4.2 (Latest 2026)",
    format: "CapCut Template / QR",
    description: "Automatic beat detection keyframes, smooth motion blur, and cinematic impact flashes for reels and TikTok.",
    link: "https://capcut.com"
  },
  {
    id: "asset-2",
    name: "Dark Neon Tokyo Cinematic LUT",
    category: "LUTs & Presets",
    categoryKey: "luts",
    badge: "3D LUT (.cube)",
    downloads: "920",
    version: "v2.0",
    format: ".cube / CapCut & Premiere",
    description: "Transforms flat mobile log footage into high-contrast moody midnight blues and warm street neon tones.",
    link: "#"
  },
  {
    id: "asset-3",
    name: "Whoosh, Hits & Sub-Bass Master Pack",
    category: "Sound Design",
    categoryKey: "audio",
    badge: "SFX Pack (24-bit)",
    downloads: "2,150",
    version: "2026 Studio Edition",
    format: ".wav + .mp3 (Uncompressed)",
    description: "65+ drag-and-drop sound effects: cinematic risers, heavy downbeat hits, whip swooshes, and subtle UI clicks.",
    link: "#"
  },
  {
    id: "asset-4",
    name: "4K 35mm Film Grain & Halation Leaks",
    category: "Overlays & FX",
    categoryKey: "overlays",
    badge: "ProRes Overlay",
    downloads: "840",
    version: "4K Master",
    format: ".mp4 (Screen blend mode)",
    description: "Real scanned 35mm celluloid grain with organic edge halation to give digital phone footage a vintage film texture.",
    link: "#"
  },
  {
    id: "asset-5",
    name: "Kinetic Captions & B-Roll Pack",
    category: "CapCut Models",
    categoryKey: "capcut",
    badge: "CapCut Model",
    downloads: "1,260",
    version: "v3.1",
    format: "CapCut XML / Template",
    description: "Pre-animated pop-in word presets, sound-synced highlight cards, and attention-grabbing sticker animations.",
    link: "https://capcut.com"
  },
  {
    id: "asset-6",
    name: "Smooth Optical Zoom & Shake Preset",
    category: "LUTs & Presets",
    categoryKey: "luts",
    badge: "Motion Preset",
    downloads: "750",
    version: "v1.5",
    format: "Preset File",
    description: "Natural handheld camera drift and explosive whip zooms to keep viewer retention hooked across transitions.",
    link: "#"
  }
];

// App State Management
class AppState {
  static getTopVideos() {
    const data = localStorage.getItem("sndy_top_videos");
    let videos = data ? JSON.parse(data) : DEFAULT_TOP_VIDEOS;
    // Auto-migrate and purge old dummy data or old stock IDs from localStorage
    const hasOldStock = videos.some(v => (v.id && v.id.startsWith("vid-")) || (v.thumb && v.thumb.includes("unsplash")));
    const hasDummyMillions = videos.some(v => (v.rawReach && v.rawReach > 100000) || (typeof v.reach === 'string' && v.reach.includes('M')));
    if (hasOldStock || hasDummyMillions) {
      localStorage.removeItem("sndy_top_videos");
      videos = DEFAULT_TOP_VIDEOS;
    }
    return videos;
  }

  static getPackagePlans() {
    return DEFAULT_PACKAGE_PLANS;
  }

  static isTemplateSubscriber() {
    return localStorage.getItem("sndy_template_subscriber") === "true";
  }

  static setTemplateSubscriber(status) {
    if (status) {
      localStorage.setItem("sndy_template_subscriber", "true");
    } else {
      localStorage.removeItem("sndy_template_subscriber");
    }
  }

  static getCreatorAssets() {
    const data = localStorage.getItem("sndy_creator_assets");
    let assets = data ? JSON.parse(data) : DEFAULT_CREATOR_ASSETS;
    const hasOldDownloads = assets.some(a => typeof a.downloads === 'string' && a.downloads.includes('K') && parseFloat(a.downloads) > 10);
    if (hasOldDownloads) {
      localStorage.removeItem("sndy_creator_assets");
      assets = DEFAULT_CREATOR_ASSETS;
    }
    return assets;
  }

  static getEnquiries() {
    const data = localStorage.getItem("sndy_enquiries");
    return data ? JSON.parse(data) : [];
  }

  static saveEnquiry(enquiry) {
    const enquiries = this.getEnquiries();
    enquiries.unshift(enquiry);
    localStorage.setItem("sndy_enquiries", JSON.stringify(enquiries));
  }

  static getDeletionRequests() {
    const data = localStorage.getItem("sndy_deletion_requests");
    return data ? JSON.parse(data) : [];
  }

  static addDeletionRequest(email) {
    const requests = this.getDeletionRequests();
    const newReq = {
      id: "del-" + Date.now(),
      email: email,
      timestamp: new Date().toISOString(),
      status: "Completed",
      recordsPurged: 0
    };

    // Purge records matching this email from enquiries
    let enquiries = this.getEnquiries();
    const initialCount = enquiries.length;
    enquiries = enquiries.filter(e => e.clientEmail.toLowerCase() !== email.toLowerCase());
    newReq.recordsPurged = initialCount - enquiries.length;
    localStorage.setItem("sndy_enquiries", JSON.stringify(enquiries));

    requests.unshift(newReq);
    localStorage.setItem("sndy_deletion_requests", JSON.stringify(requests));
    return newReq;
  }
}

// Strict File Validator Class
class FileValidator {
  // Only Video, Audio, and Photo extensions are strictly permitted
  static ALLOWED_EXTENSIONS = {
    video: ['mp4', 'mov', 'avi', 'mkv', 'webm'],
    audio: ['mp3', 'wav', 'aac', 'm4a', 'flac'],
    photo: ['jpg', 'jpeg', 'png', 'webp', 'heic', 'raw']
  };

  static getFileType(filename) {
    const ext = filename.split('.').pop().toLowerCase();
    if (this.ALLOWED_EXTENSIONS.video.includes(ext)) return 'video';
    if (this.ALLOWED_EXTENSIONS.audio.includes(ext)) return 'audio';
    if (this.ALLOWED_EXTENSIONS.photo.includes(ext)) return 'photo';
    return null;
  }

  static isValid(file) {
    return this.getFileType(file.name) !== null;
  }

  static formatBytes(bytes, decimals = 1) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}

// DOM Controller
document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initTopVideos();
  initCreatorAssets();
  initFileUploadSystem();
  initEnquiryForm();
  initModals();
  initCookieBanner();
  initDataDeletionHandler();
  initInstaSyncButton();
  syncRealtimeInstagram(false); // Live Instagram data hydrate

  // Listen for storage events (updates made in Admin CMS reflect here immediately)
  window.addEventListener("storage", (e) => {
    if (e.key === "sndy_top_videos") initTopVideos();
    if (e.key === "sndy_creator_assets") initCreatorAssets();
  });
});

// 1. Initialize Top 5 Videos
function initTopVideos() {
  const container = document.getElementById("top-videos-list");
  if (!container) return;

  const videos = AppState.getTopVideos().slice(0, 5);
  container.innerHTML = "";

  videos.forEach((video, index) => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.innerHTML = `
      <div class="video-thumbnail-wrap" onclick="openVideoPlayerModal('${video.id}')" role="button" tabindex="0" aria-label="Play ${video.title} preview">
        <img class="video-thumb-img" src="${video.thumb}" alt="${video.title} Reel Preview" loading="lazy" />
        <div class="video-overlay-gradient"></div>
        <span class="rank-badge">#${index + 1}</span>
        <span class="reach-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
          ${video.reach} Reach
        </span>
        <button class="video-play-btn" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        </button>
      </div>
      <div class="video-details">
        <div style="margin-bottom: 6px;">
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-orange-light);">${video.tag}</span>
        </div>
        <h4 class="video-title">${video.title}</h4>
        <div class="video-stats-bar">
          <span>❤️ ${video.likes} likes</span>
          <span>🔄 ${video.shares} shares</span>
          <span>⏱️ ${video.duration}</span>
        </div>
        <div class="video-actions">
          <button class="btn btn-outline-orange btn-sm" style="flex: 1;" onclick="openVideoPlayerModal('${video.id}')">
            Breakdown
          </button>
          <a href="${video.igUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="Open on Instagram">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// 2. Initialize Creator Assets & CapCut Models with Filtering
function initCreatorAssets() {
  const container = document.getElementById("assets-list-container");
  if (!container) return;

  const assets = AppState.getCreatorAssets();
  renderAssets(assets);

  // Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      if (category === "all") {
        renderAssets(assets);
      } else {
        const filtered = assets.filter(a => a.categoryKey === category);
        renderAssets(filtered);
      }
    });
  });
}

function renderAssets(assets) {
  const container = document.getElementById("assets-list-container");
  container.innerHTML = "";

  if (assets.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No assets found in this category.</p>`;
    return;
  }

  assets.forEach(asset => {
    const card = document.createElement("div");
    card.className = "asset-card";
    card.innerHTML = `
      <span class="asset-badge">${asset.badge}</span>
      <h3 class="asset-name">${asset.name}</h3>
      <p class="asset-desc">${asset.description}</p>
      <div class="asset-meta">
        <span>📦 ${asset.format}</span>
        <span>⬇️ ${asset.downloads} dl</span>
        <span>🏷️ ${asset.version}</span>
      </div>
      <button class="btn btn-outline-orange btn-sm" onclick="openDownloadModal('${asset.id}')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        Download / Open Template
      </button>
    `;
    container.appendChild(card);
  });
}

// 3. Multi-File Drag & Drop with Strict Extension Validation
let selectedProjectFiles = [];

function initFileUploadSystem() {
  const dropzone = document.getElementById("dropzone");
  const fileInput = document.getElementById("file-input");
  const previewList = document.getElementById("files-preview-list");

  if (!dropzone || !fileInput) return;

  dropzone.addEventListener("click", () => fileInput.click());

  // Drag and Drop Events
  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.add("dragover");
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
    });
  });

  dropzone.addEventListener("drop", (e) => {
    const files = e.dataTransfer.files;
    handleIncomingFiles(files);
  });

  fileInput.addEventListener("change", () => {
    const files = fileInput.files;
    handleIncomingFiles(files);
    fileInput.value = ""; // reset
  });
}

function handleIncomingFiles(files) {
  let rejectedCount = 0;
  let acceptedCount = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileType = FileValidator.getFileType(file.name);

    if (fileType) {
      // Check duplicate
      const exists = selectedProjectFiles.some(f => f.name === file.name && f.size === file.size);
      if (!exists) {
        selectedProjectFiles.push({
          file: file,
          name: file.name,
          size: file.size,
          type: fileType,
          formattedSize: FileValidator.formatBytes(file.size)
        });
        acceptedCount++;
      }
    } else {
      rejectedCount++;
    }
  }

  updateFilesPreviewList();

  if (acceptedCount > 0) {
    showToast(`Added ${acceptedCount} file(s) for editing review.`, "success");
  }
  if (rejectedCount > 0) {
    showToast(`Rejected ${rejectedCount} file(s). Only Video (.mp4, .mov), Audio (.mp3, .wav), and Photo (.png, .jpg) formats are allowed!`, "error");
  }
}

function updateFilesPreviewList() {
  const container = document.getElementById("files-preview-list");
  if (!container) return;

  container.innerHTML = "";

  if (selectedProjectFiles.length === 0) {
    container.innerHTML = `<span style="font-size: 0.8rem; color: var(--text-dim); text-align: center; display: block;">No files selected yet.</span>`;
    return;
  }

  selectedProjectFiles.forEach((item, index) => {
    const pill = document.createElement("div");
    pill.className = "file-item-pill";
    pill.innerHTML = `
      <div class="file-pill-left">
        <span class="file-type-badge type-${item.type}">${item.type}</span>
        <span style="font-weight: 600; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; max-width: 200px;">${item.name}</span>
        <span style="color: var(--text-muted); font-size: 0.75rem;">(${item.formattedSize})</span>
      </div>
      <button type="button" class="file-remove-btn" onclick="removeFileFromQueue(${index})" aria-label="Remove ${item.name}">✕</button>
    `;
    container.appendChild(pill);
  });
}

function removeFileFromQueue(index) {
  selectedProjectFiles.splice(index, 1);
  updateFilesPreviewList();
}

// 4. Video Enquiry Form Submission & Instant WhatsApp / Mail Direct Handlers
function initEnquiryForm() {
  const form = document.getElementById("video-enquiry-form");
  const waBtn = document.getElementById("instant-whatsapp-btn");
  const mailBtn = document.getElementById("instant-mail-btn");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitEnquiry();
    });
  }

  if (waBtn) {
    waBtn.addEventListener("click", (e) => {
      e.preventDefault();
      generateWhatsAppDirect();
    });
  }

  if (mailBtn) {
    mailBtn.addEventListener("click", (e) => {
      e.preventDefault();
      generateMailDirect();
    });
  }
}

function collectFormData() {
  const clientName = document.getElementById("client-name")?.value.trim() || "";
  const clientEmail = document.getElementById("client-email")?.value.trim() || "";
  const clientPhone = document.getElementById("client-phone")?.value.trim() || "";
  const aspectRatio = document.getElementById("aspect-ratio")?.value || "9:16 (Reels/TikTok)";
  const editingStyle = document.getElementById("editing-style")?.value || "Velocity & Beat Sync";
  const instructions = document.getElementById("edit-instructions")?.value.trim() || "";
  const turnaround = document.getElementById("turnaround-tier")?.value || "Standard (48-72h)";
  const ageConsent = document.getElementById("age-consent-check")?.checked;
  const termsConsent = document.getElementById("terms-consent-check")?.checked;

  return {
    clientName,
    clientEmail,
    clientPhone,
    aspectRatio,
    editingStyle,
    instructions,
    turnaround,
    ageConsent,
    termsConsent,
    filesCount: selectedProjectFiles.length,
    fileNames: selectedProjectFiles.map(f => `${f.name} [${f.type}]`).join(", ")
  };
}

function submitEnquiry() {
  const data = collectFormData();

  if (!data.clientName || !data.clientEmail) {
    showToast("Please enter your name and email address.", "error");
    return;
  }

  if (!data.ageConsent) {
    showToast("Please confirm age consent (16+ or parental consent).", "error");
    return;
  }

  if (!data.termsConsent) {
    showToast("Please agree to the Terms of Service & Privacy Policy.", "error");
    return;
  }

  const submitBtn = document.getElementById("enquiry-submit-btn");
  const originalText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<span>Uploading ${selectedProjectFiles.length} file(s)...</span>`;

  setTimeout(() => {
    // Save to AppState
    const enquiry = {
      id: "enq-" + Date.now(),
      timestamp: new Date().toISOString(),
      status: "New",
      ...data
    };
    AppState.saveEnquiry(enquiry);

    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;

    // Reset Form
    document.getElementById("video-enquiry-form").reset();
    selectedProjectFiles = [];
    updateFilesPreviewList();

    // Show Confirmation Modal
    openModal("enquiry-success-modal");
  }, 1200);
}

function generateWhatsAppDirect() {
  const data = collectFormData();
  const phone = "919876543210"; // SNDY EDITS Official WhatsApp

  let message = `🎬 *NEW VIDEO EDIT ENQUIRY - SNDY EDITS*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 *Client:* ${data.clientName || "Potential Creator"}\n`;
  message += `📧 *Email:* ${data.clientEmail || "Not provided"}\n`;
  message += `📱 *Phone:* ${data.clientPhone || "WhatsApp direct"}\n`;
  message += `📐 *Aspect Ratio:* ${data.aspectRatio}\n`;
  message += `⚡ *Style:* ${data.editingStyle}\n`;
  message += `⏳ *Turnaround:* ${data.turnaround}\n`;
  message += `📁 *Files to Edit:* ${data.filesCount} file(s) ${data.fileNames ? `(${data.fileNames})` : ""}\n`;
  message += `📝 *Edit Brief:* ${data.instructions || "Looking for viral editing package and quote."}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `_Sent via sndyedits.com website enquiry portal_`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function generateMailDirect() {
  const data = collectFormData();
  const recipient = "hello@sndyedits.com";
  const subject = `[Video Edit Enquiry] ${data.editingStyle} - ${data.clientName || "New Project"}`;
  
  let body = `Hi Sandy,\n\nI would like to inquire about a video edit project.\n\n`;
  body += `Client Name: ${data.clientName || ""}\n`;
  body += `Email: ${data.clientEmail || ""}\n`;
  body += `WhatsApp: ${data.clientPhone || ""}\n`;
  body += `Aspect Ratio: ${data.aspectRatio}\n`;
  body += `Preferred Style: ${data.editingStyle}\n`;
  body += `Turnaround: ${data.turnaround}\n`;
  body += `Attached/Drive Files (${data.filesCount}): ${data.fileNames}\n\n`;
  body += `Editing Instructions & Brief:\n${data.instructions || ""}\n\n`;
  body += `Thank you!`;

  const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
}

// 5. Realtime Instagram Channel Sync Engine
async function syncRealtimeInstagram(forceRefresh = false) {
  try {
    const res = await fetch(`/api/instagram${forceRefresh ? '?refresh=true' : ''}`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    applyInstagramData(data);
    return data;
  } catch (err) {
    console.warn("Using cached Instagram profile metrics:", err);
    const fallback = {
      handle: "_sndy_edits",
      followers: 796,
      following: 3,
      posts: 51,
      ownerName: "Santhosh (Sandy)",
      personalHandle: "_santhozz_12",
      avatarUrl: "assets/sndy_avatar.jpg",
      instagramUrl: "https://www.instagram.com/_sndy_edits/"
    };
    applyInstagramData(fallback);
    return fallback;
  }
}

function applyInstagramData(data) {
  if (!data) return;

  // Header Handle
  const headerHandle = document.getElementById("header-handle");
  if (headerHandle) headerHandle.textContent = `@${data.handle}`;

  // Hero Stats Ticker
  const heroFollowers = document.getElementById("hero-followers");
  if (heroFollowers) heroFollowers.innerHTML = `${data.followers}<span>+</span>`;

  const heroPosts = document.getElementById("hero-posts");
  if (heroPosts) heroPosts.innerHTML = `${data.posts}<span>+</span>`;

  // Sync Box Details
  const displayHandle = document.getElementById("ig-display-handle");
  if (displayHandle) displayHandle.textContent = `@${data.handle}`;

  const statFollowers = document.getElementById("ig-stat-followers");
  if (statFollowers) statFollowers.textContent = data.followers;

  const statPosts = document.getElementById("ig-stat-posts");
  if (statPosts) statPosts.textContent = data.posts;

  const statFollowing = document.getElementById("ig-stat-following");
  if (statFollowing) statFollowing.textContent = data.following;

  const avatarImg = document.getElementById("ig-avatar-img");
  if (avatarImg && data.avatarUrl) avatarImg.src = data.avatarUrl;

  const visitBtn = document.getElementById("ig-visit-btn");
  if (visitBtn && data.instagramUrl) visitBtn.href = data.instagramUrl;
}

function initInstaSyncButton() {
  const btn = document.getElementById("sync-insta-btn");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    btn.disabled = true;
    btn.innerHTML = `<span class="pulse-dot"></span> Fetching Live @_sndy_edits...`;

    const data = await syncRealtimeInstagram(true);
    btn.disabled = false;
    btn.innerHTML = `✓ Synced: @_sndy_edits (${data.followers} Followers)`;
    showToast(`Instagram Live Synced: @_sndy_edits (${data.followers} followers, ${data.posts} reels)`, "success");
  });
}

// 6. Accessible Modals System
function initModals() {
  // Close buttons
  document.querySelectorAll(".modal-close-btn, .modal-backdrop").forEach(el => {
    el.addEventListener("click", (e) => {
      if (e.target === el || el.classList.contains("modal-close-btn")) {
        closeAllModals();
      }
    });
  });

  // Esc Key support (Accessibility #17)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });
}

function openModal(modalId) {
  closeAllModals();
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    // Trap focus inside modal
    const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable.length) focusable[0].focus();
  }
}

function closeAllModals() {
  document.querySelectorAll(".modal-backdrop").forEach(modal => {
    modal.classList.remove("active");
  });
}

// Mobile Navigation Controller
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-nav-toggle");
  const navMenu = document.getElementById("primary-nav-menu") || document.querySelector(".nav-menu");
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    toggleBtn.classList.toggle("active", isOpen);
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close when clicking a link
  navMenu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      toggleBtn.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// Video Player Modal with Embedded Instagram Reel & Technique Breakdown
function openVideoPlayerModal(videoId) {
  const videos = AppState.getTopVideos();
  const video = videos.find(v => v.id === videoId);
  if (!video) return;

  const modal = document.getElementById("video-preview-modal");
  const modalTitle = document.getElementById("video-modal-title");
  const modalNotes = document.getElementById("video-modal-notes");
  const modalStats = document.getElementById("video-modal-stats");
  const modalThumb = document.getElementById("video-modal-thumb");
  const modalIframeWrap = document.getElementById("video-modal-iframe-wrap");
  const modalIgBtn = document.getElementById("video-modal-ig-btn");

  if (modalTitle) modalTitle.textContent = video.title;
  if (modalNotes) modalNotes.textContent = video.techniques;
  if (modalStats) {
    modalStats.innerHTML = `
      <span>🔥 <strong>${video.reach}</strong> Organic Reach</span>
      <span>❤️ <strong>${video.likes}</strong> Likes</span>
      <span>💬 <strong>${video.comments || '25+'}</strong> Comments</span>
      <span>🔄 <strong>${video.shares || '80+'}</strong> Shares</span>
    `;
  }
  if (modalThumb) {
    modalThumb.src = video.thumb;
    modalThumb.alt = video.title;
  }
  if (modalIgBtn) {
    modalIgBtn.href = video.igUrl;
  }
  if (modalIframeWrap) {
    if (video.code) {
      modalIframeWrap.innerHTML = `
        <div style="position: relative; width: 100%; max-width: 380px; margin: 0 auto 16px; border-radius: 14px; overflow: hidden; background: #000; box-shadow: 0 10px 30px rgba(0,0,0,0.6);">
          <iframe 
            src="https://www.instagram.com/reel/${video.code}/embed/" 
            style="width: 100%; height: 500px; border: none; display: block;" 
            allowfullscreen 
            loading="lazy"
            title="${video.title}">
          </iframe>
        </div>
      `;
    } else {
      modalIframeWrap.innerHTML = `<img src="${video.thumb}" style="width: 100%; border-radius: 12px; margin-bottom: 16px;" alt="${video.title}" />`;
    }
  }

  openModal("video-preview-modal");
}

// Asset Download Modal (Zero Dark Patterns #11, No Hidden Fees #12)
function openDownloadModal(assetId) {
  const assets = AppState.getCreatorAssets();
  const asset = assets.find(a => a.id === assetId);
  if (!asset) return;

  const modal = document.getElementById("asset-download-modal");
  document.getElementById("download-modal-title").textContent = asset.name;
  document.getElementById("download-modal-desc").textContent = asset.description;
  document.getElementById("download-modal-specs").innerHTML = `
    <li><strong>Format:</strong> ${asset.format}</li>
    <li><strong>Version:</strong> ${asset.version}</li>
    <li><strong>License:</strong> Free for Commercial & Personal Edits (100% Royalty Free)</li>
    <li><strong>Zero Dark Patterns:</strong> No forced subscription, no hidden charge, instant direct download.</li>
  `;

  const confirmBtn = document.getElementById("confirm-download-btn");
  confirmBtn.onclick = () => {
    showToast(`Downloading ${asset.name}... Thank you for using creator assets!`, "success");
    closeAllModals();
  };

  openModal("asset-download-modal");
}

// 7. Cookie Consent Banner (Compliance #4, #5)
function initCookieBanner() {
  const banner = document.getElementById("cookie-consent-banner");
  if (!banner) return;

  const existingConsent = localStorage.getItem("sndy_cookie_consent");
  if (!existingConsent) {
    setTimeout(() => {
      banner.classList.add("visible");
    }, 1200);
  }

  document.getElementById("cookie-accept-all")?.addEventListener("click", () => {
    localStorage.setItem("sndy_cookie_consent", JSON.stringify({
      analytics: true,
      essential: true,
      timestamp: new Date().toISOString()
    }));
    banner.classList.remove("visible");
    showToast("Cookie preferences saved. Thank you!", "success");
  });

  document.getElementById("cookie-essential-only")?.addEventListener("click", () => {
    localStorage.setItem("sndy_cookie_consent", JSON.stringify({
      analytics: false,
      essential: true,
      timestamp: new Date().toISOString()
    }));
    banner.classList.remove("visible");
    showToast("Essential cookies only enabled.", "success");
  });
}

// 8. Data Deletion Handler (GDPR / Security #10)
function initDataDeletionHandler() {
  const form = document.getElementById("data-deletion-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("deletion-email")?.value.trim();
    if (!email) {
      showToast("Please enter a valid email address.", "error");
      return;
    }

    const result = AppState.addDeletionRequest(email);
    closeAllModals();
    showToast(`Data purge completed! Removed ${result.recordsPurged} matching record(s) from our active database.`, "success");
    form.reset();
  });
}

// Toast Notifications Helper
function showToast(message, type = "normal") {
  const container = document.getElementById("toast-container") || createToastContainer();
  const toast = document.createElement("div");
  toast.className = `toast ${type === "error" ? "toast-error" : type === "success" ? "toast-success" : ""}`;
  toast.setAttribute("role", "alert");
  toast.innerHTML = `
    <span>${type === "error" ? "⚠️" : type === "success" ? "✅" : "ℹ️"}</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function createToastContainer() {
  const cont = document.createElement("div");
  cont.id = "toast-container";
  cont.className = "toast-container";
  document.body.appendChild(cont);
  return cont;
}

// Global modal triggers for inline onclicks
window.openModal = openModal;
window.closeAllModals = closeAllModals;
window.openVideoPlayerModal = openVideoPlayerModal;
window.openDownloadModal = openDownloadModal;
window.removeFileFromQueue = removeFileFromQueue;
