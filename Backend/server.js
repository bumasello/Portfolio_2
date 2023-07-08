const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'sendMail',
  auth: {
    user: 'portfoliobrunosnd@gmail.com',
    pass: '@BruMas1027',
  },
});

app.post('/enviar-email', (req, res) => {
  const { nome, sobrenome, email, mensagem } = req.body;

  const emailOptions = {
    from: 'portfoliobrunosnd@gmail.com',
    to: 'bumasello@gmail.com',
    subject: 'Nome mensagem enviada de seu portfolio!',
    text: 'Nome: ${nome}\nSobrenome: ${sobrenome}\nEmail: ${email}\nMensagem: ${mensagem}',
  };

  transporter.sendMail(emailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar o email: ', error);
      res.status(500), json({ error: 'Erro ao enviar o email' });
    } else {
      console.log('Email enviado com sucesso: ', info.messageId);
      res.json({ message: 'Email enviado com sucesso' });
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
