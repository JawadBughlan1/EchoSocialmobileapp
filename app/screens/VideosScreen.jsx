import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
// import { Video } from "expo-av";

const VideoScreen = () => {
  const videos = []; // Add your video data here

  const renderVideo = ({ item }) => (
    <View style={styles.videoContainer}>
      {/* <Video
        source={{ uri: item.videoUrl }}
        style={styles.video}
        useNativeControls
        resizeMode="cover"
      /> */}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderVideo}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  videoContainer: {
    height: "100%",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});

export default VideoScreen;
