# Gerador de Carnê - Escola Raul Pompéia

Este projeto foi configurado para ser implantado na Vercel utilizando Vite + React + Tailwind CSS.

## Como rodar localmente

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Como fazer o deploy na Vercel

### Opção 1: Via Vercel Dashboard (Recomendado)

1. Faça push deste código para um repositório Git (GitHub, GitLab, Bitbucket).
2. Acesse [vercel.com/new](https://vercel.com/new).
3. Importe o repositório.
4. As configurações de build devem ser detectadas automaticamente:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique em **Deploy**.

### Opção 2: Via Vercel CLI

1. Instale a CLI da Vercel:
   ```bash
   npm i -g vercel
   ```

2. Na raiz do projeto, execute:
   ```bash
   vercel
   ```

3. Siga as instruções no terminal.

## Estrutura do Projeto

- `src/App.jsx`: Componente principal do gerador de carnê.
- `src/main.jsx`: Ponto de entrada do React.
- `vercel.json`: Configurações específicas para o deploy na Vercel.
