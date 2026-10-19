/* =====================================================
   W4RPAD WEBSITE - FULL SCRIPT
   ROSTER + GALERI + HERO POOL + DRAFT
   SPLASH PETIR + SUARA INTRO + VOICE HERO
   LOADING 1%-100% + HOME ANIMATION + ORANGE PARTICLES
   + REVEAL SCROLL + TILT 3D + LOGO 3D KONTAK
===================================================== */

/* ============ DATA ============ */
const API_URL =
  "https://arena.rone.dev/api/academy/heroes/catalog?size=200&lang=en";

const playerPools = [
  {
    name: "Fayy' X W4RPAD",
    role: "JUNGLER",
    photo: "fayy.jpg",
    heroes: [
      "Alice", "Aulus", "Leomord", "Hirara", "Paquito",
      "Lukas", "Balmond", "Akai", "Bane", "Fanny",
      "Hayabusa", "Yi Sun-shin", "Roger", "Lancelot",
      "Ling", "Gusion", "Martis", "Hanzo", "Guinevere",
      "Baxia", "Fredrinn", "Aamon", "Nolan", "Suyou"
    ]
  },
  {
    name: "Bralytzy X W4RPAD",
    role: "MID LANER",
    photo: "Bralytzy.jpg",
    heroes: [
      "Nana", "Valentina", "Eudora", "Gord", "Kagura",
      "Cyclops", "Aurora", "Vexana", "Odette", "Zhask",
      "Pharsa", "Valir", "Chang'e", "Selena", "Vale",
      "Lunox", "Kimmy", "Kadita", "Faramis", "Lylia",
      "Cecilion", "Luo Yi", "Yve", "Xavier", "Novaria",
      "Zhuxin", "Zetian"
    ]
  },
  {
    name: "Repp X W4RPAD",
    role: "GOLD LANER",
    photo: "repp.jpg",
    heroes: [
      "Harith", "Claude", "Lesley", "Karrie", "Sun",
      "Ruby", "Bruno", "Clint", "Miya", "Layla",
      "Irithel", "Yi Sun-shin", "Moskov", "Hanabi",
      "Granger", "Wanwan", "Brody", "Beatrix", "Natan",
      "Melissa", "Ixia", "Obsidian"
    ]
  },
  {
    name: "Rapp X W4RPAD",
    role: "ROAMER",
    photo: "rapp.jpg",
    heroes: [
      "Gloo", "Edith", "Belerick", "Gatotkaca", "Franco",
      "Baxia", "Tigreal", "Akai", "Khufra", "Hylos",
      "Grock", "Carmilla", "Minotaur", "Chip", "Hilda",
      "Atlas", "Lolita", "Chou", "Badang", "Khaleed",
      "Kalea", "Mathilda", "Diggie", "Floryn", "Angela",
      "Estes", "Kaja", "Rafaela", "Marcel"
    ]
  },
  {
    name: "Ballzyyy X W4RPAD",
    role: "EXP LANER",
    photo: "Ballzyyy.jpg",
    heroes: [
      "Dyrroth", "Esmeralda", "Alice", "Gloo", "Terizla",
      "Edith", "Belerick", "Atlas", "Barats", "Uranus",
      "Carmilla", "Gatotkaca", "Akai", "Minotaur", "Hilda",
      "Masha", "Hylos", "Yu Zhong", "Lapu-Lapu", "Badang",
      "Phoveus", "Sora", "Cici", "Lukas", "Arlott",
      "Paquito", "Aulus", "Alpha", "Ruby", "X.Borg",
      "Thamuz", "Minsitthar", "Benedetta"
    ]
  },
  {
    name: "Harun Nak Makan",
    role: "GOLD LANER",
    photo: "harun.jpg",
    reserve: true,
    heroes: [
      "Ixia", "Irithel", "Brody", "Claude", "Granger",
      "Bruno", "Natan", "Beatrix", "Miya", "Harith"
    ]
  },
  {
    name: "Dapaa Nonik",
    role: "ROAMER / JUNGLER",
    photo: "dapaa.jpg",
    reserve: true,
    roles: [
      {
        role: "ROAMER",
        heroes: ["Grock", "Angela"]
      },
      {
        role: "JUNGLER",
        heroes: ["Yi Sun-shin", "Suyou", "Fredrinn"]
      }
    ]
  },
  {
    name: "Reyy",
    role: "ROAMER",
    photo: "Reyy.jpg",
    reserve: true,
    roles: [
      {
        role: "ROAMER",
        heroes: ["Hilda", "Minotaur", "Carmilla", "Tigreal"]
      }
    ]
  }
];

