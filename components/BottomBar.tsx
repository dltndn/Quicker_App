import { StyleSheet, Text, View } from 'react-native';

export default function BottomBar() {
    const a:String = "as";
    return (
      <View style={styles.container}>
        <Text>하단 바</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#589ec4',
      justifyContent: 'center',
    },
  });