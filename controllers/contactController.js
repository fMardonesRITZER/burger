const nodemailer = require('nodemailer');

// Configurar nodemailer con tus credenciales de correo electrónico
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Controlador para la ruta de contacto
const contactController = {
  showContactForm: (req, res) => {
    res.render('contact');
  },

  submitContactForm: (req, res) => {
    const { name, email, message } = req.body;

    // Configurar el contenido del correo electrónico
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'Nuevo mensaje de contacto',
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
    };

    // Enviar el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error al enviar el mensaje');
      } else {
        console.log('Mensaje enviado: ' + info.response);
        res.send('Mensaje enviado correctamente');
      }
    });
  }
};

module.exports = contactController;



