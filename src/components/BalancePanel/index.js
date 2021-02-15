import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

import BalancePanelLabel from './BalancePanelLabel/index'
import BalancePanelChart from './BalancePanelChart/index'

export default function BalancePanel({currentBalance}) {
 return  (
  <View style={styles.container}>
    <BalancePanelLabel currentBalance={currentBalance}/>
    <BalancePanelChart />
  </View>
);
};

const styles = StyleSheet.create({
container: {
  // flex: 1,
}
});