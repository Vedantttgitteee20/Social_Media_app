import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Post() {
  return (
    <View style={Poststyles.container}>
      <Text>Post</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Poststyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
