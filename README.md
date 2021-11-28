# Sistema de Agenda

![Node](https://img.shields.io/badge/Node.js-16.13.0-success)
![Express](https://img.shields.io/badge/Express.js-4.17.1-green)
![MySQL](https://img.shields.io/badge/MySQL-4.17.1-blue)

---

###### Este projeto contém APIs que permitem criar, listar, atualizar e deletar agendamentos de uma agenda.

---

### Para rodar o projeto é necessário

- Instalar e configurar o [MySQL Community](https://dev.mysql.com/downloads/)
  - Substituir as configurações de conexão no arquivo `infrastructure/connections.js`  
- Executar `npm install`
- Executar `npm start`
- Acessar `localhost:3000/agendamentos`

---

### Métodos possíveis

- POST `localhost:3000/agendamentos`
- GET `localhost:3000/agendamentos` ou `localhost:3000/agendamentos/id`
- PATCH `localhost:3000/agendamentos/id`
- DELETE `localhost:3000/agendamentos/id`
