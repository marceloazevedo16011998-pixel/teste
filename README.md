# MG Desenvolvimento Digital — MG AI Developer

Plataforma SaaS + extensão Chrome Manifest V3 para desenvolvimento assistido por IA e GitHub.

## Estado atual

Este repositório foi recriado com uma base real de extensão Chrome local. O Manifest V3, Side Panel e Service Worker estão preparados. Autenticação Google, GitHub App, backend, banco, licença e provedor de IA permanecem **pendentes de credenciais/infraestrutura externa** e não são simulados.

## Extensão

A saída de instalação é `chrome-extension/`. O `manifest.json` fica diretamente na raiz.

```bash
npm install
npm run build:chrome
npm run check:chrome
npm run package:chrome
```

No Chrome: `chrome://extensions` → Modo do desenvolvedor → Carregar sem compactação → selecione `chrome-extension/`.

## Segurança

Secrets nunca devem ser colocados na extensão. Use `.env.example` apenas como referência e configure secrets exclusivamente no backend/ambiente seguro.

## Configuração externa

- GitHub App: pendente de criação/configuração.
- Google OAuth: pendente de credenciais.
- Provedor de IA: pendente de backend e credencial.
- Banco/Supabase: pendente de projeto e RLS.
- Deploy do backend: pendente.

## Documentação

Consulte `GITHUB_APP_SETUP.md`, `GOOGLE_SETUP.md`, `AI_SETUP.md`, `SECURITY.md` e `EXTENSION_INSTALL.md`.
