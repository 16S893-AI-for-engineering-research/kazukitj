(() => {
  "use strict";

  const EGG_SEQUENCE = "893";
  const TAP_COUNT = 5;
  const TAP_WINDOW = 2600;
  let typedKeys = "";
  let taps = [];
  let eggActive = false;

  function launchSatellite() {
    if (eggActive) return;
    eggActive = true;

    const layer = document.createElement("div");
    layer.className = "easter-egg";
    layer.setAttribute("aria-hidden", "true");
    layer.innerHTML = `
      <div class="satellite">
        <span class="satellite__panel satellite__panel--left"></span>
        <span class="satellite__body"><i></i></span>
        <span class="satellite__panel satellite__panel--right"></span>
      </div>
      <p>Signal acquired <strong>16.S893</strong></p>
    `;
    document.body.appendChild(layer);

    const announcer = document.querySelector(".egg-announcer");
    if (announcer) announcer.textContent = "Easter egg found. Signal acquired: 16.S893.";

    window.setTimeout(() => {
      layer.remove();
      if (announcer) announcer.textContent = "";
      eggActive = false;
    }, 5200);
  }

  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    const target = event.target;
    const isTyping = target instanceof HTMLElement &&
      (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));
    if (isTyping) return;

    typedKeys = (typedKeys + event.key).slice(-EGG_SEQUENCE.length);
    if (typedKeys === EGG_SEQUENCE) {
      typedKeys = "";
      launchSatellite();
    }
  });

  const orbitMarker = document.querySelector(".footer-orbit");
  orbitMarker?.addEventListener("click", () => {
    const now = Date.now();
    taps = taps.filter((time) => now - time < TAP_WINDOW);
    taps.push(now);
    if (taps.length >= TAP_COUNT) {
      taps = [];
      launchSatellite();
    }
  });

  const talkSections = [...document.querySelectorAll("[data-talk-section]")];
  const talkLinks = [...document.querySelectorAll("[data-talk-link]")];
  const talkProgress = document.querySelector(".talk-progress span");

  if (talkSections.length && talkLinks.length && "IntersectionObserver" in window) {
    const setActiveTalkSection = (sectionId) => {
      const sectionIndex = talkSections.findIndex(
        (section) => section.getAttribute("data-talk-section") === sectionId
      );

      talkLinks.forEach((link) => {
        const isActive = link.getAttribute("data-talk-link") === sectionId;
        if (isActive) {
          link.setAttribute("aria-current", "step");
        } else {
          link.removeAttribute("aria-current");
        }
      });

      if (talkProgress && sectionIndex >= 0) {
        talkProgress.style.transform = `scaleX(${(sectionIndex + 1) / talkSections.length})`;
      }
    };

    const talkObserver = new IntersectionObserver((entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleSection) {
        setActiveTalkSection(visibleSection.target.getAttribute("data-talk-section"));
      }
    }, {
      rootMargin: "-24% 0px -54% 0px",
      threshold: [0, 0.1, 0.25, 0.5]
    });

    talkSections.forEach((section) => talkObserver.observe(section));
  }
})();
