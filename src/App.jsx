import 'modern-normalize';
import { Component } from "react";
import { Container } from './components/common/Container.styled';
import { Title } from 'components/common/Title.styled';
import { MyForm } from './components/Form/Form';
import { Filter } from './components/Filter/Filter';
import { ContactsList } from './components/ContactsList/ContactsList';

const LS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem(LS_KEY);
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
    })
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  validateContact = (data) => {
      const normalizedValue = data.name.toLowerCase();
      const result = this.state.contacts.find((item) => item.name.toLowerCase().includes(normalizedValue));
      return result;
  }

  handlerFilter = (evt) => {
    this.setState({
    filter: evt.target.value,
    })
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== contactId)
      }
    })
  }

  handlerSubmit = (data) => {
    if (this.validateContact(data)) {
      alert(`${data.name} already exist`);
    } else {
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, data],
        }
      })
    }
  }

  render() {
    return (
      <Container>
        <Title>Contact App</Title>
        <MyForm onSubmit={this.handlerSubmit} />
        <Title>Search by name</Title>
        <Filter value={this.state.filter} onChange={this.handlerFilter} />
        <ContactsList
          value={this.state.filter}
          options={this.state.contacts}
          onClickDelete={this.deleteContact}
        />
      </Container>
    );
  }
}
