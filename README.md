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

## Onde editar as informações

Quase todo o conteúdo variável (telefone, cidade, horários, links) fica em
[`src/data/site.ts`](src/data/site.ts). Alterar ali reflete no site inteiro, nos
links do WhatsApp e no rodapé.

O selo "aberto agora" é calculado em [`src/lib/openingHours.ts`](src/lib/openingHours.ts)
usando o fuso `America/Belem`, a partir da mesma grade de horários.

### Pendências de conteúdo


- **Domínio**: a URL canônica e as tags Open Graph em `index.html` usam um domínio
  de exemplo.

## Deploy (Netlify)

O [`netlify.toml`](netlify.toml) já traz a configuração: build com `npm run build`,
publicação da pasta `dist` e Node 22. Basta conectar o repositório na Netlify —
não é preciso preencher nada manualmente.

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
