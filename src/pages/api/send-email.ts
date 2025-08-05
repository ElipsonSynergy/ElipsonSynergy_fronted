// src/pages/api/send-email.ts
export const prerender = false;
import type { APIRoute } from 'astro';

interface ContactData {
  name: string;
  email: string;
  message: string;
  phone?: string;
}

function generateEmailTemplate(name: string, email: string, userMessage: string, phone = '') {
  const now = new Date();
  const formattedDate = `${now.getDate().toString().padStart(2, '0')}/${
    (now.getMonth() + 1).toString().padStart(2, '0')}/${
    now.getFullYear()} ${
    now.getHours().toString().padStart(2, '0')}:${
    now.getMinutes().toString().padStart(2, '0')}`;
  
  return `
<!DOCTYPE html>
<html>
<head>
    <title>New Contact Message</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 30px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            padding-bottom: 15px;
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;
        }
        .info-item {
            margin-bottom: 15px;
        }
        .info-label {
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
            color: #333;
        }
        .message-content {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 4px;
            border-left: 3px solid #3498db;
        }
        .footer {
            text-align: center;
            color: #777;
            font-size: 12px;
            margin-top: 30px;
            padding-top: 15px;
            border-top: 1px solid #eee;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2 style="color: #333; margin: 0;">New Contact Message</h2>
        </div>
        <div>
            <div class="info-item">
                <span class="info-label">Name:</span>
                <span>${name}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Email:</span>
                <span>${email}</span>
            </div>
            ${phone ? `<div class="info-item">
                <span class="info-label">Phone:</span>
                <span>${phone}</span>
            </div>` : ''}
            <div class="info-item">
                <span class="info-label">Message:</span>
                <div class="message-content">
                    ${userMessage.replace(/\n/g, '<br>')}
                </div>
            </div>
        </div>
        <div class="footer">
            <p>Sent at: ${formattedDate}</p>
            <p>&copy; ${now.getFullYear()} Elipson Synergy. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const contactData: ContactData = await request.json();
    
    // Validation
    if (!contactData.name || !contactData.email || !contactData.message) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Name, email, and message are required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get environment variables
    const SENDGRID_API_KEY = import.meta.env.SENDGRID_API_KEY;
    const MAIL_FROM_ADDRESS = import.meta.env.MAIL_FROM_ADDRESS || 'jikarij245@dariolo.com';
    const MAIL_FROM_NAME = import.meta.env.MAIL_FROM_NAME || 'Elipson Synergy';
    const MAIL_TO_ADDRESS = import.meta.env.MAIL_TO_ADDRESS || 'jikarij245@dariolo.com';

    if (!SENDGRID_API_KEY) {
      console.error('SendGrid API key not configured');
      return new Response(JSON.stringify({
        success: false,
        error: 'Email service not configured'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const html = generateEmailTemplate(
      contactData.name, 
      contactData.email, 
      contactData.message, 
      contactData.phone
    );

    const mailData = {
      personalizations: [{
        to: [{ email: MAIL_TO_ADDRESS }],
        subject: `New contact message from ${contactData.name}`
      }],
      from: {
        email: MAIL_FROM_ADDRESS,
        name: MAIL_FROM_NAME
      },
      content: [{
        type: 'text/html',
        value: html
      }]
    };

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mailData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`SendGrid API error: ${response.status} - ${errorText}`);
      throw new Error(`SendGrid API error: ${response.status}`);
    }

    console.log(`Email sent successfully to ${MAIL_TO_ADDRESS}`);
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Email sent successfully'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Send email error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to send email'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};