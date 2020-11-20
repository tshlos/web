import React, { Component } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import Button from "./Button";
import "./ContactPage.css";
import axios from "axios";


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
        
        await axios.post("https://taci-portfolio.herokuapp.com/api/form", {
            name, 
            email, 
            message,
        },
        {withCredentials: true});

        this.setState({
            sent: true,
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
                                rows="5"
                            />
                        </FormGroup>
                        <Button text="Send"/>
                        {this.state.sent === true && <p className="success-msg">Email sent</p>}
                        {this.state.sent === false && <p className="error-msg">Email not sent</p>}
                    </Form>   
                </div>
            </div>
        )
    }
}
