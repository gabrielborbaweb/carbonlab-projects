const ContactForm = function() {

  setTimeout(function() {

    document.querySelector("#form-block").innerHTML = 
      `<form>
        <label>
          Your Name:
          <input
            name="name"
            type="text"
          />
        </label>
        <label>
          Your Email:
          <input
            name="email"
            type="mail"
          />
        </label>
        <label>
          Your Phone:
          <input
            name="phone"
            type="tel"
        />
        </label>
        <label>
          Message:
          <textarea><textarea />
        </label>
        <input type="submit" value="SEND" />
      </form>`
      
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