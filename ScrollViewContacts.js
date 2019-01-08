import React from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';



const ScrollViewContacts = props => (
    <ScrollView>
        {
            props.contacts.map( contact => (
                <View key={contact.key} style={styles.row}>
                    <Text>{contact.name}</Text>
                    <Text>{contact.phone}</Text>
                </View>
            )) 
        }
    </ScrollView>
)


const styles = StyleSheet.create({
    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    row: {
        padding: 20,
    }
  });

  export default ScrollViewContacts;