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
  </div>
  <form method="POST" use:enhance={handleEnhance} on:submit={() => isSubmitting = true} class="contact-form">
    <div class="form-wrapper">
      <label for="name" class="form-label">Naam</label>
      <div class="input-wrapper">
        <input type="text" name="name" id="name" required placeholder="e.g John Doe" class="input-field">
      </div>
    </div>
    <div class="form-wrapper">
      <label for="email" class="form-label">Email</label>
      <div class="input-wrapper">
        <input type="email" name="email" id="email" required placeholder="e.g johndoe@mail.com" class="input-field">
      </div>
    </div>
    <div class="form-wrapper">
      <label for="phone" class="form-label">Mobiel</label>
      <div class="input-wrapper">
        <input type="tel" name="phone" id="phone" required placeholder="Mobiele nummer" class="input-field">
      </div>
    </div>
    <div class="form-wrapper">
      <label for="message" class="form-label">Bericht</label>
      <div class="input-wrapper">
        <textarea name="message" id="message" required placeholder="Beschrijf uw elektrische vraag of project hier..." class="input-field"></textarea>
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
    gap: 39px;
    margin-bottom: 20px;
  }

  .contact-item-title {
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
    outline: 1px solid;
  }

  .input-field:focus + .icon {
    fill: var(--raw-seinna);
  }

  .contact .btn-primary {
    max-width: unset;
    width: 100%;
    background: var(--color-primary);
    color: var(--bg-primary);
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
    margin-bottom: 20px;
  }

  .error-message {
    color: red;
    font-weight: bold;
    margin-bottom: 20px;
  }
</style>
