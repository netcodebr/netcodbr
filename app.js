// app.js
const elYear = document.getElementById('year');
if (elYear) elYear.textContent = new Date().getFullYear();

const elStatus = document.getElementById('fb-status');
const elBtnTest = document.getElementById('btn-test');
const elBtnInstall = document.getElementById('btn-install');

let deferredPrompt = null;

// PWA install prompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (elBtnInstall) elBtnInstall.style.display = 'inline-block';
});

if (elBtnInstall) {
  elBtnInstall.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    elBtnInstall.textContent = 'Instalado ✅';
    elBtnInstall.disabled = true;
  });
}

// Testa se o Firebase foi carregado pelo firebase.js
if (window.__firebaseReady) {
  elStatus && (elStatus.textContent = 'Firebase carregado ✅');
} else {
  elStatus && (elStatus.textContent = 'Carregando Firebase…');
}

if (elBtnTest) {
  elBtnTest.addEventListener('click', async () => {
    try {
      // apenas um "ping" simples
      await new Promise(r => setTimeout(r, 300));
      elStatus.textContent = 'Firebase OK ✅ (config lida do firebase.js)';
    } catch (e) {
      elStatus.textContent = 'Erro testando Firebase: ' + e.message;
    }
  });
}
