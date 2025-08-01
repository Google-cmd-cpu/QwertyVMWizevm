
document.getElementById('language').addEventListener('change', function() {
  loadLang(this.value);
});

function loadLang(lang) {
  fetch(`langs/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        el.textContent = data[key] || key;
      });
    });
}

function connectVNC(wsUrl) {
  window.location.href = `console.html?ws=${encodeURIComponent(wsUrl)}`;
}

function connectUserVM() {
  const name = document.getElementById("uservmInput").value.trim();
  if (!name) {
    alert("Введіть ім’я UserVM");
    return;
  }
  const fullWS = `wss://wizevm.live/collab-vm/${name}`;
  window.location.href = `console.html?customws=${encodeURIComponent(fullWS)}`;
}

loadLang('en');
