<body>

<div class="study-header">
  <button onclick="window.location.href='index.html'">⬅ Trang chính</button>
  <h2>📘 Study Mode</h2>
</div>

<iframe id="studyFrame"></iframe>

<script>
  const frame = document.getElementById("studyFrame");
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");

  if (type === "vocabulary") {
    frame.src = "https://docs.google.com/document/d/e/2PACX-1vTGBaXh1duKyvYFKJcN83V_IQLlo_qmMVdD5Y7wr6pDOzUXndBgTL8Ntj2QQJVJaIYTzwkEcEYFLy5K/pub?embedded=true";
  } 
  else if (type === "grammar") {
    frame.src = "https://docs.google.com/document/d/e/2PACX-1vRyJLuGQmWndcXFgAXZ9r8icwKNMYmy6Kb7XBfEjRQh6tJf_YNoH4EiNp4Gm_2li5JyXEtFzhk6kwhN/pub?embedded=true";
  } 
  else if (type === "writing") {
    frame.src = "https://docs.google.com/document/d/e/2PACX-1vTEKqG7SMo79PDVV_FdzAH1BUbg6AXqkvSJM5zZwpCNSsoB005pw6MqvS2fswU9JuVlyHjwyzTQtkZx/pub?embedded=true";
  } 
  else {
    frame.src = "https://docs.google.com";
  }
</script>

</body>
