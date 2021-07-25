let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

  let nome =document.getElementById('nome').value;
  let endereco =document.getElementById('endereco').value;
  let cep =document.getElementById('cep').value;
  let cidade=document.getElementById('cidade').value;
  let estado=document.getElementById('estado').value;
  let cpf=document.getElementById('cpf').value;
  let email=document.getElementById('email').value;
  let telefone=document.getElementById('telefone').value;
  let data2={
    nome,
    endereco,
    cep,
    cidade,
    estado,
    cpf,
    email,
    telefone,
  };
  console.log(data2);
  let converData = JSON.stringify(data2);
  localStorage.setItem('Cliente', converData);
});