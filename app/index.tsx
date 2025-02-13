import { Text, View, StyleSheet } from "react-native";
import TicTacToe from "./TicTacToe";

export default function Index() {
  return (
    <View style={styles.container}
    >
      <TicTacToe />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }, 
  });