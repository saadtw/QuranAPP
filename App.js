import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import HeaderBox from './components/HeaderBox';
import SurahList from './components/SurahList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderBox />
        <SurahList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
});

export default App;
