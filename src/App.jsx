import React, { Component } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';

import { Filter } from './components/Filter/Filter';

import { ContactList } from './components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const { name, number } = newContact;
    const { contacts } = this.state;
    
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return
    }
     if (contacts.some(contact => contact.number === number)) {
       alert(`${number} is already in contacts`);
       return;
     }
    
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact)=>contact.id !== id)
    }))
  }

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };
  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilterContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onClick={this.handleDelete} />
      </>
    );
  }
}

