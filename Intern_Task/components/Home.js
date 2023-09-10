import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Stories from './Home/Story';

export default function Home() {
  return (
    <View style={Homestyles.container}>
        <Stories />
    </View>
  );
}

const Homestyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  storySection: {

  }
});
