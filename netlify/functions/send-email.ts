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
        <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F1F5F9; padding: 40px 20px; color: #1E293B; min-height: 100%;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02); border: 1px solid #E2E8F0;">
            
            <!-- Header -->
            <div style="background-color: #0b2545; padding: 32px 24px; text-align: center; border-bottom: 4px solid #0d9488;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase;">
                Hernández Inmuebles
              </h1>
              <p style="color: #0d9488; margin: 4px 0 0 0; font-size: 11px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;">
                &amp; Asociados
              </p>
            </div>

            <!-- Content Area -->
            <div style="padding: 32px 24px;">
              <h2 style="color: #0b2545; margin-top: 0; margin-bottom: 24px; font-size: 18px; font-weight: 700; border-bottom: 1px solid #E2E8F0; padding-bottom: 12px;">
                Nueva Consulta Recibida
              </h2>

              <!-- Details Grid -->
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 0; width: 35%; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748B; letter-spacing: 0.5px; border-bottom: 1px solid #F1F5F9;">
                    Nombre del Remitente
                  </td>
                  <td style="padding: 10px 0; font-size: 14px; font-weight: 600; color: #0b2545; border-bottom: 1px solid #F1F5F9;">
                    ${user_name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748B; letter-spacing: 0.5px; border-bottom: 1px solid #F1F5F9;">
                    Correo Electrónico
                  </td>
                  <td style="padding: 10px 0; font-size: 14px; color: #0d9488; font-weight: 600; border-bottom: 1px solid #F1F5F9;">
                    <a href="mailto:${user_email}" style="color: #0d9488; text-decoration: none; border-bottom: 1px dashed #0d9488;">
                      ${user_email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748B; letter-spacing: 0.5px; border-bottom: 1px solid #F1F5F9;">
                    Asunto de Interés
                  </td>
                  <td style="padding: 10px 0; font-size: 13px; font-weight: 700; color: #0b2545; border-bottom: 1px solid #F1F5F9;">
                    <span style="background-color: #0b2545; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-size: 11px; display: inline-block; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">
                      ${subject}
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Message Block -->
              <div style="margin-top: 24px;">
                <h3 style="margin-top: 0; margin-bottom: 8px; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748B; letter-spacing: 0.5px;">
                  Detalles del Requerimiento
                </h3>
                <div style="background-color: #F8FAFC; border-left: 4px solid #0d9488; padding: 18px; border-radius: 0 8px 8px 0; color: #334155; font-size: 14px; line-height: 1.6; font-style: italic; white-space: pre-wrap; border-top: 1px solid #F1F5F9; border-right: 1px solid #F1F5F9; border-bottom: 1px solid #F1F5F9;">
                  "${message}"
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #F8FAFC; padding: 20px 24px; text-align: center; border-top: 1px solid #E2E8F0;">
              <p style="margin: 0; font-size: 10px; color: #94A3B8; line-height: 1.5;">
                Este es un correo automático enviado desde el formulario de contacto web de Hernández Inmuebles &amp; Asociados.<br />
                © 2026 Hernández Inmuebles &amp; Asociados. Todos los derechos reservados.
              </p>
            </div>

          </div>
        </div>
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
