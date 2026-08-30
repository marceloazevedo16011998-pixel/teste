const message = document.getElementById('message');
document.getElementById('connect').addEventListener('click', () => {
  message.textContent = 'Configuração necessária: GitHub App + backend seguro ainda precisam ser configurados para autenticação real.';
});
chrome.runtime.sendMessage({ type: 'PING' }).then?.(() => {});
