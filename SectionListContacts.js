import React from 'react';
import {SectionList, Text} from 'react-native';
import Row from './row';
import PropTypes from 'prop-types';

const renderItem = obj => (<Row name={obj.item.name} phone={obj.item.phone} />)

const renderSectionHeader = obj => (<Text>{obj.section.title}</Text>)

const ContactsList = (props) => {
    const contactsByFirstName = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
    }, {});

    const sections = Object.keys(contactsByFirstName).sort().map(letter => ({
        title: letter,
        data: contactsByFirstName[letter],
    }));


    return (
        <SectionList 
              sections={sections}  
              renderItem={renderItem} 
              renderSectionHeader={renderSectionHeader}
              />
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
}

export default ContactsList;