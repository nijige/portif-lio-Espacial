# 🚀 Geane Ferreira — Portifolio

Portfólio pessoal com tema **Space Girl** — escuro, futurista e cheio de personalidade.

## ✨ Tecnologias

- HTML5 puro + CSS3 + JavaScript vanilla
- Fontes: Syne (display) · Space Mono (código) · DM Sans (corpo)
- Starfield animado com Canvas API
- Animações com CSS e IntersectionObserver

## 🛸 Como rodar localmente

```bash
# Abra o index.html direto no navegador
# OU use um servidor local:
npx serve .
# ou
python3 -m http.server 3000
```

## 🌐 Deploy na Vercel

1. Faça push desse repositório pro GitHub
2. Acesse [vercel.com](https://vercel.com) → **Add New Project**
3. Selecione o repositório
4. Vercel detecta automaticamente como site estático
5. Clique em **Deploy** ✅

## 📁 Estrutura

```
portfolio/
├── index.html      # Estrutura principal
├── style.css       # Todo o estilo (tema espacial)
├── script.js       # Starfield + animações de scroll
├── vercel.json     # Config de deploy estático
└── README.md
```

## 🎨 Personalizações fáceis

- **Cor principal**: altere `--accent` em `:root` no `style.css`
- **Projetos**: adicione uma nova seção `<section class="projects">` no HTML
- **Foto**: adicione uma `<img>` dentro de `.hero-visual` com `border-radius: 50%`

---
*Feito com 💜 no espaço*
