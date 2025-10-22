function updateTime() {
  const timeElement = document.getElementById("current-time");
  timeElement.textContent = Date.now();
}

setInterval(updateTime, 1);


document.querySelectorAll('.social-links a').forEach(link => {
  link.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      link.click();
    }
  });
});
