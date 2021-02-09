import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import BalancePanel from '../../components/BalancePanel/index'
import EntrySummary from '../../components/EntrySummary/index'
import EntryList from '../../components/EntryList/index';

export default function Main() {
 return (
     <View style={styles.container}>
         <BalancePanel/>
         <EntrySummary/>
         <EntryList/>
     </View>
  );
}

const styles=StyleSheet.create({
    container:{
        //flex: 1,
    },

})