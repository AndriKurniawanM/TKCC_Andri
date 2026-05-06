const API_BASE = "https://activity-ai-backend.vercel.app";

document.getElementById("addBtn").addEventListener("click", () => {
  const a = document.getElementById("act").value.trim();
  const m = Number(document.getElementById("min").value);

  if (!a || !m) {
    alert("Isi data dengan benar");
    return;
  }

  addActivity(a, m);

  document.getElementById("act").value = "";
  document.getElementById("min").value = "";

  renderActivities(getActivities());
});

document.getElementById("analysisBtn").addEventListener("click", async () => {
  const data = getActivities();
  if (data.length === 0) return;

  showAnalysis("Menganalisis...");

  const daftar = data.map((d, i) =>
    (i + 1) + ". " + d.activity + " - " + d.minutes + " menit"
  ).join("\n");

  try {
    const res = await fetch(`${API_BASE}/api/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ activities: daftar })
    });

    const json = await res.json();

    showAnalysis(json.result || json.error || "Tidak ada hasil");

  } catch {
    showAnalysis("Gagal koneksi ke AI");
  }
});

document.getElementById("generateBtn").addEventListener("click", async () => {
  const data = getActivities();
  if (data.length === 0) {
    showError("imageStatus", "Masukkan aktivitas dulu");
    return;
  }

  showImageLoading();

  const daftar = data.map((d, i) =>
    (i + 1) + ". " + d.activity + " - " + d.minutes + " menit"
  ).join("\n");

  try {
    const res = await fetch(`${API_BASE}/api/generate-image`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ activities: daftar })
    });

    const json = await res.json();

    if (json.image) {
      showImage(json.image);
    } else {
      showError("imageStatus", json.error || "Gagal membuat gambar");
    }

  } catch {
    showError("imageStatus", "Gagal koneksi ke backend");
  }
});

renderActivities(getActivities());