const gallery = [
  { img: "percut.jpg", text: "Tur Wakilin Percut Sei Tuan", big: 1 },
  { img: "galeri.jpg", text: "TEAM" },
  { img: "galeri3.jpg", text: "MATCH" },
  { img: "galeri4.jpg", text: "VICTORY" },
  { img: "galeri5.jpg", text: "TOGETHER" },
  { img: "galeri6.jpg", text: "ONE TEAM", big: 1 }
];

const draftList = [
  "Masha", "Bruno", "Suyou", "Kalea",
  "Xavier", "Gloo", "Lukas", "Fanny"
];

const heroAliases = {
  Hirara: ["Hirara"],
  Obsidian: ["Obsidian", "Obsidia"]
};

/* ============ HELPER ============ */
const $ = id => document.getElementById(id);

const mains = playerPools.filter(player => !player.reserve);
const subs = playerPools.filter(player => player.reserve);

/* ============ RENDER ROSTER ============ */
if ($("playersGrid")) {
  $("playersGrid").innerHTML = mains.map((player, index) => `
    <article class="player-card">
      <div class="player-photo">
        <img src="./${player.photo}" alt="${player.name}" loading="lazy">
        <div class="player-number">0${index + 1}</div>
      </div>
      <div class="player-info">
        <span class="player-role">${player.role}</span>
        <h3>${player.name}</h3>
      </div>
    </article>
  `).join("");
}

/* ============ RENDER PLAYER CADANGAN ============ */
if ($("subGrid")) {
  $("subGrid").innerHTML = subs.map(player => `
    <article class="sub-card">
      <div class="sub-photo">
        <img src="./${player.photo}" alt="${player.name}" loading="lazy">
      </div>
      <div>
        <span>${player.role}</span>
        <h3>${player.name}</h3>
      </div>
    </article>
  `).join("");
}

/* ============ RENDER GALERI ============ */
if ($("galleryGrid")) {
  $("galleryGrid").innerHTML = gallery.map(item => `
    <div class="gallery-item ${item.big ? "big" : ""}">
      <img src="./${item.img}" alt="${item.text}" loading="lazy">
      <div class="gallery-overlay">
        <span>W4RPAD</span>
        <strong>${item.text}</strong>
      </div>
    </div>
  `).join("");
}

/* ============ HERO API ============ */
const normalize = name =>
  String(name)
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]/g, "");

function findHero(name, map) {
  const direct = map.get(normalize(name));

  if (direct) return direct;

  for (const alias of heroAliases[name] || []) {
    const hero = map.get(normalize(alias));
    if (hero) return hero;
  }

  return null;
}

const pickImage = data =>
  data?.head_big ||
  data?.head ||
  data?.painting ||
  data?.hero?.data?.head_big ||
  data?.hero?.data?.head ||
  data?.hero?.data?.painting ||
  "";

async function fetchHeroDirect(name) {
  try {
    const response = await fetch(
      `https://arena.rone.dev/api/heroes/${encodeURIComponent(name)}?size=1&lang=en`
    );

    if (!response.ok) return null;

    const json = await response.json();
    const record = json?.data?.records?.[0]?.data || {};
    const image = pickImage(record);

    return image
      ? {
          name: record?.hero?.data?.name || record?.name || name,
          image
        }
      : null;
  } catch (error) {
    console.error("Gagal mengambil hero:", name, error);
    return null;
  }
}

async function loadHeroes() {
  const container = $("heroPoolContainer");

  try {
    const response = await fetch(API_URL);

    if (!response.ok) throw new Error("API katalog gagal");

    const json = await response.json();
    const records = json?.data?.records || [];
    const map = new Map();

    records.forEach(item => {
      const data = item?.data || {};
      const name = data?.hero?.data?.name || data?.name || "";
      const image = pickImage(data);

      if (name && image) {
        map.set(normalize(name), { name, image });
      }
    });

    for (const name of ["Hirara", "Obsidian"]) {
      if (!findHero(name, map)) {
        const hero = await fetchHeroDirect(name);

        if (hero) {
          map.set(normalize(hero.name), hero);

          if (name === "Obsidian") {
            map.set("obsidia", hero);
          }
        }
      }
    }

    renderHeroPools(map);
    renderDraft(map);
  } catch (error) {
    console.error("Hero API error:", error);

    if (container) {
      container.innerHTML = `
        <div class="api-error">
          <h3>HERO IMAGE BELUM TERMUAT</h3>
          <p>Pastikan koneksi internet aktif, lalu refresh halaman.</p>
        </div>
      `;
    }

    if ($("draftHeroes")) {
      $("draftHeroes").innerHTML = draftList.map(name => `
        <div class="draft-card">
          <div class="draft-placeholder">?</div>
          <span>${name}</span>
        </div>
      `).join("");
    }
  }
}

