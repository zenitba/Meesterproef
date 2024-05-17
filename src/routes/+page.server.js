import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');

        // Simuleer fout afhandeling
        if (!name || !email || !message) {
            return fail(400, { error: 'Vul alle vereiste velden in.', values: { name, email, phone, message } });
        }

        // Verwerk de formulierdata 
        try {
            console.log('Formulier ingediend:', { name, email, phone, message });

            // Geef een succesmelding terug
            return {
                success: true,
                message: 'Uw bericht is verstuurd✅',
                values: { name: '', email: '', phone: '', message: '' } // Lege waarden om formulier te resetten
            };
        } catch (err) {
            return fail(500, { error: 'Er is iets misgegaan. Probeer het opnieuw.', values: { name, email, phone, message } });
        }
    }
};