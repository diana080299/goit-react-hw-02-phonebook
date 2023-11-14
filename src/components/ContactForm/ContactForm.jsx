import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameId = nanoid();
  numberId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    console.log('Name:', name);
    console.log('Value:', value);

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    // ... (rest of the code)

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    // Make sure to pass both name and number to onSubmit
    this.props.onSubmit(newContact.name, newContact.number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>
          {' '}
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
            id={this.nameId}
          />
        </label>
        <label htmlFor={this.numberId}>
          Number
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            required
            id={this.numberId}
          />
        </label>

        <button type="submit">Add contacts</button>
      </form>
    );
  }
}
