const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  const p = document.getElementById('text');
  p.textContent = "Button clicked! Committed to GitHub.";
  console.log("Button clicked at", new Date().toISOString());
});
