<script>
    import { enhance } from '$app/forms';
  
    /** @type {import('./$types').ActionData} */
    export let form;
  
    let isSubmitting = false;
    let successMessage = form?.success ? form.message : '';
    let errorMessage = form?.error ? form.error : '';
  
    function handleEnhance({ formElement }) {
        const handleSubmit = async ({ result }) => {
            isSubmitting = false;
            successMessage = '';
            errorMessage = '';
  
            if (result.type === 'failure') {
                errorMessage = result.data.error;
            } else if (result.type === 'success') {
                formElement.reset();  // Reset het formulier na succesvolle indiening
                successMessage = result.data.message;
            }
        };
        return handleSubmit;
    }
  </script>
  
  <section class="contact" id="contact">
    <div class="contact-content section-content">
        <p class="section-subtitle">Contact</p>
        <h2 class="h3 section-title">Begin Vandaag met Uw Elektrische Succes!</h2>
        <p class="section-text">
            Heeft u een elektraproject in gedachten? Aarzel niet en stuur me vandaag nog een bericht! Ik ben hier om u te helpen met deskundig advies en snelle service. Vul het contactformulier in, en ik neem zo snel mogelijk contact met u op om uw project te bespreken.
        </p>
    </div>
    <form method="POST" use:enhance={handleEnhance} on:submit={() => isSubmitting = true} class="contact-form">
        <div class="form-wrapper">
            <label for="name" class="form-label">Naam</label>
            <div class="input-wrapper">
                <input type="text" name="name" id="name" required placeholder="e.g John Doe" class="input-field" value={form?.values?.name || ''}>
                <svg xmlns="http://www.w3.org/2000/svg" class="form-svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-secondary)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
            </div>
        </div>
        <div class="form-wrapper">
            <label for="email" class="form-label">Email</label>
            <div class="input-wrapper">
                <input type="email" name="email" id="email" required placeholder="e.g johndoe@mail.com" class="input-field" value={form?.values?.email || ''}>
                <svg xmlns="http://www.w3.org/2000/svg" class="form-svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-secondary)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
            </div>
        </div>
        <div class="form-wrapper">
            <label for="phone" class="form-label">Mobiel</label>
            <div class="input-wrapper">
                <input type="tel" name="phone" id="phone" required placeholder="Mobiele nummer" class="input-field" value={form?.values?.phone || ''}>
                <svg xmlns="http://www.w3.org/2000/svg" class="form-svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-secondary)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
            </div>
        </div>
        <div class="form-wrapper">
            <label for="message" class="form-label">Bericht</label>
            <div class="input-wrapper">
                <textarea name="message" id="message" required placeholder="Beschrijf uw elektrische vraag of project hier..." class="input-field">{form?.values?.message || ''}</textarea>
                <svg xmlns="http://www.w3.org/2000/svg" class="form-svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-secondary)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
                </svg>
            </div>
        </div>
        {#if successMessage}
            <p class="success-message">{successMessage}</p>
        {/if}
        {#if errorMessage}
            <p class="error-message">{errorMessage}</p>
        {/if}
        <button type="submit" class="btn btn-primary" disabled={isSubmitting}>
            {#if isSubmitting}
                Versturen...
            {:else}
                Verstuur
            {/if}
        </button>
    </form>
  
  
    <style>
        /* CONTACT */
        .contact { padding-block: var(--section-padding); }
  
        .contact-content { margin-bottom: 50px; }
  
        .contact-form {
            background: var(--bg-secondary);
            padding: 20px;
            border-radius: var(--radius-12);
            box-shadow: var(--shadow-1);
        }
  
        .form-wrapper { margin-bottom: 25px; }
  
        .form-label {
            color: var(--color-primary);
            font-size: var(--fs-7);
            font-family: var(--ff-poppins);
            margin-bottom: 8px;
            margin-left: 5px;
        }
  
        .input-wrapper { position: relative; }
  
        .input-field {
            background: var(--input-bg);
            color: var(--color-primary);
            padding: 10px;
            padding-left: 40px;
            border-radius: var(--radius-12);
            transition: var(--transition-1);
            border: 1px solid var(--input-border-color);
        }
  
        .input-field:valid,
        .input-field:focus {
          
  
        }
  
        .form-svg{
            position: absolute;
            top: 10px;
            left: 10px;
            width: 20px;
            height: 20px;
            transition: var(--transition-1);
        }
  
        textarea.input-field {
            min-height: 60px;
            height: 120px;
            max-height: 200px;
            resize: vertical;
        }
  
        .input-field:focus { outline: 1px solid; }
  
        .input-field:focus + .icon { fill: var(--raw-seinna); }
  
        .contact .btn-primary {
            max-width: unset;
            width: 100%;
            background: var(--color-primary);
            color: var(--bg-primary);
        }
  
        .contact .btn-primary:hover, 
        .contact .btn-primary:focus, 
        .contact .btn-primary:active {
            background: var(--color-primary);
            color: var(--bg-primary);
        }
  
        @media (min-width: 768px) {
            /* CONTACT */
            .contact-form {
                max-width: 450px;
                margin-inline: auto;
            }
        }
  
        @media (min-width: 992px) {
            /* CONTACT */
            .contact {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 30px;
            }
            .contact-content { margin-bottom: 0; }
            .contact-form { width: 100%; }
            .contact-list { margin-left: -40px; }
        }
  
        .success-message {
            color: green;
            font-weight: bold;
            margin-bottom: 20px;
        }
  
        .error-message {
            color: red;
            font-weight: bold;
            margin-bottom: 20px;
        }
    </style>
  </section>