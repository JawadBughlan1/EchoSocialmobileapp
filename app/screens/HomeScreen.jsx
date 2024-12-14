import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const HomeScreen = () => {
  // Example static data - replace with your actual data source
  const posts = [
    {
      id: "1",
      username: "user1",
      userAvatar: "https://via.placeholder.com/150",
      image: "https://via.placeholder.com/400",
      likes: 100,
      caption: "Beautiful day!",
    },
  ];

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={{ uri: item.userAvatar }} style={styles.avatar} />
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <Image source={{ uri: item.image }} style={styles.postImage} />
      <View style={styles.postFooter}>
        <Text style={styles.likes}>{item.likes} likes</Text>
        <Text style={styles.caption}>{item.caption}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPost}
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
  postContainer: {
    marginBottom: 15,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 400,
  },
  postFooter: {
    padding: 10,
  },
  likes: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  caption: {
    color: "#333",
  },
});

export default HomeScreen;
