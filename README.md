# IPA - Instituto de Psicologia Aplicada

> Landing Page oficial e responsiva para a clínica de psicologia IPA, localizada em Brasília - DF.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

---

## Sobre o Projeto

Single Page Application (SPA) desenvolvida para apresentar os serviços, o corpo clínico e a infraestrutura do Instituto de Psicologia Aplicada. O projeto possui um design limpo e responsivo, com renderização condicional avançada para garantir a melhor experiência de leitura e navegação em Desktop e Mobile.

## Principais Funcionalidades

* **Design Responsivo:** Estruturas de layout adaptadas e exclusivas para dispositivos móveis e computadores.
* **Hero Section:** Apresentação da identidade visual institucional com chamadas para ação (CTAs).
* **Apresentação da Equipe:** Seção de perfil dedicada aos especialistas da clínica.
* **Localização Integrada:** Endereço com iframe interativo do Google Maps.
* **Agendamento:** Botões de encaminhamento direto e rápido para o WhatsApp da clínica.

## Tecnologias Utilizadas

* **React + Vite:** Biblioteca de interface de usuário e bundler de alta performance.
* **TypeScript:** Tipagem estática para maior segurança e previsibilidade do código.
* **Tailwind CSS:** Framework de CSS utilitário.
* **shadcn/ui:** Componentes de interface acessíveis e customizáveis.
* **Lucide React:** Biblioteca de ícones.
* **pnpm:** Gerenciador de pacotes.

## Estrutura de Diretórios

```text
IPA_Psicologia/
├── public/                 # Assets públicos
├── src/
│   ├── app/
│   │   ├── App.tsx         # Estrutura principal da Landing Page
│   │   └── components/     # Componentes reutilizáveis (shadcn/ui e personalizados)
│   ├── imports/            # Imagens locais
│   ├── styles/             # Estilização global (Tailwind, Fonts)
│   └── main.tsx            # Ponto de entrada do React
├── package.json            # Dependências e scripts
├── tailwind.config.js      # Configurações do Tailwind CSS
└── vite.config.ts          # Configurações do Vite

## Como Executar o Projeto

Certifique-se de ter o Node.js e o pnpm instalados na sua máquina.

1. Clone o repositório:
```bash
git clone [https://github.com/seu-usuario/ipa-psicologia.git](https://github.com/seu-usuario/ipa-psicologia.git)
cd ipa-psicologia
```

2. Instale as dependências:
```bash
pnpm install
```

3. Inicie o servidor de desenvolvimento:
```bash
pnpm dev
```

O servidor estará disponível localmente em `http://localhost:5173/`.

## Deploy

O projeto está otimizado para plataformas de hospedagem estática e Serverless (como Vercel, Netlify, Hostinger, HostGator, etc.).

Para gerar a versão otimizada de produção, execute:
```bash
pnpm build
```

A pasta `dist/` será gerada na raiz do projeto com os arquivos finais prontos para publicação no servidor.

---
Desenvolvido com dedicação para o IPA — Cuidar da mente é cuidar da vida.
