import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Asset } from 'expo-asset';
import { AntDesign, Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';
const postsData = [
  {
    id: '1',
    username: 'Balanchaev',
    email: '@balancha20',
    imageUrl: Asset.fromModule(require('../../assets/stories/vedant.jpeg')).uri,
    caption: 'A beautiful sunset view. 🌅',
    likes: '12k',
    options:'12',
  },
  {
    id: '2',
    username: 'user2',
    email: '@balancha20',
    imageUrl: Asset.fromModule(require('../../assets/stories/dummy.jpeg')).uri,
    caption: 'Exploring new places! 🌍',
    likes: '24k',
    options:'14',
  },
  // Add more posts here
];

const Posts = () => {
  return (
    <View style={styles.container}>
      {postsData.map((post) => (
        <View key={post.id} style={styles.post}>
            <View style={styles.userInfo}>
                <Image source={{ uri: post.imageUrl }} style={styles.postProfileImage} />
                <View style={styles.userInfoText}>
                    <Text style={styles.username}>{post.username}</Text>
                    <Text style={styles.email}>{post.email}</Text>
                </View>
            </View>
          <ImageBackground source={{ uri: post.imageUrl }} style={styles.postImage}>
              <View style={styles.overlayStrip}>
                <View style={styles.box1}>
                  <TouchableOpacity style={styles.optionButton}>
                    <Entypo name="dots-three-horizontal" size={24} color="#DADADA" />
                    <Text style={styles.optionButtonText}>{post.options}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.optionButton}>
                    <AntDesign name="heart" size={30} color="#DADADA" />
                    <Text style={styles.likeButtonText}>{post.likes}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.box1}>
                  <TouchableOpacity style={styles.optionButton}>
                    <Ionicons name="ios-paper-plane" size={30} color="#DADADA" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.optionButton}>
                    <FontAwesome name="bookmark" size={30} color="#DADADA" />
                  </TouchableOpacity>
                </View>
              </View>
          </ImageBackground>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    marginBottom:30,
  },
  post: {
    marginBottom: 20,
    backgroundColor: '#BDD5E7',
    padding: 5,
    borderRadius: 40,
    
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  username: {
    fontSize: 14,
  },
  userInfo: {
    flexDirection: 'row',
    marginTop: 10,
  },
  userInfoText: {
    justifyContent: 'center',
    marginLeft: 5,
  },
  postProfileImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 35,
    marginLeft: 10,
    // marginTop: 8,
    // marginBottom: 8,
  },
  postImage: {
    width: '100%',
    height: 270,
    resizeMode: 'cover',
    borderRadius: 30,
    marginTop: 8,
    marginBottom: 8,
    overflow: 'hidden',
  },
  overlayStrip: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the opacity and color as needed
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  box1:{
    flexDirection: 'row',
  },
  optionButton: {
    flexDirection:'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  optionButtonText: {
    color: "#DADADA",
    //fontFamily: 'Poppins', // Use the name of your imported font
    fontWeight: '600', // This should be a string, not a number
    fontSize: 13,
    lineHeight: 22,
    marginLeft:5,
  },
  likeButtonText: {
    color: "#DADADA",
    //fontFamily: 'Poppins', // Use the name of your imported font
    fontWeight: '600', // This should be a string, not a number
    fontSize: 13,
    lineHeight: 22,
    marginLeft:5,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  caption: {
    fontSize: 14,
  },
});

export default Posts;
