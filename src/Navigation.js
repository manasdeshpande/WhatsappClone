import { View, Text,StyleSheet  } from 'react-native'
import { Feather } from 'react-native-vector-icons';
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from './Screens/chat';
import Message from './Screens/message';
import Status from './Screens/status';
import Settings from './Screens/settings';
import { Icon, Badge } from 'react-native-elements';

const unreadCount = 10;
const Tab = createMaterialTopTabNavigator();
const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="chats"
      screenOptions={{
        tabBarAndroidRipple: { borderless: false },
        tabBarActiveTintColor: "white",
        tabBarIndicatorStyle: {
          backgroundColor: "white",
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: "#055652",
        },
      }}
    >
        <Tab.Screen
            name="chats"
            component={Chat}
            options={{
              tabBarLabel: ({ focused, color }) => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ color, marginRight: 4 }}>Chats</Text>
                  {unreadCount && (
                    <View style={styles.unreadContainer}>
                      <Text style={styles.totalUnread}>{unreadCount}</Text>
                    </View>
                  )}
                </View>
              ),
            }}
          />
        <Tab.Screen name="status" component={Status} />
        <Tab.Screen name="calls" component={Message} />
        
        
    </Tab.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    unreadContainer: {
        height: 18,
        width: 18,
        borderRadius: 25,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      },
      totalUnread: {
        fontSize: 9,
        fontWeight: "700",
        color: "black",
      },
  });