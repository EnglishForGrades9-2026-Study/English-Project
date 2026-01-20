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
