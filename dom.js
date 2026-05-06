function renderActivities(data) {
  let total = 0;
  let text = "";

  data.forEach((d, i) => {
    total += d.minutes;
    text += (i + 1) + ". " + d.activity + " - " + d.minutes + " menit\n";
  });

  document.getElementById("total").innerText =
    "Total: " + total + " menit";

  document.getElementById("list").innerText =
    text || "Belum ada data";
}

function showAnalysis(text) {
  document.getElementById("result").innerText = text;
}

function showImageLoading() {
  document.getElementById("imageStatus").innerText = "Membuat gambar...";
  document.getElementById("aiImage").style.display = "none";
}

function showImage(base64) {
  const img = document.getElementById("aiImage");
  img.src = "data:image/png;base64," + base64;
  img.style.display = "block";

  document.getElementById("imageStatus").innerText =
    "Gambar berhasil dibuat";
}

function showError(id, msg) {
  document.getElementById(id).innerText = msg;
}
