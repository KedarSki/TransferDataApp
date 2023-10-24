import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const App = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'key',
        'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
      }
    };

    fetch('https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes', options)
      .then(response => response.json())
      .then(data => setQuote(data[0].quote))
      .catch(error => console.error(error));

  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.quoteText}>{quote}</Text>
    </View>
  );


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center,',
  },
  quoteText: {
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default App;
