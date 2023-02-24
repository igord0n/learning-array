const nome = document.querySelector('#nome');
const sobrenome = document.querySelector('#sobrenome');
const email = document.querySelector('#email');
const botao = document.querySelector('#botao');
const users = [];

function addUser() {
  users.push({
    nome: nome.value,
    sobrenome: sobrenome.value,
    email: email.value
  })
};

function cleanInput() {
  nome.value = '';
  sobrenome.value = '';
  email.value = '';
};

function printUser() {
  function printUserNome() {
    const table = document.querySelector('#user-table');
    const th = document.createElement('th');
    const addTh = table.appendChild(th);
  };
  printUserNome();

  function printUserSobrenome() {
    const table = document.querySelector('#user-table');
    const th = document.createElement('th');
    table.appendChild(th);
  };
  printUserSobrenome();

  function printUserEmail() {
    const table = document.querySelector('#user-table');
    const th = document.createElement('th');
    table.appendChild(th);
  };
  printUserEmail();
};

document.querySelector('#botao').addEventListener('click', (e) => {
  e.preventDefault();
  addUser();
  cleanInput();
  printUser();
  console.log(users)
});









