<body>

<div class="study-header">
  <button onclick="window.location.href='index.html'">⬅ Trang chính</button>
  <h2>📘 Study Mode</h2>
</div>

<iframe id="studyFrame"></iframe>

<script>
  const frame = document.getElementById("studyFrame");
  const type = new URLSearchParams(window.location.search).get("type");

  if (type === "vocabulary") {
    frame.src = "https://docs.google.com/document/d/e/2PACX-1vTGBaXh1duKyvYFKJcN83V_IQLlo_qmMVdD5Y7wr6pDOzUXndBgTL8Ntj2QQJVJaIYTzwkEcEYFLy5K/pub?embedded=true";
  }
</script>

</body>
