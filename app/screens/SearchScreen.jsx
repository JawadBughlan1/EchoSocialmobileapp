import React, { useState } from "react";
import { View, TextInput, FlatList, Image, StyleSheet } from "react-native";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    // Implement search logic here
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={searchResults}
        numColumns={3}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.thumbnail} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchInput: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
  },
  thumbnail: {
    width: "33.33%",
    aspectRatio: 1,
  },
});

export default SearchScreen;
