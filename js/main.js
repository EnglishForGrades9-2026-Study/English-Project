// QUAY VỀ TRANG CHÍNH
function goHome() {
  window.location.href = "index.html";
}

// LOAD GOOGLE DOCS THEO TYPE
const frame = document.getElementById("studyFrame");
const params = new URLSearchParams(window.location.search);
const type = params.get("type");

// nếu iframe không tồn tại → dừng
if (!frame) {
  console.error("Không tìm thấy iframe");
}

// chọn nội dung
if (type === "vocabulary") {
  frame.src =
    "https://docs.google.com/document/d/e/2PACX-1vTGBaXh1duKyvYFKJcN83V_IQLlo_qmMVdD5Y7wr6pDOzUXndBgTL8Ntj2QQJVJaIYTzwkEcEYFLy5K/pub?embedded=true";
}
else if (type === "grammar") {
  frame.src =
    "https://docs.google.com/document/d/e/2PACX-1vRyJLuGQmWndcXFgAXZ9r8icwKNMYmy6Kb7XBfEjRQh6tJf_YNoH4EiNp4Gm_2li5JyXEtFzhk6kwhN/pub?embedded=true";
}
else if (type === "writing") {
  frame.src =
    "https://docs.google.com/document/d/e/2PACX-1vTEKqG7SMo79PDVV_FdzAH1BUbg6AXqkvSJM5zZwpCNSsoB005pw6MqvS2fswU9JuVlyHjwyzTQtkZx/pub?embedded=true";
}
else {
  // mặc định (phòng khi user vào trực tiếp study.html)
  frame.src =
    "https://docs.google.com/document/d/e/2PACX-1vTGBaXh1duKyvYFKJcN83V_IQLlo_qmMVdD5Y7wr6pDOzUXndBgTL8Ntj2QQJVJaIYTzwkEcEYFLy5K/pub?embedded=true";
}

// nút mindmap 
const buttons = document.querySelectorAll(".mindmap-btn");
const modal = document.getElementById("mindmapModal");
const frame = document.getElementById("mindmapFrame");
const closeBtn = document.getElementById("closeModal");

buttons.forEach(btn => {
  btn.onclick = () => {
    frame.src = btn.dataset.src;
    modal.style.display = "flex";
  };
});

closeBtn.onclick = () => {
  modal.style.display = "none";
  frame.src = "";
};

modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    frame.src = "";
  }
};

// CLICK PHÓNG TO MINDMAP
document.querySelectorAll(".mindmap-view img").forEach(img => {
  img.addEventListener("click", () => {
    document.getElementById("zoomImg").src = img.src;
    document.getElementById("mindmapZoom").style.display = "flex";
  });
});

// ĐÓNG
document.getElementById("closeZoom").onclick = () => {
  document.getElementById("mindmapZoom").style.display = "none";
};

document.getElementById("mindmapZoom").onclick = (e) => {
  if (e.target.id === "mindmapZoom") {
    e.currentTarget.style.display = "none";
  }
};

// nhiệm vụ hàng ngày 
const tasks = document.querySelectorAll('[data-task]');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const doneCount = document.getElementById('doneCount');
const totalCount = document.getElementById('totalCount');
const todayEl = document.getElementById('today');

const today = new Date().toLocaleDateString();
todayEl.textContent = "📆 " + today;

const STORAGE_KEY = "studyTasks_" + today;

// reset nếu sang ngày mới
if (!localStorage.getItem("lastDay") || localStorage.getItem("lastDay") !== today) {
  localStorage.clear();
  localStorage.setItem("lastDay", today);
}

// load trạng thái
const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
tasks.forEach((task, i) => {
  task.checked = saved[i] || false;
});

function updateProgress() {
  const total = tasks.length;
  const done = [...tasks].filter(t => t.checked).length;
  const percent = Math.round((done / total) * 100);

  progressFill.style.width = percent + "%";
  progressText.textContent = percent + "%";
  doneCount.textContent = done;
  totalCount.textContent = total;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...tasks].map(t => t.checked))
  );
}

tasks.forEach(task => task.addEventListener('change', updateProgress));
updateProgress();
