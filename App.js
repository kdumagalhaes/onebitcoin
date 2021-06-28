import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

//components
import CurrentPrice from './src/components/CurrentPrice/CurrentPrice'
import HistoryGraphic from './src/components/HistoryGraphic/HistoryGraphic'
import QuotationList from './src/components/QuotationList/QuotationList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar backgroundColor="#f50d41" barStyle="light-content" />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0
  },
});