function heroCard(name, map) {
  const hero = findHero(name, map);

  if (!hero) {
    return `
      <div class="hero-card">
        <div class="hero-placeholder">${name.charAt(0)}</div>
        <div class="hero-name">${name}</div>
      </div>
    `;
  }

  return `
    <div class="hero-card">
      <div class="hero-image-wrap">
        <img
          src="${hero.image}"
          alt="${name}"
          loading="lazy"
          referrerpolicy="no-referrer"
          onerror="this.onerror=null;this.style.display='none'"
        >
        <div class="hero-shine"></div>
      </div>
      <div class="hero-name">${name}</div>
    </div>
  `;
}

function roleBlock(role, heroes, map) {
  return `
    <div class="role-block">
      <div class="role-heading">
        <span>${role}</span>
        <b>${heroes.length} HERO</b>
      </div>
      <div class="hero-grid">
        ${heroes.map(name => heroCard(name, map)).join("")}
      </div>
    </div>
  `;
}

function renderHeroPools(map) {
  const container = $("heroPoolContainer");
  if (!container) return;

  container.innerHTML = "";

  playerPools.forEach(player => {
    const blocks = player.roles || [
      {
        role: player.role,
        heroes: player.heroes || []
      }
    ];

    const total = blocks.reduce(
      (sum, block) => sum + block.heroes.length,
      0
    );

    const section = document.createElement("div");
    section.className = "hero-player-section";

    section.innerHTML = `
      <div class="hero-player-header">
        <div class="hero-player-photo">
          <img src="./${player.photo}" alt="${player.name}" loading="lazy">
        </div>
        <div class="hero-player-info">
          <span>${player.reserve ? "RESERVE PLAYER" : "MAIN PLAYER"}</span>
          <h3>${player.name}</h3>
          <p>${player.role}</p>
        </div>
        <div class="hero-count">
          <strong>${total}</strong>
          <small>HERO POOL</small>
        </div>
      </div>
      ${blocks.map(block =>
        roleBlock(block.role, block.heroes, map)
      ).join("")}
    `;

    container.appendChild(section);
  });
}

function renderDraft(map) {
  const container = $("draftHeroes");
  if (!container) return;

  container.innerHTML = draftList.map(name => {
    const hero = findHero(name, map);

    if (!hero) {
      return `
        <div class="draft-card">
          <div class="draft-placeholder">?</div>
          <span>${name}</span>
        </div>
      `;
    }

    return `
      <div class="draft-card">
        <div class="draft-image">
          <img
            src="${hero.image}"
            alt="${name}"
            loading="lazy"
            referrerpolicy="no-referrer"
            onerror="this.onerror=null;this.style.display='none'"
          >
          <div class="draft-glow"></div>
        </div>
        <span>${name}</span>
      </div>
    `;
  }).join("");
}

/* ============ NAVBAR ACTIVE ============ */
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {
  let current = "";

  document.querySelectorAll("section[id]").forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current
    );
  });
});

