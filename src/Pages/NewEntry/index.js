import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import BalanceLabel from '../../components/BalanceLabel/index'

export default function NewEntry() {
 return (
   <View style={styles.container}>
       <BalanceLabel/>
       <View>
       <TextInput style={styles.input}/>
       <TextInput style={styles.input}/>
       <Button title="Camera"/>
       <Button title="GPS"/>
       </View>

       <View>
           <Button title="Add"/>
           <Button title="Cancelar"/> 
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        //flex: 1,
        padding: 10
    },
    input: {
        borderColor: '#000',
        borderWidth: 1,
        
    }
})