import React, { Component } from 'react';

class ContactForm extends Component {
    constructor() {
        super();
        this.state = { name: '', mail: '', number: '', website: '', message: '' };

    }



    nameChanged = (e) => this.setState({ name: e.target.value });
    mailChanged = (e) => this.setState({ mail: e.target.value });
    numberChanged = (e) => this.setState({ number: e.target.value });
    websiteChanged = (e) => this.setState({ website: e.target.value });
    messageChanged = (e) => this.setState({ message: e.target.value });

    formSubmitted = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div class="container">
                <form onSubmit={this.formSubmitted}>
                    <h1>Contact Form</h1>
                    <label>Name</label>
                    <input name="name" value={this.state.name} onChange={this.nameChanged} /><br />
                    <label>E-mail</label>
                    <input name="mail" value={this.state.mail} onChange={this.mailChanged} /><br />
                    <label>Phone number</label>
                    <input name="number" value={this.state.number} onChange={this.numberChanged} /><br />
                    <label>Your Website</label>
                    <input name="website" value={this.state.website} onChange={this.websiteChanged} /><br />
                    <label>Message</label>
                    <input name="message" value={this.state.message} onChange={this.messageChanged} /><br />
                    <input type="submit"></input>
                </form>
            </div>)
    }
}


export default ContactForm;