# Segurança

Princípios: menor privilégio, secrets somente no backend, HTTPS em produção, validação de sessão e origem, CSRF/state para fluxos OAuth, rate limiting, timeouts, validação de entrada/resposta e auditoria sem registrar tokens.

O pacote Chrome não deve conter `.env`, API keys, tokens, Client Secret ou Private Key.

As integrações externas permanecem pendentes até configuração e teste real.
