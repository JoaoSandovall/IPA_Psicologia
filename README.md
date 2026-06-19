# IPA - Instituto de Psicologia Aplicada (Ainda em desenvolvimento)

> Landing Page SPA da clínica de psicologia IPA (Brasília - DF), modularidade e mitigação de dependências externas.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## ⚙️ Stacks

* **Core:** React + Vite
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS v4
* **Assets:** Lucide React (Ícones SVG)

## Funcionalidades

* **Arquitetura Modular:** Componentização baseada em blocos de seção independentes.
* **Roteamento por Estado:** Gerenciamento de visualização (Home / Convênios) controlado via React State, dispensando reloads ou React Router.
* **UI/UX Otimizada:** Implementação de carrosséis e animações puramente via CSS nativo (`keyframes` e `scroll-snap`), removendo o *overhead* de bibliotecas de terceiros.
* **Integrações Nativas:** Redirecionamento formatado para a API do WhatsApp (agendamentos) e Iframe embedado do Google Maps.

## 📂 Estrutura do Repositório

```text
IPA_Psicologia/
├── public/                 # Assets públicos não processados
├── src/
│   ├── app/
│   │   ├── App.tsx         # Roteador de estado e layout principal
│   │   └── sections/       # Componentes fragmentados por escopo visual
│   ├── imports/            # Assets
│   ├── styles/             # Diretivas do Tailwind e CSS global
│   └── main.tsx            # Entry point do React
├── package.json            # Dependências e scripts de execução
└── vite.config.ts          # Configuração de build
```

## Setup Local

**Pré-requisitos:** `Node.js` e `npm`.

```bash
# 1. Clonar repositório
git clone [https://github.com/seu-usuario/ipa-psicologia.git](https://github.com/seu-usuario/ipa-psicologia.git)
cd ipa-psicologia

# 2. Instalar dependências
npm install

# 3. Liberar binários de build (Apenas na 1ª instalação)
npm approve-scripts @tailwindcss/oxide esbuild sharp

# 4. Iniciar servidor de desenvolvimento (HMR ativo)
npm run dev
```

> **Acesso Local:** `http://localhost:5173`

---

## Build e Deploy

Aplicação *100% Client-Side* (Static Files). Compatível com qualquer provedor de hospedagem estática (Vercel, Netlify, S3, Hostinger, etc.).

```bash
# Compilar bundle otimizado e minificado
npm run build
```

> Os *assets* finais de produção serão gerados no diretório `/dist`.
