import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../styles/Colors';

import useBalance from '../../hooks/useBalance'

const BalanceLabel = () => {
  const [balance] = useBalance()

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>

      <LinearGradient
        style={styles.panel}
        colors={[Colors.violet, Colors.blue]}>
        <Text style={styles.value}>{balance}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20
  },
  label: {
    fontSize: 12,
    color: Colors.white,
  },
  panel: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
    minWidth: 120
  },
  value: {
    fontSize: 28,
    color: Colors.white,
  },
});

export default BalanceLabel;
