import { fail } from '@sveltejs/kit';
import fetch from 'node-fetch';
import 'dotenv/config';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    if (!name || !email || !message) {
      return fail(400, {
        error: 'Vul alle vereiste velden in.',
        values: { name, email, phone, message }
      });
    }

    const payload = {
      access_key: process.env.VITE_WEB3FORMS_ACCESS_KEY,
      name,
      email,
      phone,
      message
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      console.log('Web3Forms API response:', result); // Logging response

      if (response.ok) {
        return {
          success: true,
          message: 'Uw bericht is verstuurd✅',
          values: { name: '', email: '', phone: '', message: '' }
        };
      } else {
        console.error('Response error:', result);
        return fail(500, {
          error: 'Er is iets misgegaan. Probeer het opnieuw.',
          values: { name, email, phone, message }
        });
      }
    } catch (err) {
      console.error('Verzending mislukt:', err);
      return fail(500, {
        error: 'Er is iets misgegaan. Probeer het opnieuw.',
        values: { name, email, phone, message }
      });
    }
  }
};

