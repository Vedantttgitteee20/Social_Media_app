import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Asset } from 'expo-asset';
const postsData = [
  {
    id: '1',
    username: 'Balanchaev',
    email: '@balancha20',
    imageUrl: Asset.fromModule(require('../../assets/stories/vedant.jpeg')).uri,
    caption: 'A beautiful sunset view. 🌅',
  },
  {
    id: '2',
    username: 'user2',
    email: '@balancha20',
    imageUrl: Asset.fromModule(require('../../assets/stories/dummy.jpeg')).uri,
    caption: 'Exploring new places! 🌍',
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
          <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
          {/* <Text style={styles.caption}>{post.caption}</Text> */}
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
    borderRadius: 40,
    marginTop: 8,
    marginBottom: 8,
  },
  caption: {
    fontSize: 14,
  },
});

export default Posts;
