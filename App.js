import React from 'react';
import { StyleSheet, View, ScrollView, Button } from 'react-native';
import {Constants} from 'expo';
 
import contacts, {compareNames} from './contacts.js';
import SectionListContacts from './SectionListContacts';
import AddContactForm from './AddContactForm';


export default class App extends React.Component {
    state ={
      showContacts: true,
      contacts: contacts,
      showForm: false,
    }

    addContact = newContact =>{
      this.setState({showForm: false, contacts: [...this.state.contacts, newContact]})      
    }

    toggleContacts = () => {
      this.setState(prevState => ({showContacts: !prevState.showContacts}))
    }

    toggleForm = () => {
      this.setState(prevState => ({showForm: !prevState.showForm}))
    }

    resort = () => {
      this.setState(prevState => ({contacts: [... (prevState.contacts)].sort(compareNames)}))
    }



  render() {

      if (this.state.showForm) return <AddContactForm addContact={this.addContact}/>
      return (
        <View style={styles.container}>
          <Button title="toggle contacts" onPress={this.toggleContacts} color="green"/>
          <Button title="toggle form" onPress={this.toggleForm} color="purple"/>
          <Button title="sort" onPress={this.resort}/>
          {this.state.showContacts &&    
            <SectionListContacts contacts={this.state.contacts} />
          }
        </View>
      ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight+2,
  },
});
