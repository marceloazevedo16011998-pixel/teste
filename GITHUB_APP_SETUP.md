# GitHub App — configuração necessária

Crie um GitHub App na conta proprietária do produto e mantenha a Private Key somente no backend.

Permissões iniciais: Metadata read-only; Contents read/write; Pull requests read/write; Issues read-only.

Não coloque Client Secret ou Private Key no Chrome. O callback exato deve ser a URL HTTPS do endpoint de callback do backend implantado, definida somente depois do domínio de produção existir. Não invente callback de produção.

Instale o App somente nos repositórios que cada cliente autorizar. A conexão deve ser armazenada por usuário/tenant no backend.
