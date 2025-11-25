# Deploy no Render

Este documento explica como fazer o deploy da aplicação no Render usando variáveis de ambiente.

## Variáveis de Ambiente Necessárias

Configure as seguintes variáveis de ambiente no dashboard do Render:

| Variável | Descrição | Valor Padrão |
|----------|-----------|--------------|
| NEXT_PUBLIC_SITE_NAME | Nome do seu site | reelnn |
| NEXT_PUBLIC_FOOTER_DESC | Descrição do rodapé | This website does not host any files... |
| NEXT_PUBLIC_TELEGRAM_CONTACT | Link do Telegram | https://t.me/reelnnUpdates |
| NEXT_PUBLIC_WHATSAPP_CONTACT | Link do WhatsApp | (vazio) |
| NEXT_PUBLIC_INSTAGRAM_CONTACT | Link do Instagram | (vazio) |
| SITE_SECRET | Chave secreta para tokens | your_secret_key |
| BACKEND_URL | URL do backend Python | http://0.0.0.0:6519 |
| NEXT_PUBLIC_TELEGRAM_BOT_NAME | Nome do bot do Telegram | reelnnbot |
| SHORTENER_API_URL | URL da API de encurtamento | (vazio) |
| SHORTENER_API_KEY | Chave da API de encurtamento | (vazio) |
| TOKEN_REFRESH_INTERVAL_MS | Intervalo de atualização de tokens (ms) | 21600000 |
| API_REQUEST_TIMEOUT | Tempo limite das requisições (ms) | 10000 |


## Configuração no Render

1. Crie um novo serviço web no Render
2. Conecte seu repositório GitHub
3. Nas configurações de ambiente (Environment Variables), adicione todas as variáveis acima com seus valores personalizados
4. Configure o comando de build como: `next build`
5. Configure o comando de início como: `next start`

## Segurança

Importante: Altere o valor de `SITE_SECRET` para uma chave segura e única em produção!

## Arquivos Locais

- `.env.local` - Variáveis para desenvolvimento local (gitignored)
- `.env.example` - Modelo de variáveis de ambiente
- `.env` - Variáveis padrão (gitignored)