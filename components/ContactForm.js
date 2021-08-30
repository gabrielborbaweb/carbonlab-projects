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
          //   value={this.state.value}
          //   onChange={this.handleChange} 
          />
        </label>
        <br />
        <label>
          Your Email:
          <input
            name="email"
            type="mail"
          //   value={this.state.value}
          //   onChange={this.handleChange} 
          />
        </label>
        <br />
        <label>
          Your Phone:
          <input
            name="phone"
            type="tel"
          //   value={this.state.value}
          //   onChange={this.handleChange} 
        />
        </label>
        <label>
          Message:
          <textarea />
        </label>
        <input type="submit" value="SEND" />
      </form>`

      console.log("end form");
      document.querySelectorAll(".getintouch").forEach(btn => {
        btn.addEventListener("click", function() {
          console.log("click");
          document.querySelector("form").classList.add("opened");
        });
      });
      // document.querySelector(".close").addEventListener(click, function() {
      //     document.querySelector("form").classList.remove("opened");
      // });

    }, 3000);
    // )
  // }
}

export default ContactForm