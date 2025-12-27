// Год в футере
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Плавный скролл
document.querySelectorAll("[data-scroll]").forEach(a => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href") || "";
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});

// Генерация оглавления по H2/H3 (похоже на статьи из примеров)
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const article = document.querySelector(".article");
const headings = article ? Array.from(article.querySelectorAll("h2, h3")) : [];
const tocDesktop = document.getElementById("tocNavDesktop");
const tocMobile = document.getElementById("tocNavMobile");

function buildToc(container) {
  if (!container) return;
  container.innerHTML = "";

  headings.forEach(h => {
    if (!h.id) h.id = slugify(h.textContent || "section");
    const a = document.createElement("a");
    a.href = `#${h.id}`;
    a.textContent = h.textContent || "";
    a.className = `depth-${h.tagName === "H3" ? "3" : "2"}`;
    a.addEventListener("click", (e) => {
      // Для мобильного: закрывать оглавление после клика
      const tocBody = document.getElementById("tocBody");
      const toggle = document.getElementById("tocToggle");
      if (tocBody && toggle && !tocBody.hidden) {
        tocBody.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    container.appendChild(a);
  });
}

buildToc(tocDesktop);
buildToc(tocMobile);

// Подсветка текущего пункта оглавления
const tocLinks = [];
document.querySelectorAll("#tocNavDesktop a, #tocNavMobile a").forEach(a => tocLinks.push(a));

function onScroll() {
  const fromTop = window.scrollY + 110;
  let currentId = "";
  for (const h of headings) {
    if (h.offsetTop <= fromTop) currentId = h.id;
  }
  tocLinks.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${currentId}`);
  });
}
window.addEventListener("scroll", onScroll);
onScroll();

// Мобильное оглавление: раскрытие/скрытие
const toggle = document.getElementById("tocToggle");
const body = document.getElementById("tocBody");
if (toggle && body) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    body.hidden = isOpen;
  });
}
