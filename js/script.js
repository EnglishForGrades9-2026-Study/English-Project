console.log("Website đã chạy");

// nhạc nền
const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");
const label = document.getElementById("musicLabel");
const select = document.getElementById("musicSelect");

let isPlaying = false;

// CLICK → CHẠY / DỪNG NHẠC
toggle.addEventListener("click", () => {
  if (!isPlaying) {
    music.play().then(() => {
      isPlaying = true;
      toggle.textContent = "🔊";
    }).catch(err => {
      console.log("Play bị chặn:", err);
    });
  } else {
    music.pause();
    isPlaying = false;
    toggle.textContent = "🎵";
  }
});

// ĐỔI NHẠC
select.addEventListener("change", () => {
  music.src = select.value;
  music.load();
  music.play().then(() => {
    isPlaying = true;
    toggle.textContent = "🔊";
    label.textContent = select.options[select.selectedIndex].text;
    label.style.opacity = "1";
  });
});

// hover mindmap
document.querySelectorAll(".hover-direction-text").forEach(el => {
  el.addEventListener("mousemove", e => {
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    el.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
  });

  el.addEventListener("mouseleave", () => {
    el.style.backgroundPosition = "50% 50%";
  });
});
