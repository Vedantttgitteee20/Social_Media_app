import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Messages() {
  return (
    <View style={Messagesstyles.container}>
      <Text>Messages </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Messagesstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
