import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, StatusBar } from 'react-native';

//components
import CurrentPrice from './src/components/CurrentPrice/CurrentPrice'
import HistoryGraphic from './src/components/HistoryGraphic/HistoryGraphic'
import QuotationList from './src/components/QuotationList/QuotationList'
import QuotationItems from './src/components/QuotationList/QuotationItems/QuotationItems'

const addZero = number => {
  if (number <= 9) {
    return '0' + number
  } else {
    return number
  }
}

const url = qtdDays => {
  const date = new Date()
  const listLastDays = qtdDays
  const end_date = `${date.getFullYear()} - ${addZero(date.getMonth() + 1)} - ${addZero(date.getDay())}}`
  date.setDate(date.getDate() - listLastDays)
  const start_date = `${date.getFullYear()} - ${addZero(date.getMonth() + 1)} - ${addZero(date.getDay())}}`

  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`
}

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar backgroundColor="#f50d41" barStyle="light-content" />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationList />
      <QuotationItems />
    </SafeAreaView>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0
  },
});
