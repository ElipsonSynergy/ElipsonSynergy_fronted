import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';


export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  // Configurar el transporte de nodemailer
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Dependiendo del servicio de correo 
    auth: {
      user: process.env.MAIL_USERNAME, 
      pass: process.env.MAIL_PASSWORD, 
    },
  }); 

  // Configuración del correo electrónico
  let mailOptions = {
    from: process.env.MAIL_FROM_ADDRESS, 
    to: process.env.MAIL_USERNAME, 
    subject: `Nuevo mensaje de ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\n\nMensaje:\n\n${message}`,
  };

  try {
    // Intentar enviar el correo electrónico
    let sended = await transporter.sendMail(mailOptions); 

    // Respuesta si el correo se envió exitosamente
    return NextResponse.json({
      "response": 'Mensaje enviado con éxito',
      "message": "El mensaje se envió con éxito, gracias por contactarte con nosotros. Trataremos de responder lo más pronto posible. ¡Saludos!"
    });
    
  } catch (error) {
    // Capturar cualquier error que ocurra durante el envío
    console.error("Error al enviar el correo:", error);

    // Respuesta si ocurrió un error al enviar el correo
    return NextResponse.json({
      "response": 'Error al enviar el mensaje',
      "message": "Lo sentimos, ocurrió un error al intentar enviar tu mensaje. Por favor, intenta nuevamente más tarde."
    });
  }
}
