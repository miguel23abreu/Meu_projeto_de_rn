import { StyleSheet, View } from 'react-native';
import { Login } from "./src/screens/User/Login";



export default function App() {
  return (
    <View >
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
