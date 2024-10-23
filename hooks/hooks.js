import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useFetchSurahs = () => {
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedSurahs = await AsyncStorage.getItem('surahs');
        if (cachedSurahs !== null) {
          setSurahs(JSON.parse(cachedSurahs));
          setLoading(false);
        } else {
          const response = await fetch('https://api.alquran.cloud/v1/surah');
          const json = await response.json();
          setSurahs(json.data);
          await AsyncStorage.setItem('surahs', JSON.stringify(json.data)); // Cache the data
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { surahs, loading };
};

export const useFetchAyahs = () => {
  const [quranData, setQuranData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedQuran = await AsyncStorage.getItem('quranData');
        if (cachedQuran !== null) {
          setQuranData(JSON.parse(cachedQuran));
          setLoading(false);
        } else {
          const response = await fetch('https://api.alquran.cloud/v1/quran/en.asad');
          const json = await response.json();
          setQuranData(json.data);
          await AsyncStorage.setItem('quranData', JSON.stringify(json.data)); // Cache the data
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { quranData, loading };
};
