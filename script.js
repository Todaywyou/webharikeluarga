document.getElementById("openBtn").addEventListener("click", function () {
  const flap = document.querySelector(".flap");
  flap.style.transform = "rotateX(-120deg)";

  // Delay untuk memberikan efek buka amplop dulu sebelum pindah halaman
  setTimeout(() => {
    window.location.href = "halaman-dua.html";
  }, 1200);
});
