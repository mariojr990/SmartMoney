import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import BalanceLabel from '../../components/BalanceLabel/index'
import {saveEntry} from '../../services/Entries';

export default function NewEntry({navigation}) {

    const currentBalance= 2065.34
    const [amount, setAmount] = useState('0');

     const save = () =>{

        const value = {
            amount: parseFloat(amount)
        }

         console.log("NewEntry :: save", value)
         saveEntry(value)
     }
    
 return (
   <View style={styles.container}>
       <BalanceLabel currentBalance={currentBalance}/>
       <View>
       <TextInput style={styles.input}
       onChangeText={ text => setAmount(text)}
       value={amount}
       />
       <TextInput style={styles.input}/>
       <Button title="Camera"/>
       <Button title="GPS"/>
       </View>

       <View>
           <Button title="Adicionar" onPress={save} />
           <Button title="Cancelar" onPress={() => navigation.goBack()}/> 
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