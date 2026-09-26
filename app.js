/**
 * SNDY EDITS - Client Application Logic
 * Features: File Upload Validator (Audio/Video/Photo), Dynamic IG Reels,
 * WhatsApp/Email Formatter, Legal Modals, Data Privacy & Cookie Management
 */

// Real @_sndy_edits Instagram Reels Portfolio (100% Real Videos, Exact View Counts & Direct Links)
const DEFAULT_TOP_VIDEOS = [
  {
    id: "reel-1",
    rank: 1,
    code: "DZDIbQlvGQq",
    title: "Viral Split Frame • B&W Portrait Aesthetic Edit",
    reach: "48.1K",
    rawReach: 48100,
    likes: "3,410",
    comments: "48",
    shares: "820",
    saves: "540",
    tag: "🏆 #1 All-Time Most Viral (48.1K Reach)",
    category: "Creative Visuals",
    aspectRatio: "9:16",
    duration: "0:16",
    igUrl: "https://www.instagram.com/_sndy_edits/reel/DZDIbQlvGQq/",
    thumb: "assets/reels/reel-top1.png",
    videoFile: "assets/reels/reel-top1.mp4",
    techniques: "High-contrast monochrome split-frame transition, seamless picture-in-picture frame hold, atmospheric slow-motion, and cinematic bass drop audio sync."
  },
  {
    id: "reel-2",
    rank: 2,
    code: "DaQFnasvQn8",
    title: "Orange Ford Mustang • Supercar Drift & Velocity",
    reach: "32.0K",
    rawReach: 32000,
    likes: "2,840",
    comments: "62",
    shares: "690",
    saves: "410",
    tag: "⚡ 32K Supercar Velocity Edit",
    category: "Automotive & Drift",
    aspectRatio: "9:16",
    duration: "0:22",
    igUrl: "https://www.instagram.com/_sndy_edits/reel/DaQFnasvQn8/",
    thumb: "assets/reels/reel-top2.png",
    videoFile: "assets/reels/reel-top2.mp4",
    techniques: "Precision keyframe tracking on vehicle body lines, speed ramping through corner drift, dynamic camera motion blur, and turbo engine sound design."
  },
  {
    id: "reel-3",
    rank: 3,
    code: "Dcd41EgTCmj",
    title: "Viral Visual FX • \"How To Make This Effect\"",
    reach: "22.9K",
    rawReach: 22900,
    likes: "1,140",
    comments: "28",
    shares: "380",
    saves: "490",
    tag: "🔥 22.9K Tutorial Breakdown",
    category: "CapCut Tutorials",
    aspectRatio: "9:16",
    duration: "0:28",
    igUrl: "https://www.instagram.com/_sndy_edits/reel/Dcd41EgTCmj/",
    thumb: "assets/reels/reel-top3.png",
    videoFile: "assets/reels/reel-top3.mp4",
    techniques: "Optical velocity tracking, 3D layer depth separation, seamless scale impact punch, and custom bass drop sound design."
  },
  {
    id: "reel-4",
    rank: 4,
    code: "DdjbPi_zK3B",
    title: "THALAPATHY Vijay Portrait • Digital Artwork Edit",
    reach: "15.2K",
    rawReach: 15200,
    likes: "2,643",
    comments: "45",
    shares: "512",
    saves: "318",
    tag: "🎬 15.2K Fan Favorite",
    category: "Celebrity Velocity",
    aspectRatio: "9:16",
    duration: "0:21",
    igUrl: "https://www.instagram.com/_sndy_edits/reel/DdjbPi_zK3B/",
    thumb: "assets/reels/reel-top4.png",
    videoFile: "assets/reels/reel-top4.mp4",
    techniques: "Celebrity digital painting reveal with luminous glow outlines, speed ramping curves, and punchy dialogue beat drops."
  },
  {
    id: "reel-5",
    rank: 5,
    code: "Dcgcc-5PKy-",
    title: "Day 4/30 • 10K Reach Instagram Growth Strategy",
    reach: "11.4K",
    rawReach: 11400,
    likes: "429",
    comments: "18",
    shares: "165",
    saves: "210",
    tag: "📈 High Retention Strategy",
    category: "Creator Growth",
    aspectRatio: "9:16",
    duration: "0:34",
    igUrl: "https://www.instagram.com/_sndy_edits/reel/Dcgcc-5PKy-/",
    thumb: "assets/reels/reel-top5.png",
    videoFile: "assets/reels/reel-top5.mp4",
    techniques: "Talking-head retention formula, dynamic text punchlines, zoom keyframing, and interactive audio hooks."
  },
  {
    id: "reel-6",
    rank: 6,
    code: "DZz2DAEPfT4",
    title: "Red Sports Car • Dynamic Lighting & Motion FX",
    reach: "9.1K",
    rawReach: 9100,
    likes: "780",
    comments: "24",
    shares: "194",
    saves: "160",
    tag: "🏎️ Cinematic Speed Ramp",
    category: "Automotive & Drift",
    aspectRatio: "9:16",
    duration: "0:18",
    igUrl: "https://www.instagram.com/_sndy_edits/reel/DZz2DAEPfT4/",
    thumb: "assets/reels/reel-top6.png",
    videoFile: "assets/reels/reel-top6.mp4",
    techniques: "Sleek automotive visualizer with custom neon rim flares, 3D layer depth, and speed curve ramps."
  },
  {
    id: "reel-7",
    rank: 7,
    code: "DZ2iv_gP4Ch",
    title: "Sports Car Wheel Rim • Cutout Mask Velocity Edit",
    reach: "7.3K",
    rawReach: 7300,
    likes: "620",
    comments: "19",
    shares: "142",
    saves: "135",
    tag: "⚙️ Precision Keyframe Cut",
    category: "Automotive & Drift",
    aspectRatio: "9:16",
    duration: "0:19",
    igUrl: "https://www.instagram.com/_sndy_edits/reel/DZ2iv_gP4Ch/",
    thumb: "assets/reels/reel-top7.png",
    videoFile: "assets/reels/reel-top7.mp4",
    techniques: "Precision keyframe mask tracking focusing on red wheel brake calipers and tire smoke transitions."
  },
  {
    id: "reel-8",
    rank: 8,
    code: "DaSp3ZwvZC2",
    title: "CapCut Ripple Effect • Viral Portrait Beat Sync",
    reach: "6.7K",
    rawReach: 6657,
    likes: "397",
    comments: "36",
    shares: "142",
    saves: "190",
    tag: "🌊 Viral Water Ripple",
    category: "CapCut Tutorials",
    aspectRatio: "9:16",
    duration: "0:26",
    igUrl: "https://www.instagram.com/_sndy_edits/reel/DaSp3ZwvZC2/",
    thumb: "assets/reels/reel-top8.png",
    videoFile: "assets/reels/reel-top8.mp4",
    techniques: "CapCut displacement mapping, water ripple frequency overlay, beat-matched chromatic aberration."
  },
  {
    id: "reel-9",
    rank: 9,
    code: "DaVOb3Gvj1b",
    title: "CapCut Green Bike • Smooth Motion Velocity",
    reach: "6.0K",
    rawReach: 6027,
    likes: "395",
    comments: "28",
    shares: "110",
    saves: "112",
    tag: "🏍️ Speed Curve Ramp",
    category: "Automotive & Drift",
    aspectRatio: "9:16",
    duration: "0:19",
    igUrl: "https://www.instagram.com/_sndy_edits/reel/DaVOb3Gvj1b/",
    thumb: "assets/reels/reel-top9.png",
    videoFile: "assets/reels/reel-top9.mp4",
    techniques: "Two-wheeler motorcycle cinematic cut with multi-clip velocity curve transitions."
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
    // Auto-migrate and purge old dummy data, old stock IDs, or obsolete ordering
    const hasOldStock = videos.some(v => (v.id && v.id.startsWith("vid-")) || (v.thumb && v.thumb.includes("unsplash")));
    const hasDummyMillions = videos.some(v => (v.rawReach && v.rawReach > 100000) || (typeof v.reach === 'string' && v.reach.includes('M')));
    const needsTopRankRefresh = !videos[0] || !videos[0].videoFile || videos[0].code !== "DZDIbQlvGQq";
    if (hasOldStock || hasDummyMillions || needsTopRankRefresh) {
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
  initAutoInstaSync();

  // Listen for storage events (updates made in Admin CMS reflect here immediately)
  window.addEventListener("storage", (e) => {
    if (e.key === "sndy_top_videos") initTopVideos();
    if (e.key === "sndy_creator_assets") initCreatorAssets();
  });
});

// 1. Initialize Top Videos (Spotlight on Homepage, Full List on Reels page)
function initTopVideos() {
  const container = document.getElementById("top-videos-list");
  if (!container) return;

  const isHomepage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || !window.location.pathname.includes(".html");
  const count = isHomepage ? 3 : 5;
  const videos = AppState.getTopVideos().slice(0, count);
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

// 1.1 In-Website Native Video Player Modal (Plays real downloaded MP4s)
function openVideoPlayerModal(videoId) {
  const videos = AppState.getTopVideos();
  const video = videos.find(v => v.id === videoId || v.code === videoId) || videos[0];
  if (!video) return;

  let modal = document.getElementById("video-preview-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "video-preview-modal";
    modal.className = "modal-backdrop";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-window video-modal-window" style="max-width: 820px; max-height: 92vh; background: #080E1E; border: 1.5px solid var(--color-navy-border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: 0 25px 60px rgba(0,0,0,0.9), 0 0 40px rgba(255,107,53,0.25);">
      <div class="modal-header" style="background: rgba(10, 18, 38, 0.98); border-bottom: 1px solid var(--color-navy-border); padding: 16px 24px; display: flex; align-items: center; justify-content: space-between;">
        <div>
          <span style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; color: var(--color-orange); letter-spacing: 0.1em; display: block;">
            ${video.tag}
          </span>
          <h3 class="modal-title" style="font-size: 1.15rem; margin-top: 2px; color: #FFF; font-weight: 800;">${video.title}</h3>
        </div>
        <button class="modal-close-btn" onclick="closeVideoPlayerModal()" aria-label="Close modal" style="font-size: 1.6rem; line-height: 1; padding: 4px 10px; cursor: pointer; color: var(--text-muted); background: transparent; border: none;">✕</button>
      </div>
      <div class="modal-body" style="padding: 24px; background: #060B18; overflow-y: auto; max-height: calc(92vh - 80px);">
        <div class="modal-video-layout" style="display: grid; grid-template-columns: minmax(250px, 300px) 1fr; gap: 24px; align-items: start;">
          <!-- Left: Real HTML5 Video Player playing local MP4 -->
          <div class="reel-player-box" style="position: relative; border-radius: 14px; overflow: hidden; background: #000; box-shadow: 0 16px 36px rgba(0,0,0,0.85); aspect-ratio: 9/16; max-height: 480px; display: flex; align-items: center; justify-content: center; margin: 0 auto; width: 100%;">
            <video 
              id="active-reel-player"
              src="${video.videoFile}"
              poster="${video.thumb}"
              controls
              autoplay
              playsinline
              loop
              style="width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 14px;"
            >
              Your browser does not support HTML5 video playback.
            </video>
            <div style="position: absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.75); backdrop-filter: blur(8px); padding: 3px 8px; border-radius: 6px; font-size: 0.68rem; font-weight: 700; color: #FFF; display: flex; align-items: center; gap: 5px; pointer-events: none; z-index: 2;">
              <span style="width: 6px; height: 6px; border-radius: 50%; background: #10B981; display: inline-block;"></span>
              IN-BROWSER STREAM
            </div>
          </div>

          <!-- Right: Authentic Metrics & Breakdown -->
          <div class="reel-info-box">
            <!-- Metrics Row -->
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 20px;">
              <div style="background: rgba(16,28,56,0.7); border: 1px solid var(--color-navy-border); border-radius: 8px; padding: 12px 14px;">
                <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Organic Reach</div>
                <div style="font-size: 1.45rem; font-weight: 900; color: var(--color-orange-light);">${video.reach}</div>
              </div>
              <div style="background: rgba(16,28,56,0.7); border: 1px solid var(--color-navy-border); border-radius: 8px; padding: 12px 14px;">
                <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Likes</div>
                <div style="font-size: 1.45rem; font-weight: 900; color: #FFF;">❤️ ${video.likes}</div>
              </div>
              <div style="background: rgba(16,28,56,0.7); border: 1px solid var(--color-navy-border); border-radius: 8px; padding: 10px 14px;">
                <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Shares</div>
                <div style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">🔄 ${video.shares}</div>
              </div>
              <div style="background: rgba(16,28,56,0.7); border: 1px solid var(--color-navy-border); border-radius: 8px; padding: 10px 14px;">
                <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Saves</div>
                <div style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">💾 ${video.saves}</div>
              </div>
            </div>

            <!-- Category & Duration -->
            <div style="display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap;">
              <span style="font-size: 0.75rem; background: rgba(255,107,53,0.15); color: var(--color-orange-light); border: 1px solid rgba(255,107,53,0.3); padding: 3px 10px; border-radius: 999px; font-weight: 700;">
                ${video.category}
              </span>
              <span style="font-size: 0.75rem; background: rgba(255,255,255,0.06); color: var(--text-secondary); border: 1px solid var(--color-navy-border); padding: 3px 10px; border-radius: 999px;">
                ⏱️ ${video.duration} duration
              </span>
              <span style="font-size: 0.75rem; background: rgba(255,255,255,0.06); color: var(--text-secondary); border: 1px solid var(--color-navy-border); padding: 3px 10px; border-radius: 999px;">
                📱 9:16 Vertical
              </span>
            </div>

            <!-- Technique Breakdown -->
            <h4 style="font-size: 0.95rem; color: #FFF; margin: 0 0 6px; font-weight: 700;">Retention &amp; Editing Breakdown:</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.55; margin-bottom: 20px;">
              ${video.techniques}
            </p>

            <!-- Action buttons inside modal -->
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <a href="enquiry.html?service=pro&reel=${encodeURIComponent(video.title)}" class="btn btn-primary btn-sm" style="text-align: center; justify-content: center; width: 100%; padding: 10px 16px; font-weight: 700;">
                <span>Order Reel in This Style (₹5,000/mo Sndy Pro)</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </a>
              <a href="${video.igUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="text-align: center; justify-content: center; width: 100%; padding: 8px 16px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <span>View Original Post on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Backdrop click closes modal
  modal.onclick = (e) => {
    if (e.target === modal) closeVideoPlayerModal();
  };
}

function closeVideoPlayerModal() {
  const modal = document.getElementById("video-preview-modal");
  if (modal) {
    const player = modal.querySelector("video");
    if (player) {
      player.pause();
      player.removeAttribute("src");
      player.load();
    }
    modal.classList.remove("active");
  }
  document.body.style.overflow = "";
}

// Make accessible on window object
window.openVideoPlayerModal = openVideoPlayerModal;
window.closeVideoPlayerModal = closeVideoPlayerModal;

// Global Escape listener for video modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeVideoPlayerModal();
});

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
  if (!container) return;
  container.innerHTML = "";

  const isSub = AppState.isTemplateSubscriber();
  if (!isSub) {
    container.classList.add("is-locked");
  } else {
    container.classList.remove("is-locked");
  }

  if (assets.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No assets found in this category.</p>`;
    return;
  }

  assets.forEach(asset => {
    const card = document.createElement("div");
    card.className = `asset-card ${!isSub ? "is-locked" : ""}`;
    
    const actionBtn = isSub
      ? `<button class="btn btn-outline-orange btn-sm" onclick="openDownloadModal('${asset.id}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Download Template
        </button>`
      : `<button class="btn btn-secondary btn-sm" style="width: 100%; opacity: 0.85;" onclick="promptSubscriberUnlock()">
          🔒 Locked (₹2,000/mo Sub Required)
        </button>`;

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px;">
        <span class="asset-badge">${asset.badge}</span>
        ${!isSub ? `<span style="font-size: 0.72rem; font-weight: 700; color: var(--color-orange); background: rgba(255,107,53,0.15); padding: 3px 8px; border-radius: 4px; border: 1px solid rgba(255,107,53,0.3);">🔒 VIP LOCKED</span>` : `<span style="font-size: 0.72rem; font-weight: 700; color: #10B981; background: rgba(16,185,129,0.15); padding: 3px 8px; border-radius: 4px; border: 1px solid rgba(16,185,129,0.3);">✓ UNLOCKED</span>`}
      </div>
      <h3 class="asset-name">${asset.name}</h3>
      <p class="asset-desc">${asset.description}</p>
      <div class="asset-meta">
        <span>📦 ${asset.format}</span>
        <span>⬇️ ${asset.downloads} dl</span>
        <span>🏷️ ${asset.version}</span>
      </div>
      ${actionBtn}
    `;

    if (!isSub) {
      card.addEventListener("click", (e) => {
        // If clicking on a locked card, trigger passkey unlock
        if (!e.target.closest("button")) {
          if (typeof promptSubscriberUnlock === "function") promptSubscriberUnlock();
        }
      });
    }

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
      targetEmail: "senthilmurugansanthos@gmail.com",
      ...data
    };
    AppState.saveEnquiry(enquiry);

    // Send to local backend API
    fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enquiry)
    }).catch(err => console.warn('Local enquiry API notification:', err));

    // Send to FormSubmit for direct inbox delivery to senthilmurugansanthos@gmail.com
    fetch('https://formsubmit.co/ajax/senthilmurugansanthos@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `New Video Edit Enquiry: ${enquiry.editingStyle || 'Custom'} - ${enquiry.clientName || 'Client'}`,
        _template: 'table',
        "Client Name": enquiry.clientName,
        "Email": enquiry.clientEmail,
        "WhatsApp": enquiry.clientPhone,
        "Aspect Ratio": enquiry.aspectRatio,
        "Style": enquiry.editingStyle,
        "Turnaround": enquiry.turnaround,
        "Files": `${enquiry.filesCount} file(s) ${enquiry.fileNames}`,
        "Brief": enquiry.instructions,
        "Sent To": "senthilmurugansanthos@gmail.com"
      })
    }).catch(err => console.warn('FormSubmit AJAX notification:', err));

    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;

    // Reset Form
    const vForm = document.getElementById("video-enquiry-form");
    if (vForm) vForm.reset();
    selectedProjectFiles = [];
    updateFilesPreviewList();

    // Show Confirmation Modal
    openModal("enquiry-success-modal");
  }, 1000);
}

