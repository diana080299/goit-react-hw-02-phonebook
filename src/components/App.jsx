import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
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

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  formHandleSubmit = (name, number) => {
    const { contacts } = this.state;

    // Check if 'number' is defined and is a string
    if (!number || typeof number !== 'string') {
      console.error('Invalid number:', number);
      // Handle the case where 'number' is not valid
      // You might want to display an error message or handle this case appropriately
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const isContactExists = contacts.some(contact => contact.name === name);
    if (isContactExists) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContacts = () => {
    const contactsToLower = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact => {
      console.log('Contact:', contact);

      if (!contact || typeof contact.name !== 'string') {
        console.error('Invalid contact:', contact);
        return false;
      }

      const contactName = contact.name.toLowerCase();
      return contactName.includes(contactsToLower);
    });
  };

  render() {
    const { filter } = this.state;
    const visible = this.filterContacts();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formHandleSubmit} />
        <Filter value={filter} onChange={this.changeFilter} />
        <h2>Contacts</h2>
        <ContactList contacts={visible} onDelete={this.handleDelete} />
      </div>
    );
  }
}
