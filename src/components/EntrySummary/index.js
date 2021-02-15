import React from 'react';
import { StyleSheet, View } from 'react-native';

import EntrySummaryChart from './EntrySummaryChart/index'
import EntrySummaryList from './EntrySummaryList/index'

export default function EntrySummary({entriesGrouped}) {
 return (
   <View style={styles.container}>
       <EntrySummaryChart/>
       <EntrySummaryList entriesGrouped={entriesGrouped}/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
  // flex: 1
  }
})