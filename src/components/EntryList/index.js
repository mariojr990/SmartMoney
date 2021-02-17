import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import EntryListItem from './EntryListItem/index'

import {getEntries} from '../../services/Entries'

export default function EntryList() {

  [entries, setEntries] = useState([])

  useEffect(() => {

    async function loadEntries(){
      const data = await getEntries();
      setEntries(data)
    }
    loadEntries();

    console.log('EntryList :: useEffect')
  }, [])


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