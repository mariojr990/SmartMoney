    import React from 'react';
    import { View, StyleSheet, FlatList, Text } from 'react-native';

    export default function EntrySummaryList() {
    return (
    <View style={styles.container}>

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
    </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
           // flex: 1
        }
    })  