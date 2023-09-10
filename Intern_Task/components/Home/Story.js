import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Asset } from 'expo-asset';
const storiesData = [
    {
      id: '1',
      username: 'You',
      imageUrl: Asset.fromModule(require('../../assets/stories/vedant.jpeg')).uri,
    },
    {
      id: '2',
      username: 'Atul',
      imageUrl: Asset.fromModule(require('../../assets/stories/dummy.jpeg')).uri,
    },
    // Add more stories here
  ];
  

const Stories = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const handleStoryChange = (index) => {
    setActiveStoryIndex(index);
  };

  return (
    <View style={Storystyles.container}>
      <FlatList
        data={storiesData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={Storystyles.storyItem}
            onPress={() => handleStoryChange(index)}
          >
            <Image source={{ uri: item.imageUrl }} style={[Storystyles.storyImage, index === activeStoryIndex && Storystyles.activeStoryItem]} />
            <Text style={Storystyles.username}>{item.username}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const Storystyles = StyleSheet.create({
  container: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  storyItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  activeStoryItem: {
    borderColor: '#e91e63',
    borderWidth: 2,
    borderRadius: 50,
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  username: {
    marginTop: 5,
  },
});

export default Stories;
