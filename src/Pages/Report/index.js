import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker'

import BalanceLabel from '../../components/BalanceLabel/index'
import EntrySummary from '../../components/EntrySummary/index'
import EntryList from '../../components/EntryList/index'

export default function Report() {
    const currentBalance= 2064.35

    const entriesGrouped =[
        
        {key: '1', description: "Alimentação", amount: 201},
        {key: '2', description: "Combustivel", amount: 12},
        {key: '3', description: "Aluguel", amount: 120},
        {key: '4', description: "Lazer", amount: 250},
        {key: '5', description: "Outros", amount: 1200}
];

const entries = [
    
        {key: '1', description: "Padaria Asa Branca", amount:10},
        {key: '2', description: "SuperMercado Isabora", amount: 190},
        {key: '3', description: "Posto Ipiranga", amount: 290},
];

 return (
   <View>
       <BalanceLabel currentBalance={currentBalance}/>
       <View>
           <Picker>
                <Picker.Item label="Todas Categorias"></Picker.Item>
           </Picker>
           <Picker>
               <Picker.Item label="Últimos 7 dias"></Picker.Item>
           </Picker>
       </View>
       <EntrySummary entriesGrouped={entriesGrouped}/>
       <EntryList entries={entries}/>
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