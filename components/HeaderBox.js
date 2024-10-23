import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderBox = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.welcomeText}>Assalamu Alaikum</Text>
      <Text style={styles.nameText}>Muhammad Saad Ali</Text>
      <View style={styles.lastReadContainer}>
        <Text style={styles.lastReadText}>Last Read</Text>
        <Text style={styles.surahName}>Al-Fatiah</Text>
        <Text style={styles.ayahNo}>Ayah No: 1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#D6B9FF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  lastReadContainer: {
    marginTop: 16,
  },
  lastReadText: {
    fontSize: 16,
  },
  surahName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ayahNo: {
    fontSize: 16,
  },
});

export default HeaderBox;
