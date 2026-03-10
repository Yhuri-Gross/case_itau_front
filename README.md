# Clientes App

Aplicação web desenvolvida em **Angular** para gerenciamento de clientes e operações bancárias básicas.

A aplicação consome uma API REST desenvolvida em **.NET**.

---

# 🚀 Tecnologias utilizadas

* Angular
* TypeScript
* Angular Material
* RxJS
* HTML
* CSS

---

# 📁 Estrutura do projeto

```
src/app
├── models
├── pages
│   ├── cliente-form
│   ├── clientes-list
│   └── login
├── services
├── app.routes.ts
├── app.config.ts
├── auth.guard.ts
└── auth.interceptor.ts
```

---

## Funcionalidades
- cadastro de cliente
- login
- armazenamento do token JWT
- envio automático do token nas requisições
- visualização da própria conta
- visualização de todos os clientes para admin
- depósito
- saque
- logout

---

## Perfis de Uso

### Usuário comum
- pode se cadastrar
- pode realizar login
- visualiza apenas a própria conta
- realiza depósito e saque na própria conta

### Admin
- realiza login
- visualiza a lista completa de clientes
- pode cadastrar novos clientes
- pode realizar operações em qualquer conta

---

# 💻 Interface

A aplicação utiliza **Angular Material** para criação da interface.

Componentes utilizados:

* MatTable
* MatButton
* MatFormField
* MatInput

---

# 🔌 Integração com API

A aplicação consome a API através do serviço:

```
ClienteService
```

Principais métodos:

* `listar()`
* `criar()`
* `deletar()`
* `depositar()`
* `sacar()`

---

# ▶️ Como rodar o projeto

Clone o repositório:

```bash
git clone https://github.com/Yhuri-Gross/case_itau_front
```

Entre na pasta do frontend:

```bash
cd clientes-app
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
ng serve
```

A aplicação estará disponível em:

```
http://localhost:4200
```

---

# ⚠️ Requisitos

A API backend deve estar rodando em:

```
http://localhost:5000
```

---

# 📌 Melhorias futuras

* Tela de transferência entre clientes
* Feedback visual para operações
* Loading states
* Paginação da tabela
* Melhorias de UX/UI

---
