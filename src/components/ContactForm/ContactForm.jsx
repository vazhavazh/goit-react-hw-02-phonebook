import React, { Component } from 'react';

import {
  Form,
  InputContainers,
  LabelStyled,
  InputStyled,
  Button,
} from './ContactFormStyled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: new Date().getTime(),

      name: this.state.name,
      number: this.state.number,
    };
    this.props.onSubmit(newContact);
    this.reset();
  };

  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputContainers>
          <LabelStyled>Name</LabelStyled>
          <InputStyled
            onChange={this.handleInputChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <LabelStyled>Number</LabelStyled>
          <InputStyled
            onChange={this.handleInputChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputContainers>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
