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
src
│
├── app
│   ├── models
│   │   └── cliente.model.ts
│   │
│   ├── services
│   │   └── cliente.service.ts
│   │
│   ├── components
│   │   ├── clientes-list
│   │   └── cliente-form
│   │
│   └── app.routes.ts
│
└── environments
```

---

# ⚙️ Funcionalidades

### Clientes

* Listar clientes
* Criar novo cliente
* Excluir cliente

### Operações financeiras

* Depositar valor
* Sacar valor

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
* Testes unitários no frontend
* Melhorias de UX/UI

---
