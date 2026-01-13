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
  });
});