/* ============ HOME ANIMATION + ORANGE PARTICLES ============ */
(function () {
  const home = $("home") ||
    document.querySelector(".home") ||
    document.querySelector(".hero");

  if (!home) return;

  home.classList.add("home-animated");

  let particles = home.querySelector(".home-particles");

  if (!particles) {
    particles = document.createElement("div");
    particles.className = "home-particles";
    particles.setAttribute("aria-hidden", "true");
    home.prepend(particles);
  }

  if (!particles.children.length) {
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("span");
      particle.className = "home-particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 8 + "s";
      particle.style.animationDuration = (5 + Math.random() * 7) + "s";
      particle.style.setProperty(
        "--drift",
        (Math.random() * 100 - 50) + "px"
      );
      particles.appendChild(particle);
    }
  }

  const content = home.querySelectorAll(
    ".small-title, h1, h2, p, .main-btn, .hero-buttons, .hero-content > *"
  );

  content.forEach((element, index) => {
    element.classList.add("home-drop");
    element.style.setProperty("--drop-delay", (index * 100) + "ms");
  });

  const showHome = () => home.classList.add("home-visible");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          showHome();
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(home);
  } else {
    showHome();
  }

  home.addEventListener("pointermove", event => {
    const rect = home.getBoundingClientRect();
    home.style.setProperty("--mouse-x", (event.clientX - rect.left) + "px");
    home.style.setProperty("--mouse-y", (event.clientY - rect.top) + "px");
  });

  home.addEventListener("pointerleave", () => {
    home.style.setProperty("--mouse-x", "50%");
    home.style.setProperty("--mouse-y", "50%");
  });
})();

/* ============ SPLASH PETIR + SUARA + LOADING ============ */
(function () {
  if ($("splash")) return;

  const splash = document.createElement("div");
  splash.id = "splash";

  splash.innerHTML = `
    <canvas></canvas>
    <div class="splash-text">
      <small>WELCOME TO</small>
      <h1>W4RPAD</h1>
      <div class="splash-loading">
        <div class="splash-progress">
          <i id="splashProgressBar"></i>
        </div>
        <div class="splash-loading-info">
          <span>INITIALIZING SYSTEM</span>
          <strong id="splashPercent">1%</strong>
        </div>
      </div>
    </div>
  `;

  document.body.prepend(splash);

  const canvas = splash.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const thunderAudio = $("thunderAudio");
  const progressBar = $("splashProgressBar");
  const progressText = $("splashPercent");

  let boltAnimation = 0;
  let boltTimer = 0;
  let introTimeout = 0;
  let flashTimeout = 0;
  let progressTimer = 0;
  let introActive = false;
  let progress = 1;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  function startLoadingProgress() {
    clearInterval(progressTimer);
    progress = 1;

    if (progressBar) progressBar.style.width = "1%";
    if (progressText) progressText.textContent = "1%";

    progressTimer = setInterval(() => {
      progress = Math.min(progress + 1, 100);

      if (progressBar) progressBar.style.width = progress + "%";
      if (progressText) progressText.textContent = progress + "%";

      if (progress >= 100) {
        clearInterval(progressTimer);
        progressTimer = 0;
      }
    }, 30);
  }

  function makeBolt(x, depth = 0) {
    const points = [[x, 0]];
    let currentX = x;
    let currentY = 0;

    while (currentY < canvas.height) {
      currentY += 14 + Math.random() * 28;
      currentX += (Math.random() - 0.5) * 70;
      points.push([currentX, currentY]);
    }

    points.branches = [];

    if (depth < 1) {
      points.forEach((point, index) => {
        if (index > 3 && Math.random() < 0.12) {
          points.branches.push(
            makeBolt(point[0], 1)
              .slice(0, 8)
              .map(item => [
                item[0] + point[0] - x,
                item[1] + point[1]
              ])
          );
        }
      });
    }

    return points;
  }

  function drawBolt(points, width, alpha) {
    ctx.beginPath();

    points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point[0], point[1]);
      } else {
        ctx.lineTo(point[0], point[1]);
      }
    });

    ctx.lineWidth = width;
    ctx.strokeStyle = `rgba(255,190,110,${alpha})`;
    ctx.shadowColor = "#ff8a25";
    ctx.shadowBlur = 25;
    ctx.stroke();

    ctx.lineWidth = width / 3;
    ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
    ctx.shadowBlur = 0;
    ctx.stroke();

    (points.branches || []).forEach(branch => {
      drawBolt(branch, width / 2, alpha * 0.7);
    });
  }

  function strike() {
    const bolts = [
      makeBolt(canvas.width * (0.25 + Math.random() * 0.5))
    ];

    if (Math.random() < 0.5) {
      bolts.push(makeBolt(canvas.width * Math.random()));
    }

    let life = 0;
    cancelAnimationFrame(boltAnimation);

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (life < 9) {
        bolts.forEach(bolt => {
          drawBolt(bolt, 4, life % 3 === 1 ? 0.35 : 1);
        });

        life++;
        boltAnimation = requestAnimationFrame(draw);
      }
    }

    draw();
  }

  function stopThunder() {
    if (!thunderAudio) return;

    thunderAudio.pause();

    try {
      thunderAudio.currentTime = 0;
    } catch (error) {}
  }

  function stopIntro() {
    introActive = false;

    clearInterval(boltTimer);
    clearTimeout(introTimeout);
    clearInterval(progressTimer);
    cancelAnimationFrame(boltAnimation);

    boltTimer = 0;
    introTimeout = 0;
    progressTimer = 0;

    stopThunder();
    splash.classList.add("hide");
    document.body.style.overflow = "";
  }

  function playThunder() {
    if (!thunderAudio || !introActive || !thunderAudio.paused) return;

    thunderAudio.volume = 0.75;
    thunderAudio.loop = true;

    try {
      thunderAudio.currentTime = 0;
    } catch (error) {}

    const result = thunderAudio.play();

    if (result && typeof result.catch === "function") {
      result.catch(error => {
        console.warn("Audio petir menunggu interaksi pengguna.", error);
      });
    }
  }

  window.playIntro = function () {
    clearInterval(boltTimer);
    clearTimeout(introTimeout);
    clearTimeout(flashTimeout);
    cancelAnimationFrame(boltAnimation);

    stopThunder();
    introActive = true;

    splash.classList.remove("hide");
    document.body.style.overflow = "hidden";

    startLoadingProgress();

    splash.querySelectorAll(
      ".splash-text, .splash-loading, .splash-progress i"
    ).forEach(element => {
      element.style.animation = "none";
      void element.offsetWidth;
      element.style.animation = "";
    });

    strike();
    boltTimer = setInterval(strike, 420);

    if (thunderAudio) {
      thunderAudio.loop = true;
      thunderAudio.volume = 0.75;

      try {
        thunderAudio.currentTime = 0;
      } catch (error) {}

      const promise = thunderAudio.play();

      if (promise && typeof promise.catch === "function") {
        promise.catch(error => {
          console.warn("Audio petir diblokir browser:", error);
        });
      }
    }

    introTimeout = setTimeout(() => {
      if (progress < 100) {
        const waitForProgress = setInterval(() => {
          if (progress >= 100) {
            clearInterval(waitForProgress);
            finishIntro();
          }
        }, 50);
      } else {
        finishIntro();
      }
    }, 3000);
  };

  function finishIntro() {
    stopIntro();
    document.body.classList.add("flash");

    flashTimeout = setTimeout(() => {
      document.body.classList.remove("flash");
    }, 600);
  }

  function retryThunder() {
    if (introActive && thunderAudio && thunderAudio.paused) {
      playThunder();
    }
  }

  document.addEventListener("pointerdown", retryThunder);
  document.addEventListener("keydown", retryThunder);

  window.playIntro();

  document.addEventListener("click", event => {
    if (event.target.closest(".nav-logo, .footer-logo, .contact-logo")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.playIntro();
    }
  });
})();

