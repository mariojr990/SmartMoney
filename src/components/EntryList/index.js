import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import EntryListItem from './EntryListItem/index'

export default function EntryList({entries}) {
 return (
   <View>
     <Text style={{fontSize: 22,
    fontWeight: 'bold',marginBottom: 10,marginTop: 10}}>Ultimos Lançamentos</Text>

    <FlatList 
        data={entries}
      renderItem={ ({item}) => <Text>{item.description} - ${item.amount} </Text> }>
    </FlatList>
   </View>
  );
}
const styles = StyleSheet.create({
    container:{

    }
})