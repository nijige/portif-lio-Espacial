/* ===== STARFIELD ===== */
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];
let W, H;

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

function initStars() {
  stars = [];
  const count = Math.floor((W * H) / 3500);
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.004 + 0.001,
      twinkle: Math.random() * Math.PI * 2,
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, W, H);
  for (const s of stars) {
    s.twinkle += s.speed;
    const alpha = (Math.sin(s.twinkle) * 0.4 + 0.6) * s.alpha;
    
    // slight color variety
    const hue = Math.random() > 0.97 ? `hsla(270, 80%, 80%, ${alpha})` 
               : Math.random() > 0.95 ? `hsla(190, 70%, 80%, ${alpha})`
               : `rgba(255,255,255,${alpha})`;
    
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = hue;
    ctx.fill();
  }
  requestAnimationFrame(drawStars);
}

resize();
initStars();
drawStars();
window.addEventListener('resize', () => { resize(); initStars(); });

/* ===== SCROLL REVEALS ===== */
const reveals = document.querySelectorAll(
  '.skill-card, .timeline-item, .edu-card, .hero-visual, .section-header'
);

reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach(el => observer.observe(el));

/* ===== NAV ACTIVE STATE ===== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.style.color = 'var(--accent)';
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);
sections.forEach(s => sectionObserver.observe(s));

/* ===== STAGGERED GRID REVEALS ===== */
const gridObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll('.reveal');
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add('visible'), i * 100);
        });
        gridObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.skills-grid, .edu-grid').forEach(g => gridObserver.observe(g));
