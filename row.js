import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function(props){
    return (
    <View style={styles.row}>
        <Text style={styles.nameText}>{props.name}</Text>
        <Text>{props.phone}</Text>
    </View> 
  );    
}
    

  const styles = StyleSheet.create({
    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    row: {
        padding: 20,
    }
  });