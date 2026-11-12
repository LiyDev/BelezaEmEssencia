# Beleza em Essência 💄

Sistema web de gestão para uma loja de beleza, com cadastro de produtos, clientes, funcionários e registro de vendas. Desenvolvido com Node.js, Express e Handlebars, usando SQLite como banco de dados.

## Funcionalidades

- Páginas institucionais: início, sobre e contato
- CRUD de **produtos** (nome, descrição, preço e imagem)
- CRUD de **clientes**
- CRUD de **funcionários**
- Registro e edição de **vendas**, com seleção dos produtos de cada venda
- Interface renderizada no servidor com templates Handlebars

## Tecnologias

- [Node.js](https://nodejs.org/) e [Express](https://expressjs.com/)
- [Express Handlebars](https://github.com/express-handlebars/express-handlebars)
- [Sequelize](https://sequelize.org/) (ORM) + [SQLite](https://www.sqlite.org/)
- HTML5 e CSS3
- Nodemon e Chalk (ambiente de desenvolvimento)

## Estrutura do projeto

```
BelezaEmEssencia/
├── db/            # Conexão com o banco (Sequelize + SQLite)
├── models/        # cliente, funcionario, produtos, venda, venda_has_produtos
├── routes/        # index, produtos, clientes, funcionario, vendas, sobre, contato
├── views/         # Templates Handlebars
├── public/        # CSS, JavaScript e imagens
└── main.js        # Ponto de entrada da aplicação
```

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Clone o repositório
git clone https://github.com/LiyDev/BelezaEmEssencia.git
cd BelezaEmEssencia

# 2. Instale as dependências
npm install

# 3. Inicie o servidor (modo desenvolvimento, com recarga automática)
npm run dev
```

Se preferir, rode direto com `node main.js`. A aplicação ficará disponível em **http://localhost:3000**.

## Autora

**Lilian Emilly** — [@LiyDev](https://github.com/LiyDev)
