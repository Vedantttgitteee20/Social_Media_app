import { StyleSheet, Text, View } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <Entypo name="camera" size={24} color="black" />
      </View>
      <Text style={styles.headerText}>HomeHeader</Text>
      <View style={styles.iconsContainer}>
        <Ionicons name="notifications" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width:'100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconsContainer: {
    height:34,
    width:34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 3,
    backgroundColor: '#E6EEFA',

  },
  headerText: {
    //fontFamily: 'Poppins', // Use the name of your imported font
    fontWeight: '600', // This should be a string, not a number
    fontSize: 17,
    lineHeight: 22,
  }
});
