import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>WhatsApp</Text>
        <View style={styles.iconContainer}>
            <Feather name="search" size={20} color="white" />
            <Feather name="more-vertical" size={20} color="white" />
            </View>
    </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#055652',
      paddingTop: 80,
      paddingBottom: 8,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 16,
    },
    headerText: {
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon:{
        marginLeft: 10,
    },

  });