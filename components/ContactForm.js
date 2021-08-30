// class ContactForm extends React.Component {
const ContactForm = function() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isGoing: true,
  //     numberOfGuests: 2
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(event) {
  //   const target = event.target;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // }

  // render() {
    // return (
  console.log("form");
  setTimeout(function() {

    console.log("start form");
    document.querySelector("#form-block").innerHTML = 
      `<form>
        <label>
          Your Name:
          <input
            name="name"
            type="text"
          />
        </label>
        <br />
        <label>
          Your Email:
          <input
            name="email"
            type="mail"
          />
        </label>
        <br />
        <label>
          Your Phone:
          <input
            name="phone"
            type="tel"
        />
        </label>
        <label>
          Message:
          <textarea />
        </label>
        <input type="submit" value="SEND" />
      </form>`

      console.log("end form");
      
      function openForm() {
        console.log("function");
        document.querySelector("form").classList.add("opened");
      }

      document.querySelectorAll(".getintouch").forEach(btn => {
        // btn.addEventListener("click", function() {
        btn.onclick = function() { 
          console.log("click");
          openForm();
        };
      });

    }, 1000);
    // )
  // }
}

export default ContactForm