/* ============ VOICE HERO ============ */
(function () {
  const toast = document.createElement("div");
  toast.id = "voiceToast";
  document.body.appendChild(toast);

  let audio = null;
  let toastTimer = 0;
  const cache = {};

  const slug = name =>
    name.toLowerCase().replace(/[^a-z0-9]/g, "");

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2600);
  }

  function findAudio(obj) {
    const urls = [];

    function walk(value, key = "") {
      if (!value) return;

      if (typeof value === "string") {
        if (
          /\.(mp3|ogg|wav|m4a|aac)(\?|$)/i.test(value) ||
          (/voice|audio|sound|speak/i.test(key) && /^https?:/.test(value))
        ) {
          urls.push(value);
        }
      } else if (typeof value === "object") {
        for (const property in value) {
          walk(value[property], property);
        }
      }
    }

    walk(obj);
    return urls;
  }

  async function getVoice(name) {
    if (name in cache) return cache[name];

    let url = null;

    try {
      const localURL = `audio/${slug(name)}.mp3`;
      const response = await fetch(localURL, { method: "HEAD" });

      if (response.ok) url = localURL;
    } catch (error) {}

    if (!url) {
      try {
        const response = await fetch(
          `https://arena.rone.dev/api/heroes/${encodeURIComponent(name)}?size=1&lang=en`
        );

        if (response.ok) {
          const urls = findAudio(await response.json());

          if (urls.length) {
            url = urls[Math.floor(Math.random() * urls.length)];
          }
        }
      } catch (error) {}
    }

    cache[name] = url;
    return url;
  }

  document.addEventListener("click", async event => {
    const card = event.target.closest(".hero-card, .draft-card");
    if (!card) return;

    const nameElement = card.querySelector(".hero-name, span");
    const name = nameElement?.textContent?.trim();

    if (!name) return;

    if (audio) {
      audio.pause();
      audio = null;
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    document.querySelectorAll(".speaking").forEach(element => {
      element.classList.remove("speaking");
    });

    card.classList.add("speaking");
    showToast("🔊 " + name);

    let finished = false;

    const end = () => {
      if (finished) return;
      finished = true;
      card.classList.remove("speaking");
    };

    const url = await getVoice(name);

    if (url) {
      audio = new Audio(url);
      audio.onended = end;
      audio.onerror = end;
      audio.play().catch(() => end());
    } else if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(name);

      utterance.lang = "en-US";
      utterance.pitch = 0.8;
      utterance.rate = 0.9;
      utterance.onend = end;
      utterance.onerror = end;

      window.speechSynthesis.speak(utterance);
    } else {
      end();
    }
  });
})();

