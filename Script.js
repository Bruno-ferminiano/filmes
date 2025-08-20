const formulario = document.getElementById('meuFormulario');

if (formulario) {
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
}



const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome1').value;
    const email = document.getElementById('email1').value;
    const senha = document.getElementById('senha1').value;

    if (nome && email && senha) {
      alert('Login feito com sucesso, redirecionando...');
      window.location.href = 'home.html';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
}