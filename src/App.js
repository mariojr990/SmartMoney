import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

export default function smartMoney() {

  addEntry= () =>{
    alert("Adicionou")
  }

 return (
   <View style={styles.container}>
     <Text style={styles.saldoText}>Saldo Atual: R$: 2.102,45</Text>
     <Button
     title='Adicionar'
     onPress={addEntry}/>


    <Text style={{fontSize: 22,
    fontWeight: 'bold',marginBottom: 10,marginTop: 10}}>Categorias</Text>

    <FlatList 
        data={[
        {key: "Alimentação: R$200,00"},
        {key: "Combustivel: R$12,00"},
        {key: "Aluguel: R$120,00"},
        {key: "Lazer: R$250,00"},
        {key: "Outros: R$1200,00"}
      ]}
      renderItem={ ({item}) => <Text>{item.key}</Text> }>
    </FlatList>
    
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
    flex: 1,
    padding: 10
  },
  saldoText:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  }
})