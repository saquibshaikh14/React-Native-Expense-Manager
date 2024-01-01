import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

interface SearchableInputProps {
  dataSet: string[];
}

const SearchableInput: React.FC<SearchableInputProps> = ({ dataSet }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredData, setFilteredData] = useState<string[]>([]);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    // Perform filtering based on the dataset and search term
    const filteredItems = dataSet.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  const renderListItem = ({ item }: { item: string }) => (
    <View style={styles.listItem}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={searchTerm}
        onChangeText={handleSearch}
      />
      {searchTerm.length > 0 && (
        <FlatList
          data={filteredData}
          renderItem={renderListItem}
          keyExtractor={(item) => item.toString()}
          style={styles.suggestions}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  suggestions: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  listItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SearchableInput;
