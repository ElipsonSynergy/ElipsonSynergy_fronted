import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { isEmail } from '@ckeditor/ckeditor5-link/src/utils';


export function GET() {
  return NextResponse.json({"message": "helloworld"});
}


export async function POST(request) {

  const { name, email, phone, message } = await request.json();
  const {MAIL_USERNAME, MAIL_PASSWORD, MAIL_FROM_ADDRESS} = process.env

  // Validaciones de parámetros 

  if(!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
    return NextResponse.json({
      "response": 'El mensaje no puede ser enviado',
      "message": "Por favor asegúrese de que todos los campos estén llenos correctamente."
    });
  }

  if (!isEmail(email)) {
    return NextResponse.json({
      "response": 'El mensaje no puede ser enviado',
      "message": "El campo de correo electrónico no es válido. Por favor ingrese un correo válido."
    });
  }

  if (!phone.match(/^\d+$/)) {
    return NextResponse.json({
      "response": 'El mensaje no puede ser enviado',
      "message": "El campo de teléfono no es válido. Por favor ingrese un número de teléfono válido."
    });
  }

  if (!MAIL_USERNAME || !MAIL_PASSWORD || !MAIL_FROM_ADDRESS) {
    console.error("Error: Una o más variables de entorno necesarias para el correo electrónico no están definidas.");
    throw new Error("Faltan variables de entorno para la configuración del correo electrónico.");
  }

  // Configurar el transporte de nodemailer
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Dependiendo del servicio de correo 
    auth: {
      user: MAIL_USERNAME, 
      pass: MAIL_PASSWORD, 
    },
  }); 

  // Configuración del correo electrónico
  let mailOptions = {
    from: MAIL_FROM_ADDRESS, 
    to: MAIL_USERNAME, 
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
