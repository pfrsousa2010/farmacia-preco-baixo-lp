# Farmácia Preço Baixo — Benevides

Landing page da Farmácia Preço Baixo, em Benevides (PA).

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) para os ícones

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # gera a versão de produção em dist/
npm run preview  # serve o build de produção
npm run lint
```

## Seções

| Seção | Conteúdo |
| --- | --- |
| Hero | Chamada principal, foto da fachada e botões de WhatsApp / mapa |
| Vantagens | Os seis diferenciais da farmácia |
| Delivery | Como pedir em 3 passos + aviso de área de entrega |
| Produtos | Categorias atendidas |
| Horários | Grade de funcionamento com selo "aberto agora" em tempo real |
| Contato | Endereço, telefone, redes e mapa com o marcador da loja |
| Pagamento | Pix, débito, crédito parcelado e dinheiro |
| Dúvidas frequentes | Acordeão com as perguntas mais comuns |

## Onde editar as informações

Quase todo o conteúdo variável (telefone, cidade, horários, links) fica em
[`src/data/site.ts`](src/data/site.ts). Alterar ali reflete no site inteiro, nos
links do WhatsApp e no rodapé.

O selo "aberto agora" é calculado em [`src/lib/openingHours.ts`](src/lib/openingHours.ts)
usando o fuso `America/Belem`, a partir da mesma grade de horários.

### Pendências de conteúdo


- **Domínio**: a URL canônica e as tags Open Graph em `index.html` usam um domínio
  de exemplo.

## Dúvidas frequentes (FAQ)

O conteúdo vive em duas cópias que precisam ser mantidas em sincronia manual:
[`src/components/Faq.tsx`](src/components/Faq.tsx) (o que aparece na tela) e o
bloco `FAQPage` em [`index.html`](index.html) (dados estruturados, para o
Google poder mostrar as perguntas direto na busca). Ao editar uma pergunta,
edite a outra também.

## SEO técnico

`public/robots.txt` libera a indexação e aponta para `public/sitemap.xml`
(com a única página do site). Isso só ajuda o Google a rastrear o site —
não coloca o site nos resultados de busca por si só. Isso depende de
submeter o site no Google Search Console e, principalmente para buscas
locais como "farmácia perto de mim", de ter um Perfil da Empresa no Google
configurado e verificado, linkando para este domínio.

## Domínio

O site usa **precobaixofarmacias.com.br**. A URL canônica, as tags Open Graph
(og:url, og:image) e a URL do schema Pharmacy em [`index.html`](index.html)
já apontam para ele — atualize os três se o domínio mudar de novo.

## Deploy (Netlify)

O [`netlify.toml`](netlify.toml) já traz a configuração: build com `npm run build`,
publicação da pasta `dist` e Node 22. Basta conectar o repositório na Netlify —
não é preciso preencher nada manualmente.

## Endereço

O endereço exibido em texto e o ponto do mapa são independentes por design:
`site.address.street` (em `src/data/site.ts`) alimenta todo o texto visível,
enquanto `site.address.coords` fixa o marcador e o link "Como chegar" (que usa
as coordenadas, não o texto). Trocar a rua não move o pino — é preciso editar
`coords` separadamente quando for o caso.

## Mapa

O mapa usa [Leaflet](https://leafletjs.com) com os tiles padrão do
OpenStreetMap — sem chave de API e sem conta. O provedor dos tiles fica na
constante `TILES`, no topo de `StoreMap.tsx`, para ser trocado num só lugar.
O marcador é um SVG
inline em [`StoreMap.tsx`](src/components/StoreMap.tsx), então cor, ícone e
tamanho são editáveis direto no código.

O Leaflet pesa mais que o resto do site somado, então
[`LazyStoreMap.tsx`](src/components/LazyStoreMap.tsx) só o baixa quando o
visitante chega perto do mapa. Ele sai num chunk separado — o carregamento
inicial da página não muda.

## Imagens

Ficam em `public/images/`: `logo.png` (marca) e `fachada.png` (foto da loja).