/* ============ START ============ */
loadHeroes();

/* ============ REVEAL, TILT 3D, LOGO 3D KONTAK ============ */
(function () {
  const targets =
    ".section-heading, .player-card, .sub-card, .gallery-item, " +
    ".hero-player-section, .contact-box, .contact-item";

  let io = null;

  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }

  function scan() {
    document.querySelectorAll(targets).forEach(el => {
      if (el.dataset.rv) return;
      el.dataset.rv = "1";

      const siblings = el.parentElement
        ? [...el.parentElement.children]
        : [];

      el.style.setProperty(
        "--rd",
        (siblings.indexOf(el) % 6) * 90 + "ms"
      );

      if (!io) {
        el.classList.add("in");
        return;
      }

      el.classList.add("reveal");
      io.observe(el);
    });
  }

  scan();

  let timer = 0;

  new MutationObserver(() => {
    clearTimeout(timer);
    timer = setTimeout(scan, 80);
  }).observe(document.body, {
    childList: true,
    subtree: true
  });

  /* tilt 3D kartu player */
  document.addEventListener("pointermove", event => {
    const card = event.target.closest?.(".player-card");
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    card.style.setProperty("--ry", (x * 14).toFixed(2) + "deg");
    card.style.setProperty("--rx", (-y * 14).toFixed(2) + "deg");
  });

  document.addEventListener("pointerout", event => {
    const card = event.target.closest?.(".player-card");
    if (!card) return;

    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  });

  /* logo 3D kontak */
  const logo = document.querySelector(".contact-logo");

  if (logo) {
    const shadow = document.createElement("i");
    logo.appendChild(shadow);

    const img = logo.querySelector("img");
    const box = document.querySelector(".contact-box");

    if (img && box) {
      box.addEventListener("pointermove", event => {
        const rect = logo.getBoundingClientRect();
        const x = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
        const y = (event.clientY - (rect.top + rect.height / 2)) / rect.height;

        img.style.animation = "none";
        img.style.transform =
          `rotateY(${Math.max(-40, Math.min(40, x * 22))}deg) ` +
          `rotateX(${Math.max(-40, Math.min(40, -y * 22))}deg) scale(1.06)`;
      });

      box.addEventListener("pointerleave", () => {
        img.style.transform = "";
        img.style.animation = "";
      });
    }
  }
})();

