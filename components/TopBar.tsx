import { StyleSheet, Text, View } from 'react-native';

export default function TopBar() {
    const a:String = "as";
    return (
      <View style={styles.container}>
        <Text>상단 바</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#67de5d',
      justifyContent: 'center',
    },
  });