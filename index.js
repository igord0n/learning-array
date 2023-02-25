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
    addTh.textContent = nome.value;
  };
  printUserNome();

  function printUserSobrenome() {
    const table = document.querySelector('#user-table');
    const th = document.createElement('th');
    const addTh = table.appendChild(th);
    addTh.textContent = sobrenome.value;
  };
  printUserSobrenome();

  function printUserEmail() {
    const table = document.querySelector('#user-table');
    const th = document.createElement('th');
    const addTh = table.appendChild(th);
    addTh.textContent = email.value;
  };
  printUserEmail();  
};

function breakLine() {
  const table = document.querySelector('#user-table');
  const breakLine = document.createElement('br');
  table.appendChild(breakLine);
};

document.querySelector('#botao').addEventListener('click', (e) => {
  e.preventDefault();
  addUser();
  printUser();
  breakLine();
  cleanInput();
  console.log(users)
});









