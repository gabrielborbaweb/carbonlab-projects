const ContactForm = function() {

  setTimeout(function() {

    document.querySelector("#form-block").innerHTML = 
      `<form id="form">
        <div class="field">
          <label for="name">Your Name</label>
          <input type="text" name="name" id="name" required>
        </div>
        <div class="columns-2">
          <div class="field">
            <label for="email">Your Email</label>
            <input type="email" name="email" id="email" required>
          </div>
          <div class="field">
            <label for="phone">Your Phone</label>
            <input type="tel" name="phone" id="phone" required>
          </div>
        </div>
        <div class="field">
          <label for="message">Message</label>
          <textarea name="message" id="message" required><textarea/>
        </div>
      
        <input type="submit" id="button" value="SEND" >
      </form>
      
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
      <script type="text/javascript">
        emailjs.init('user_FJXSeY8MrVjkBqdwgty5z')
      </script>`

      const submit = document.getElementById('button');

      document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();

        submit.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_30f9zce';

        emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
            submit.value = 'Send Email';
            alert('Sent!');
          }, (err) => {
            submit.value = 'Send Email';
            alert(JSON.stringify(err));
          });
      });
      
      function openForm() {
        document.querySelector("#form-block").classList.add("opened");
      }

      document.querySelectorAll(".getintouch").forEach(btn => {
        btn.onclick = function() { 
          openForm();
        };
      });

    }, 1000);
}

export default ContactForm