class ContactForm extends React.Component {
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
  
    render() {
      return (
        <form>
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
          <input type="submit" value="Send" />
        </form>
      );
    }
  }