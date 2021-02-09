import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import EntryListItem from './EntryListItem/index'

export default function EntryList() {
 return (
   <View>
     <Text style={{fontSize: 22,
    fontWeight: 'bold',marginBottom: 10,marginTop: 10}}>Ultimos Lançamentos</Text>

    <FlatList 
        data={[
        {key: "Padaria Asa Branca: R$10"},
        {key: "SuperMercado Isabora: R$190"},
        {key: "Posto Ipiranga: R$190"},
      ]}
      renderItem={ ({item}) => <Text>{item.key}</Text> }>
    </FlatList>
   </View>
  );
}
const styles = StyleSheet.create({
    container:{

    }
})