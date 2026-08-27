import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (request: Request) => {
  try {
    const body = await request.json();
    const { user_name, user_email, subject, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Contacto Web <onboarding@resend.dev>',
      to: ['inmobiliariadelatalantico@gmail.com'],
      subject: `Nueva Consulta Web: ${subject}`,
      html: `
        <h2>Nueva consulta desde la página web</h2>
        <p><strong>Nombre:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <blockquote style="background: #f4f4f4; padding: 10px; border-left: 4px solid #0D9488;">
          ${message}
        </blockquote>
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

// Netlify-specific config to route requests to /api/send-email
export const config = {
  path: '/api/send-email',
};
