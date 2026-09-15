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
})();
