import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Notification() {
  return (
    <View style={Notificationstyles.container}>
      <Text>Notification </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Notificationstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
