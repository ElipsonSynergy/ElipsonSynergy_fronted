export const prerender = false;
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Email is required' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const MAILBOXLAYER_API_KEY = import.meta.env.MAILBOXLAYER_API_KEY;
    
    if (!MAILBOXLAYER_API_KEY) {
      console.warn('MAILBOXLAYER_API_KEY not configured, skipping validation');
      return new Response(JSON.stringify({
        success: true,
        isValid: true,
        reason: 'API key not configured, using basic validation only',
        skipValidation: true
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const response = await fetch(
      `https://apilayer.net/api/check?access_key=${MAILBOXLAYER_API_KEY}&email=${email}&smtp=1&format=1`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    const isValid = result.format_valid &&
                   result.mx_found &&
                   (result.smtp_check === true || result.smtp_check === null);

    let reason = '';
    if (!result.format_valid) {
      reason = 'Email format is invalid';
    } else if (!result.mx_found) {
      reason = 'Email domain does not have mail servers configured';
    } else if (result.smtp_check === false) {
      reason = 'Email mailbox does not exist or cannot receive emails';
    } else if (result.disposable) {
      reason = 'Disposable email addresses are not allowed';
    }

    return new Response(JSON.stringify({
      success: true,
      isValid,
      reason,
      skipValidation: false,
      details: {
        format_valid: result.format_valid || false,
        mx_found: result.mx_found || false,
        smtp_check: result.smtp_check,
        disposable: result.disposable || false,
        role: result.role || false,
        score: result.score || 0,
        domain: result.domain || email.split('@')[1]
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Email validation error:', error);
    return new Response(JSON.stringify({
      success: true, // Don't block form submission on validation errors
      isValid: true,
      reason: `Validation service temporarily unavailable: ${
        typeof error === 'object' && error !== null && 'message' in error ? (error as { message: string }).message : String(error)
      }`,
      serviceError: true,
      skipValidation: true
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};