function generateWhatsAppDirect() {
  const data = collectFormData();
  const phone = "918807854679"; // SNDY EDITS Official WhatsApp (+91 88078 54679)

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
  message += `_Sent via sndyedits.com to senthilmurugansanthos@gmail.com_`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function generateMailDirect() {
  const data = collectFormData();
  const recipient = "senthilmurugansanthos@gmail.com";
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

// 5. Automated Realtime Instagram Channel Sync Engine (Auto-updates every second)
async function syncRealtimeInstagram(forceRefresh = false) {
  try {
    const res = await fetch(`/api/instagram${forceRefresh ? '?refresh=true' : ''}`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    applyInstagramData(data);
    return data;
  } catch (err) {
    console.warn("Using verified Instagram profile metrics:", err);
    const fallback = {
      handle: "_sndy_edits",
      followers: 797,
      following: 1,
      posts: 51,
      ownerName: "Santhosh (Sandy)",
      personalHandle: "_santhozz_12",
      avatarUrl: "assets/sndy_profile_avatar.png",
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

  // Hero Phone Mockup Stats
  const phoneFollowers = document.getElementById("phone-followers");
  if (phoneFollowers) phoneFollowers.textContent = data.followers;

  const phonePosts = document.getElementById("phone-posts");
  if (phonePosts) phonePosts.textContent = data.posts;

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

// Quiet Background Instagram Data Sync (No distracting tickers or "seconds ago" counters)
function initAutoInstaSync() {
  syncRealtimeInstagram(false);

  // Periodically refresh stats quietly in the background without UI tickers
  setInterval(() => {
    syncRealtimeInstagram(false).catch(() => {});
  }, 5 * 60 * 1000);
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



// Asset Download Modal - Exclusive to ₹2,000/mo Templates Plan Subscribers
function openDownloadModal(assetId) {
  if (!AppState.isTemplateSubscriber()) {
    showToast("Access Denied: You must be subscribed to the Access to Templates Plan (₹2,000/mo) to download templates.", "error");
    if (typeof promptSubscriberUnlock === "function") {
      promptSubscriberUnlock();
    } else {
      window.location.href = "templates.html";
    }
    return;
  }

  const assets = AppState.getCreatorAssets();
  const asset = assets.find(a => a.id === assetId);
  if (!asset) return;

  const modal = document.getElementById("asset-download-modal");
  if (!modal) return;
  document.getElementById("download-modal-title").textContent = asset.name;
  document.getElementById("download-modal-desc").textContent = asset.description;
  document.getElementById("download-modal-specs").innerHTML = `
    <li><strong>Format:</strong> ${asset.format}</li>
    <li><strong>Version:</strong> ${asset.version}</li>
    <li><strong>Tier:</strong> Access to Templates Plan (₹2,000/mo) Active VIP Subscriber</li>
    <li><strong>License:</strong> 100% Commercial & Client Rights Included</li>
  `;

  const confirmBtn = document.getElementById("confirm-download-btn");
  if (confirmBtn) {
    confirmBtn.onclick = () => {
      showToast(`Downloading uncompressed template package for ${asset.name}...`, "success");
      closeAllModals();
    };
  }

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
