# IPA - Instituto de Psicologia Aplicada

Landing page e portal institucional de uma clínica de psicologia (Brasília - DF), desenvolvido como Single Page Application em React. O projeto reúne apresentação institucional, listagem de convênios, formulário de contato integrado ao WhatsApp e uma ferramenta de autoavaliação (quiz) para o visitante.

Link: https://ipapsicologia.com.br/

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## Stack

* **Core:** React 18 + Vite 6
* **Linguagem:** TypeScript
* **Roteamento:** React Router DOM v7
* **Estilização:** Tailwind CSS v4 (via `@tailwindcss/vite`)
* **Scroll:** `@studio-freight/react-lenis` (smooth scroll global)
* **Ícones:** Lucide React
* **Componentes de UI:** `hamburger-react` (menu mobile), `clsx` / `tailwind-merge` (composição de classes)

## Arquitetura

A navegação é feita via **React Router** (`BrowserRouter`), com três rotas principais definidas em `App.tsx`:

| Rota         | Componente  | Descrição                                              |
|--------------|-------------|---------------------------------------------------------|
| `/`          | `Home`      | Página institucional com todas as seções (scroll único) |
| `/convenios` | `Convenios` | Listagem de convênios aceitos                            |
| `/quiz`      | `Quiz`      | Autoavaliação interativa com resultado ponderado         |

O componente `Layout` envolve todas as rotas e é responsável pelo cabeçalho (`Header`), rodapé (`Footer`) e pela lógica de navegação entre seções via scroll (`scrollTo`), incluindo o redirecionamento de volta para `/` quando o usuário está em `/convenios` ou `/quiz` e clica em um link de âncora. A rota `/quiz` renderiza em tela cheia, sem `Header`/`Footer`.

A `Home` é composta por seções independentes, renderizadas em sequência: `Hero`, bloco de estatísticas, `Depoimentos`, `Sobre`, `ServicoAccordion`, `Especialidades`, `Equipe`, `Localizacao` e `Contato`.

## Funcionalidades

* **Arquitetura modular:** cada seção da página é um componente isolado em `src/app/sections`.
* **Autoavaliação (Quiz):** fluxo de perguntas com pesos (`quizData.ts`), navegação entre passos, barra de progresso e cálculo de resultado ao final.
* **Integração com WhatsApp:** botão flutuante e links de contato que abrem uma conversa pré-formatada via API do WhatsApp (`wa.me`).
* **Localização:** mapa incorporado via iframe do Google Maps.
* **Menu responsivo:** cabeçalho com comportamento distinto para desktop e mobile, com transições de estilo conforme a rota (`/convenios`) e o estado de scroll.
* **Smooth scroll:** rolagem suavizada em toda a aplicação via `react-lenis`.

## Estrutura do Repositório

```text
IPA_Psicologia/
├── index.html                  # HTML raiz da aplicação
├── src/
│   ├── app/
│   │   ├── App.tsx             # Definição das rotas e providers globais
│   │   ├── constants.ts        # Links de navegação e estatísticas institucionais
│   │   ├── components/
│   │   │   ├── Header.tsx      # Cabeçalho e menu de navegação
│   │   │   ├── Layout.tsx      # Wrapper de rotas (Header + Footer + scroll)
│   │   │   └── SectionTitle.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx        # Composição das seções institucionais
│   │   │   ├── Convenios.tsx   # Página de convênios
│   │   │   ├── Quiz.tsx        # Página de autoavaliação
│   │   │   └── quizData.ts     # Perguntas, opções e pesos do quiz
│   │   └── sections/           # Seções da Home (Hero, Sobre, Equipe, Contato, etc.)
│   ├── assets/                 # Imagens, logos e ícones
│   ├── styles/                 # Diretivas do Tailwind e CSS global
│   └── main.tsx                # Entry point do React
├── package.json                 # Dependências e scripts
├── vite.config.ts               # Configuração de build (aliases, plugins)
└── tsconfig.json                 # Configuração do TypeScript
```

## Pré-requisitos

* Node.js (versão compatível com Vite 6 / Tailwind 4)
* npm

## Setup Local

```bash
# 1. Clonar repositório
git clone https://github.com/JoaoSandovall/IPA_Psicologia.git
cd IPA_Psicologia

# 2. Instalar dependências
npm install

# 3. Iniciar servidor de desenvolvimento (HMR ativo)
npm run dev
```

Acesso local padrão: `http://localhost:5173`

## Build

```bash
npm run build
```

Gera os arquivos estáticos otimizados no diretório `/dist`. Por ser uma aplicação 100% client-side, o build é compatível com qualquer provedor de hospedagem estática (Vercel, Netlify, S3, Hostinger, etc.).

> **Observação:** por se tratar de uma SPA com rotas via `BrowserRouter`, o servidor de hospedagem deve ser configurado para redirecionar todas as rotas para `index.html` (fallback), evitando erros 404 em recarregamentos de páginas internas como `/convenios` ou `/quiz`.
