import { StyleSheet, Text, View } from 'react-native';
// import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBar from "./components/TopBar";
import BottomBar from './components/BottomBar';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <TopBar />
        <Text style={styles.mainPage}>main page</Text>
        <BottomBar />
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  mainPage: {
    flex: 10
  },
  safe: {
    flex:1
  }
});
