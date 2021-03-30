import React from 'react'

class ValidationForm extends React.Component {
  state = {
    name : "",
    email : "",
    password : "",
    nameError: "",
    emailError : "",
    passwordError : "",
  }
  

  handleChange = event => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  
  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.email.includes("@")) {
      emailError = "invalid email"
    } else {
      emailError = ""
    }

    this.setState({emailError});

    if (emailError) return false;

    return true;
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const isValid = this.validate();
    if (isValid) {
    console.log(this.state);
  }
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div style={{color : 'red', fontSize : 14}}>{this.state.nameError}</div>
        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div style={{color : 'red', fontSize : 14}}>{this.state.emailError}</div>
        <div>
          <input
            name="password"
            placeholder="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div style={{color : 'red', fontSize : 14}}>{this.state.passwordError}</div>
        <div>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </div>
      </form>
    )
  }
}

export default ValidationForm