/* ============ INTRO ULAR SETELAH INTRO PETIR ============ */
(function () {
  const splash = $("splash");
  if (!splash) return;

  // Gambar berada di folder utama repository.
  const IMG_SRC = "./intro-ular.jpg";
  const START_DELAY = 600;
  const TOTAL_TIME = 6500;

  const reduceMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const preload = new Image();
  preload.src = IMG_SRC;

  const imageReady = new Promise((resolve, reject) => {
    if (preload.complete) {
      preload.naturalWidth ? resolve() : reject();
    } else {
      preload.onload = resolve;
      preload.onerror = reject;
    }
  });

  imageReady.catch(() => {});

  function startSmoke(canvas, box) {
    const ctx = canvas.getContext("2d");
    let w = 2;
    let h = 2;
    let id = 0;
    let last = performance.now();

    function size() {
      w = canvas.width = Math.max(2, Math.round(box.clientWidth / 2));
      h = canvas.height = Math.max(2, Math.round(box.clientHeight / 2));
    }

    size();

    const puffs = Array.from({ length: 34 }, () => ({
      angle: Math.random() * Math.PI * 2,
      ring: 0.72 + Math.random() * 0.36,
      radius: 0.07 + Math.random() * 0.12,
      speed: (0.00006 + Math.random() * 0.00018) *
        (Math.random() < 0.5 ? -1 : 1),
      phase: Math.random() * Math.PI * 2
    }));

    function draw(now) {
      const dt = Math.min(64, now - last);
      last = now;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      puffs.forEach(p => {
        p.angle += p.speed * dt;

        const x = w * 0.51 + Math.cos(p.angle) * w * 0.4 * p.ring;
        const y = h * 0.52 + Math.sin(p.angle) * h * 0.4 * p.ring;
        const r = p.radius * w;
        const alpha = 0.045 + 0.05 *
          ((Math.sin(now * 0.001 + p.phase) + 1) / 2);

        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(255,255,255,${alpha})`);
        g.addColorStop(1, "rgba(255,255,255,0)");

        ctx.fillStyle = g;
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
      });

      if (!reduceMotion) id = requestAnimationFrame(draw);
    }

    id = requestAnimationFrame(draw);
    window.addEventListener("resize", size);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", size);
    };
  }

  let overlay = null;
  let stopSmoke = null;
  let timers = [];
  let leaving = false;

  const later = (fn, ms) => timers.push(setTimeout(fn, ms));

  function stopAll() {
    timers.forEach(clearTimeout);
    timers = [];

    if (stopSmoke) {
      stopSmoke();
      stopSmoke = null;
    }
  }

  function leave() {
    if (!overlay || leaving) return;
    leaving = true;

    const node = overlay;
    node.classList.add("out");

    timers.forEach(clearTimeout);
    timers = [];

    setTimeout(() => {
      if (overlay !== node) return;

      if (stopSmoke) {
        stopSmoke();
        stopSmoke = null;
      }

      node.remove();
      overlay = null;
      document.body.style.overflow = "";
    }, 950);
  }

  function remove() {
    stopAll();

    if (overlay) {
      overlay.remove();
      overlay = null;
    }

    leaving = false;
  }

  function playSnake() {
    remove();

    const node = document.createElement("div");
    node.id = "snakeIntro";

    node.innerHTML = `
      <div class="snake-parallax">
        <div class="snake-center">
          <div class="snake-zoom">
            <div class="snake-art">
              <img class="snake-img" src="${IMG_SRC}" alt="" draggable="false">
              <canvas class="snake-smoke"></canvas>
              <i class="snake-eye eye-l"></i>
              <i class="snake-eye eye-r"></i>
              <div class="snake-glitch glitch-a"></div>
              <div class="snake-glitch glitch-b"></div>
              <div class="snake-sweep"></div>
              <div class="snake-tongue"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="snake-vignette"></div>
      <div class="snake-flicker"></div>
      <div class="snake-flash"></div>
    `;

    overlay = node;
    document.body.appendChild(node);
    document.body.style.overflow = "hidden";

    node.addEventListener("click", leave);

    const parallax = node.querySelector(".snake-parallax");

    node.addEventListener("pointermove", event => {
      parallax.style.setProperty(
        "--px",
        ((event.clientX / window.innerWidth - 0.5) * 2).toFixed(3)
      );

      parallax.style.setProperty(
        "--py",
        ((event.clientY / window.innerHeight - 0.5) * 2).toFixed(3)
      );
    });

    imageReady
      .then(() => {
        if (overlay !== node || leaving) return;

        later(() => {
          if (overlay !== node || leaving) return;

          node.classList.add("go");

          stopSmoke = startSmoke(
            node.querySelector(".snake-smoke"),
            node.querySelector(".snake-art")
          );

          later(leave, TOTAL_TIME);
        }, START_DELAY);
      })
      .catch(() => {
        if (overlay === node) leave();
      });
  }

  let wasHidden = splash.classList.contains("hide");

  new MutationObserver(() => {
    const hidden = splash.classList.contains("hide");

    if (hidden && !wasHidden) playSnake();
    if (!hidden && wasHidden) remove();

    wasHidden = hidden;
  }).observe(splash, {
    attributes: true,
    attributeFilter: ["class"]
  });
})();
