import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <View style={Profilestyles.container}>
      <Text>Profile</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Profilestyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
