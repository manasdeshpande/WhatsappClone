import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Header from './src/Header';
import Navigation from './src/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <Navigation />
        </View>
        <StatusBar backgroundColor='#055650' barStyle='light-content' />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    
  },
});
