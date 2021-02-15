    import React from 'react';
    import { View, StyleSheet, Text } from 'react-native';

    export default function BalancePanelLabel({currentBalance}) {
    return (<View style={styles.container}>
        <Text style={styles.label}>Saldo atual</Text>
        <Text style={styles.value}>{currentBalance}</Text>
    </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
    // flex: 1,
    alignItems: 'center',
    },
    label: {
    fontSize: 18,
    },
    value: {
    fontSize: 22,
    },
    });
    
