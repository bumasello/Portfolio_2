const form = document.querySelector('#meuFormulario');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.querySelector('#nome').value;
  const sobrenome = document.querySelector('#sobrenome').value;
  const email = document.querySelector('#email').value;
  const mensagem = document.querySelector('#messagem').value;

  const data = {
    nome,
    sobrenome,
    email,
    mensagem,
  };
  fetch('/enviar-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      form.reset();
    })
    .catch((error) => {
      console.error('Erro ao enviar o email: ', error);
    });
});
