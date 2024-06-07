<script>
    import { enhance } from '$app/forms';
    import { SvgEmail, SvgMessage, SvgPhone, SvgUser, ContactList, ContactText } from '$lib';

    let isSubmitting = false;
    let successMessage = '';
    let errorMessage = '';
  
  
    function handleEnhance({ formElement }) {
      const handleSubmit = async ({ result }) => {
        isSubmitting = false;
        successMessage = '';
        errorMessage = '';
  
        if (result.type === 'failure') {
          errorMessage = result.data.error;
        } else if (result.type === 'success') {
          formElement.reset();
          successMessage = result.data.message;
        }
      };
      return handleSubmit;
    }
</script>

<section class="contact" id="contact">
    <header class="contact-content section-content">
        <p class="section-subtitle">Contact</p>
        <h2 class="h3 section-title">Begin Vandaag met Uw Elektrische Succes!</h2>
        <ContactText />
        <ContactList />
    </header>  
    <form method="POST" use:enhance={handleEnhance} on:submit={() => isSubmitting = true} class="contact-form">
        <fieldset>
            <section class="form-wrapper">
                <label for="name" class="form-label">Naam</label>
                <div class="input-wrapper">
                    <input type="text" name="name" id="name" required placeholder="Uw naam of bedrijf naam" class="input-field">
                    <SvgUser />
                </div>
            </section>

            <section class="form-wrapper">
                <label for="email" class="form-label">Email</label>
                <div class="input-wrapper">
                    <input type="email" name="email" id="email" required placeholder="Uw emailadress" class="input-field">
                    <SvgEmail />
                </div>
            </section>

            <section class="form-wrapper">
                <label for="phone" class="form-label">Mobiel</label>
                <div class="input-wrapper">
                    <input type="tel" name="phone" id="phone" required placeholder="Mobiele nummer" class="input-field">
                    <SvgPhone /> 
                </div>
            </section>

            <section class="form-wrapper">
                <label for="message" class="form-label">Bericht</label>
                <div class="input-wrapper">
                    <textarea name="message" id="message" required placeholder="Beschrijf uw elektrische vraag of project hier..." class="input-field"></textarea>
                    <SvgMessage />
                </div>
            </section>

            <section class="form-action">
                {#if isSubmitting}
                    <span class="loader"></span>
                {/if}
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
                <noscript>
                    Nadat uw op verstuur klikt krijg uw geen succes bericht maar uw bericht is verzonden.
                </noscript>
            </section>
        </fieldset>
    </form>
</section>

<style>
    /* CONTACT */
    .contact {
        padding-block: var(--section-padding);
    }

    .contact-content {
        margin-bottom: 50px;
    }

    .contact-form {
        background: var(--bg-secondary);
        padding: 20px;
        border-radius: var(--radius-12);
        box-shadow: var(--shadow-1);
        position: relative;
    }

    .form-wrapper {
        margin-bottom: 25px;
    }

    .form-label {
        color: var(--color-primary);
        font-size: var(--fs-7);
        font-family: var(--ff-poppins);
        margin-bottom: 8px;
        margin-left: 5px;
    }

    .input-wrapper {
        position: relative;
    }

    .input-field {
        background: var(--input-bg);
        color: var(--color-primary);
        padding: 10px;
        padding-left: 40px;
        border-radius: var(--radius-12);
        transition: var(--transition-1);
        border: 1px solid var(--input-border-color);
    }

    textarea.input-field {
        min-height: 60px;
        height: 120px;
        max-height: 200px;
        resize: vertical;
    }

    .input-field:focus {
        outline: 2px solid;
    }

    .contact .btn-primary {
        max-width: unset;
        width: 100%;
        background: var(--color-primary);
        color: var(--bg-primary);
        margin: 20px;
    }

    .form-action {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }

    .loader {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        display: block;
        margin: 15px auto;
        position: relative;
        color: var(--color-primary);
        box-sizing: border-box;
        animation: animloader 1s linear infinite alternate;
    }

    @keyframes animloader {
        0% {
            box-shadow: -38px -12px, -14px 0, 14px 0, 38px 0;
        }
        33% {
            box-shadow: -38px 0px, -14px -12px, 14px 0, 38px 0;
        }
        66% {
            box-shadow: -38px 0px, -14px 0, 14px -12px, 38px 0;
        }
        100% {
            box-shadow: -38px 0, -14px 0, 14px 0, 38px -12px;
        }
    }

    @media (min-width: 768px) {
        .contact-form {
            max-width: 450px;
            margin-inline: auto;
        }
    }

    @media (min-width: 992px) {
        .contact {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
        }

        .contact-content {
            margin-bottom: 0;
        }

        .contact-form {
            width: 100%;
        }
    }

    .success-message {
        color: green;
        font-weight: bold;
    }

    .error-message {
        color: red;
        font-weight: bold;
        margin-bottom: 20px;
    }

    fieldset {
        border: none;
    }
</style>
