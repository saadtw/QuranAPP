import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useFetchSurahs, useFetchAyahs } from '../hooks/hooks';

const SurahList = () => {
  const { surahs, loading: loadingSurahs } = useFetchSurahs();
  const { quranData, loading: loadingAyahs } = useFetchAyahs();
  const [expandedSurah, setExpandedSurah] = useState(null);

  if (loadingSurahs || loadingAyahs) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const renderAyahs = (ayahs) => {
    return ayahs.map((ayah) => (
      <View key={ayah.numberInSurah} style={styles.ayahContainer}>
        <Text style={styles.ayahNumber}>{ayah.numberInSurah}</Text>
        <Text style={styles.ayahText}>{ayah.text}</Text>
      </View>
    ));
  };

  const handlePress = (surah) => {
    if (expandedSurah === surah.number) {
      setExpandedSurah(null); // Collapse the expanded Surah
    } else {
      setExpandedSurah(surah.number); // Expand the clicked Surah
    }
  };

  const renderItem = ({ item }) => {
    const isExpanded = expandedSurah === item.number;
    const surahAyahs = quranData.surahs?.find(s => s.number === item.number)?.ayahs || [];

    return (
      <View>
        <TouchableOpacity onPress={() => handlePress(item)} style={styles.surahContainer}>
          <Text style={styles.surahNumber}>{item.number}</Text>
          <View>
            <Text style={styles.surahName}>{item.englishName}</Text>
            <Text>{item.numberOfAyahs} Verses • {item.revelationType}</Text>
          </View>
        </TouchableOpacity>
        {isExpanded && (
          <View style={styles.ayahListContainer}>
            {renderAyahs(surahAyahs)}
          </View>
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={surahs}
      renderItem={renderItem}
      keyExtractor={(item) => item.number.toString()}
    />
  );
};

const styles = StyleSheet.create({
    surahContainer: {
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center', // Align items vertically in the center
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    surahNumber: {
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 16, // Add some space between the number and the text
    },
    surahName: {
      fontSize: 16,
      fontWeight: '600',
    },
    ayahListContainer: {
      padding: 16,
      backgroundColor: '#f9f9f9',
    },
    ayahContainer: {
      marginBottom: 8,
    },
    ayahNumber: {
      fontWeight: 'bold',
    },
    ayahText: {
      fontSize: 16,
    }
  });
  

export default SurahList;
