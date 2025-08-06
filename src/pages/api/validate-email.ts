export const prerender = false;
import type { APIRoute } from 'astro';
import dns from 'dns/promises';

interface ValidationResult {
  success: boolean;
  isValid: boolean;
  reason?: string;
  skipValidation?: boolean;
}

export const POST: APIRoute = async ({ request }) => {
  const { email } = await request.json() as { email: string };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({
      success: true,
      isValid: false,
      reason: 'Formato de correo no válido'
    } as ValidationResult), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const domain = email.split('@')[1];
  try {
    const mxRecords = await dns.resolveMx(domain);
    if (mxRecords.length === 0) {
      return new Response(JSON.stringify({
        success: true,
        isValid: false,
        reason: 'Dominio no tiene registros MX'
      } as ValidationResult), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response(JSON.stringify({
      success: true,
      isValid: true
    } as ValidationResult), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({
      success: true,
      isValid: true,
      skipValidation: true,
      reason: 'No se pudo verificar MX, omitiendo validación'
    } as ValidationResult), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
