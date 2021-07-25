const form = document.getElementById('form');
form.addEventListener('submit', e=>{
  e.preventDefault();

  let categoria =document.getElementById('categoria').value;
  let nome =document.getElementById('nome').value;
  let marca =document.getElementById('marca').value;
  let quantidade=document.getElementById('quantidade').value;
  let data={
    categoria,
    nome,
    marca,
    quantidade,
  };
  console.log(data);
  
  let converData = JSON.stringify(data);

  localStorage.setItem('Produto', converData);

});