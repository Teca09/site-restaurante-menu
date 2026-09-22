# Sabor da Luzia — Cozinha tradicional angolana em Luanda

Site fictício desenvolvido como peça de portfólio para o nicho de **restauração**
(restaurantes, snack-bares, casas de pasto e afins que precisam de mostrar o menu
e facilitar reservas/pedidos online).

🔗 **Demo ao vivo:** _[Sabor da Luzia — Cozinha tradicional angolana em Luanda](https://teca09.github.io/site-restaurante-menu/)_

## Sobre o projeto

"Sabor da Luzia" é um restaurante fictício de cozinha tradicional angolana em Luanda.
O objetivo do site é mostrar o menu de forma apetitosa e converter visitas em reservas
ou pedidos via WhatsApp.

## Stack

- HTML5 semântico
- CSS3 puro (sem frameworks) — variáveis CSS para o sistema de design
- JavaScript vanilla (carrossel horizontal, filtro de menu, animações)
- Tipografia: [Fraunces](https://fonts.google.com/specimen/Fraunces) + [Outfit](https://fonts.google.com/specimen/Outfit)

## Estrutura

```
index.html
assets/
├── css/style.css
├── js/script.js
└── images/
```

## Design

- **Paleta**: preto-quente (#0D0C0A) + linho cru (#F0E8DA) + carmim angolano (#A83D28) + ouro dende (#C9922E)
- **Tipografia**: Fraunces (títulos) + Outfit (corpo)
- **Estrutura**: Hero → Menu com filtros → Galeria carrossel horizontal → Reservar
- **Assinatura**: carrossel horizontal por arraste na galeria, microinterações no menu (miniatura do prato ao passar)

## Imagens

As imagens são carregadas dinamicamente via [Foodish API](https://foodish-api.herokuapp.com/) quando disponível, com fallback para picsum.

## Autor

Desenvolvido por [Feliciano Teca](https://github.com/Teca09) — Frontend Developer.
