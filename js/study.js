const frame = document.getElementById("studyFrame");
const params = new URLSearchParams(window.location.search);
const type = params.get("type");

const docs = {
  vocabulary: "https://docs.google.com/document/d/e/2PACX-1vTGBaXh1duKyvYFKJcN83V_IQLlo_qmMVdD5Y7wr6pDOzUXndBgTL8Ntj2QQJVJaIYTzwkEcEYFLy5K/pub?embedded=true",

  grammar: "https://docs.google.com/document/d/e/2PACX-1vRyJLuGQmWndcXFgAXZ9r8icwKNMYmy6Kb7XBfEjRQh6tJf_YNoH4EiNp4Gm_2li5JyXEtFzhk6kwhN/pub?embedded=true",

  writing: "https://docs.google.com/document/d/e/2PACX-1vTEKqG7SMo79PDVV_FdzAH1BUbg6AXqkvSJM5zZwpCNSsoB005pw6MqvS2fswU9JuVlyHjwyzTQtkZx/pub?embedded=true"
};

frame.src = docs[type] || "https://google.com";

function goHome() {
  window.location.href = "index.html";
}
