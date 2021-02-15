    import React from 'react';
    import { View, StyleSheet, FlatList, Text } from 'react-native';

    export default function EntrySummaryList({entriesGrouped}) {
    return (
    <View style={styles.container}>

    <Text style={{fontSize: 22,
        fontWeight: 'bold',marginBottom: 10,marginTop: 10}}>Categorias</Text>
        <FlatList 
            data={entriesGrouped}
        renderItem={ ({item}) => <Text>{item.description} - ${item.amount}</Text> }>
        </FlatList>
    </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
           // flex: 1
        }
    })  