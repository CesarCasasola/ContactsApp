import React from 'react';
import {FlatList} from 'react-native';
import Row from './row';

const renderItem = obj => (<Row name={obj.item.name} phone={obj.item.phone} />)

const FlatListContacts = props => (
    <FlatList data={props.contacts} renderItem={renderItem}/>
);

export default FlatListContacts;