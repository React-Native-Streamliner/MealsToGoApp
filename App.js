import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    backgroundColor: '#11EE11',
    padding: 16,
  },
  list: {
    flex: 1,
    backgroundColor: '#1e1eAA',
    alignSelf: 'stretch',
    padding: 16
  }
});
