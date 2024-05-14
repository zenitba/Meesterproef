<section class="contact" id="contact">
  <div class="contact-content section-content">
      <p class="section-subtitle">Contact</p>
      <h2 class="h3 section-title">Begin Vandaag met Uw Elektrische Succes!</h2>
      <p class="section-text">
          Heeft u een elektraproject in gedachten? Aarzel niet en stuur me vandaag nog een bericht! Ik ben hier om u te helpen met deskundig advies en snelle service. Vul het contactformulier in, en ik neem zo snel mogelijk contact met u op om uw project te bespreken.
      </p>
  </div>
  <form action="" class="contact-form">
      <div class="form-wrapper">
          <label for="name" class="form-label">Naam</label>
          <div class="input-wrapper">
              <input type="text" name="name" id="name" required placeholder="e.g John Doe" class="input-field">
              <ion-icon name="person-circle"></ion-icon>
          </div>
      </div>
      <div class="form-wrapper">
          <label for="email" class="form-label">Email</label>
          <div class="input-wrapper">
              <input type="email" name="email" id="email" required placeholder="e.g johndoe@mail.com" class="input-field">
              <ion-icon name="mail"></ion-icon>
          </div>
      </div>
      <div class="form-wrapper">
          <label for="phone" class="form-label">Mobiel</label>
          <div class="input-wrapper">
              <input type="tel" name="phone" id="phone" required placeholder="Mobiele nummer" class="input-field">
              <ion-icon name="call"></ion-icon>
          </div>
      </div>
      <div class="form-wrapper">
          <label for="message" class="form-label">Bericht</label>
          <div class="input-wrapper">
              <textarea name="message" id="message" required placeholder="Beschrijf uw elektrische vraag of project hier..." class="input-field"></textarea>
              <ion-icon name="chatbubbles"></ion-icon>
          </div>
      </div>
      <button type="submit" class="btn btn-primary">Verstuur</button>
  </form>
</section>

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
    color: var(--raw-seinna);
    padding: 10px;
    padding-left: 40px;
    border-radius: var(--radius-12);
    transition: var(--transition-1);
  }
  
  .input-wrapper ion-icon {
    position: absolute;
    top: 10px;
    left: 10px;
    color: var(--color-secondary);
    font-size: 20px;
    transition: var(--transition-1);
  }
  
  textarea.input-field {
    min-height: 60px;
    height: 120px;
    max-height: 200px;
    resize: vertical;
  }
  
  .input-field:focus { outline: 1px solid; }
  
  .input-field:focus + ion-icon { color: var(--raw-seinna); }
  
  .contact .btn-primary {
    max-width: unset;
    width: 100%;
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
</style>