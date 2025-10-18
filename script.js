function updateTime() {
  const currentTimeEl = document.getElementById("current-time");
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  currentTimeEl.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();
document.querySelectorAll('.social-links a').forEach(link => {
  link.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      link.click();
    }
  });
});
