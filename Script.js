const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  if (nome && email) {
    
    alert('crítica enviada com sucesso!');
    formulario.reset();
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});


const formlogin = document.getElementById('loginForm');

formlogin.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (nome && email && senha) {
    alert('Login feito com sucesso, redirecionando...');
    //formulario.reset();
    window.location.href = "home.html"; // Redireciona para a página home.html na mesma aba
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});