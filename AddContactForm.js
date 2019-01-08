import React from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import {Constants} from 'expo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        minWidth: 100,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    }
});

export default class AddContactForm extends React.Component{
    
    static propTypes = {
            addContact: PropTypes.func,
    }

    state = {
        name: '',
        phone: '',
    }

    handleNameChange = name => {
        this.setState({name})
    }

    handlePhoneChange = phone => {
        if( +phone >= 0 && phone.length <= 10){
            this.setState({phone})
        }
}

    handleSubmit = () => {
        this.props.addContact(this.state)
    }

    render(){
        return (
            <View style={{padding: 20}}>

                <TextInput 
                style={styles.input} 
                onChangeText={this.handleNameChange}
                value={this.state.name} 
                placeholder="Name"/>   

                <TextInput 
                style={styles.input} 
                onChangeText={this.handlePhoneChange}
                value={this.state.phone} 
                keyboardType="numeric"
                placeholder="Phone"/>

                <Button title="Add contact" onPress={this.handleSubmit}/>
            </View>
        )
    }
}