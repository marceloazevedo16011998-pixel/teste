# Instalação da extensão

1. Instale Node.js 20+.
2. Execute `npm install`.
3. Execute `npm run build:chrome`.
4. Abra `chrome://extensions`.
5. Ative Modo do desenvolvedor.
6. Clique em Carregar sem compactação.
7. Selecione diretamente a pasta `chrome-extension/`.

Para gerar o pacote: `npm run package:chrome`. O arquivo será `MG-AI-Developer-Chrome.zip`, com `manifest.json` na raiz do ZIP.

Integrações externas só funcionarão após configuração real do backend, Google OAuth, GitHub App e provedor de IA.
