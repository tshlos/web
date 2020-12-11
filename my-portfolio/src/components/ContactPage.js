import React, { Component } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import Button from "./Button";
import "./ContactPage.css";

export default class ContactPage extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            message: "",
            sent: null,
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        
        const { name, email, message } = this.state;
        const contact = {
            name,
            email,
            message
        };

        const response = await fetch("https://taci-portfolio.herokuapp.com/api/form", {
        // const response = await fetch("/api/form", {
            method: "POST",
            mode: "cors", 
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(contact)
        });
        console.log('response:', response);

        this.setState({
            sent: true
        });
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            name: "",
            email: "",
            message: ""
        });
    }

    render() {
        return (
            <div className="contact-form-container">
                <div id="contact-form-wrapper"> 
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="name">NAME </Label> <span className="required">*</span>
                            <Input
                                type="text"
                                name="name"
                                value={this.state.name}
                                required
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">EMAIL</Label> <span className="required">*</span>
                            <Input
                                type="email"
                                name="email"
                                value={this.state.email}
                                required
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="message">MESSAGE</Label> <span className="required">*</span>
                            <Input
                                type="textarea"
                                name="message"
                                value={this.state.message}
                                required
                                onChange={this.handleChange}
                                rows="7"
                            />
                        </FormGroup>
                        <Button className="send-form-button" text="Send"/>
                        {this.state.sent === true && <p className="success-msg">Thanks for getting in touch. I'll get back to you soon.</p>}
                        {this.state.sent === false && <p className="error-msg">Message not sent. Please try again.</p>}
                    </Form>   
                </div>
            </div>
        )
    }
}
