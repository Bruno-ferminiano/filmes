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