import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker'

import EntryLabel from '../../components/BalanceLabel/index'
import EntrySummary from '../../components/EntrySummary/index'
import EntryList from '../../components/EntryList/index'

export default function Report() {
 return (
   <View>
       <EntryLabel/>
       <View>
           <Picker>
                <Picker.Item label="Todas Categorias"></Picker.Item>
           </Picker>
           <Picker>
               <Picker.Item label="Últimos 7 dias"></Picker.Item>
           </Picker>
       </View>
       <EntrySummary/>
       <EntryList/>
       <View>
           <Button title="Salvar"/>
           <Button title="Fechar"/>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        //flex: 1
    }
})