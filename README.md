# IPA - Instituto de Psicologia Aplicada

> Landing Page oficial e responsiva para a clínica de psicologia IPA, localizada em Brasília - DF.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## Sobre o Projeto

Single Page Application (SPA) desenvolvida para apresentar os serviços, o corpo clínico e a infraestrutura do Instituto de Psicologia Aplicada. A arquitetura foi refatorada para um modelo modularizado, removendo dependências externas desnecessárias (como bibliotecas de UI de terceiros e scripts pesados) para focar em performance, utilizando CSS nativo para animações e Tailwind CSS v4 para estilização global.

A aplicação utiliza renderização condicional baseada em estado para alternar entre a página principal e a seção específica de Convênios.

## Principais Funcionalidades

* **Design Responsivo:** Layout adaptado nativamente via Tailwind para mobile, tablet e desktop.
* **Componentização Modular:** Arquitetura fatiada em seções (`Hero`, `Sobre`, `Equipe`, `Contato`, etc.) para facilitar a manutenção.
* **Carrossel Infinito Nativo:** Exibição de avaliações do Google Maps desenvolvida com animações de CSS puro (keyframes), sem bibliotecas externas.
* **Roteamento por Estado:** Alternância limpa entre a Home e a visualização de Convênios sem recarregamento da página.
* **Localização Integrada:** Iframe nativo do Google Maps apontando para o endereço físico da clínica.

## Tecnologias Utilizadas

* **React + Vite:** Biblioteca de construção de interface e bundler otimizado.
* **TypeScript:** Tipagem estática para validação de dados e segurança do código.
* **Tailwind CSS v4:** Framework de CSS utilitário integrado via plugin do Vite.
* **Lucide React:** Biblioteca nativa para renderização de ícones SVG.
* **npm:** Gerenciador de dependências.

## Estrutura de Diretórios

```text
IPA_Psicologia/
├── public/                 # Assets públicos estáticos
├── src/
│   ├── app/
│   │   ├── App.tsx         # Esqueleto principal e roteamento de estados
│   │   └── sections/       # Componentes modulares de cada seção da página
│   ├── imports/            # Imagens e logos (arquivos locais)
│   ├── styles/             # Arquivos base de CSS (Tailwind, fontes e animações)
│   └── main.tsx            # Ponto de entrada de renderização do React
├── package.json            # Configuração de dependências e scripts do Node
└── vite.config.ts          # Configurações do compilador Vite e plugins
```

## Como Executar o Projeto Localmente

### Requisitos

- Node.js instalado
- npm instalado

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/ipa-psicologia.git
cd ipa-psicologia
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Permita a execução dos scripts de construção

Necessário apenas na primeira instalação para liberar os binários utilizados pelo Tailwind CSS e Esbuild.

```bash
npm approve-scripts @tailwindcss/oxide esbuild sharp
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:5173
```

---

## Deploy (Produção)

O projeto é totalmente estático e pode ser hospedado em plataformas como:

- Vercel
- Netlify
- Hostinger
- HostGator
- Outros serviços de hospedagem compatíveis com arquivos estáticos

### Gerar Build de Produção

```bash
npm run build
```

Após a execução do comando, será criada uma pasta:

```text
dist/
```

Essa pasta conterá todos os arquivos otimizados e minificados da aplicação (HTML, CSS, JavaScript e assets), prontos para publicação em produção.
