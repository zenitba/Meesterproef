<script>
    import { enhance } from '$app/forms';

    export let data;
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
    <div class="contact-content section-content">
        <p class="section-subtitle">Contact</p>
        {#each data.forms as form}
            <h2 class="h3 section-title">{form.formTitle}</h2>
            <p class="section-text">{form.formDescription}</p>
        {/each}
        <div class="contact-list-item">
            <div class="wrapper">
              <h3 class="h4 contact-item-title">Kvk</h3>
              <p class="contact-info">86037420</p>
              <h3 class="h4 contact-item-title">BTW</h3>
              <p class="contact-info">NL004190664B25</p>
              <h3 class="h4 contact-item-title">Email:</h3>
              <a href="mailto:info@araya-elektrotechniek.nl" class="contact-info">info@araya-elektrotechniek.nl</a>
            </div>
        </div>
        <noscript>
            <div class="noscript-warning">
                <p>Uw bericht wordt verzonden, maar u wordt mogelijk doorgestuurd naar een zwart scherm. U kunt terugkeren naar de vorige pagina nadat het bericht is verzonden.</p>
            </div>
        </noscript>
    </div>  
    <form method="POST" action="/form" use:enhance={handleEnhance} on:submit={() => isSubmitting = true} class="contact-form">
        <div class="form-wrapper">
            <label for="name" class="form-label">Naam</label>
            <div class="input-wrapper">
                <input type="text" name="name" id="name" required placeholder="Uw naam of bedrijf naam" class="input-field">
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
                <input type="email" name="email" id="email" required placeholder="Uw emailadress" class="input-field">
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
                <input type="tel" name="phone" id="phone" required placeholder="Mobiele nummer" class="input-field">
                <svg xmlns="http://www.w3.org/2000/svg" class="form-svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-secondary)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
            </div>
        </div>

        <div class="form-wrapper">
            <label for="message" class="form-label">Bericht</label>
            <div class="input-wrapper">
                <textarea name="message" id="message" required placeholder="Beschrijf uw elektrische vraag of project hier..." class="input-field"></textarea>
                <svg xmlns="http://www.w3.org/2000/svg" class="form-svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-secondary)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
                </svg>
            </div>
            <div class="form-action">
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
            </div>
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

    .contact-list-item {
        display: flex;
        align-items: flex-start;
        margin: 10px 0;
    }

    .contact-item-title {
        margin-top: 20px;
        margin-bottom: 10px;
        color: var(--color-primary);
    }

    .contact-list-item .contact-info {
        color: var(--color-secondary);
        font-style: normal;
        line-height: 1.6;
        transition: var(--transition-1);
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

    .form-svg {
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

    .input-field:focus {
        outline: 2px solid;
    }

    .contact .btn-primary {
        max-width: unset;
        width: 100%;
        background: var(--color-primary);
        color: var(--bg-primary);
        margin-top: 20px;
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
        position: relative;
        border-radius: 50%;
        color: var(--color-primary);
        box-shadow: 32px 0, -32px 0, 64px 0;
    }

    .loader::after {
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 10px;
        background: green;
        animation: move 3s linear infinite alternate;
    }

    @keyframes move {
        0%,
        5% {
            left: -32px;
            width: 16px;
        }
        15%,
        20% {
            left: -32px;
            width: 48px;
        }
        30%,
        35% {
            left: 0px;
            width: 16px;
        }
        45%,
        50% {
            left: 0px;
            width: 48px;
        }
        60%,
        65% {
            left: 32px;
            width: 16px;
        }
        75%,
        80% {
            left: 32px;
            width: 48px;
        }
        95%,
        100% {
            left: 64px;
            width: 16px;
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
        /* margin-bottom: 20px; */
    }

    .error-message {
        color: red;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .noscript-warning {
        background: white;
        color: black;
        font-family: var(--ff-poppins);
        line-height: 1.2;
        padding: 10px;
        border-radius: var(--radius-12);
        margin-top: 20px;
    }
</style>
