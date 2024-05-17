import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { MaterialCommunityIcons } from "react-native-vector-icons";
  
  import DATA from "../Data/chatdata";
  
  const Chat = () => {
    const [chatData, setChatData] = useState(DATA);
    useEffect(() => {
      setChatData(DATA);
    }, []);
  
    return (
      <View style={styles.container}>
        <FlatList
          data={chatData}
          keyExtractor={(item) => {
            item.id.toString();
          }}
          renderItem={({ item }) => (
            <View style={styles.chatContainer}>
              <Image source={item.photos} style={styles.image} />
              <View style={styles.chatContent}>
                <View style={styles.chatHeader}>
                  <Text style={styles.chatName}>{item.name}</Text>
                  <Text style={styles.chatTime}>{item.time}</Text>
                </View>
                <View style={styles.messages}>
                  <Text numberOfLines={1} style={styles.chatMessage}>
                    {item.lastMessage}
                  </Text>
                  {item.totalUnread && (
                    <View style={styles.unreadContainer}>
                      <Text style={styles.totalUnread}>{item.totalUnread}</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          )}
        />
        <TouchableOpacity style={styles.chatButton} onPress={() => "#"}>
          <MaterialCommunityIcons
            name="android-messages"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Chat;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 16,
    },
    chatContainer: {
      flexDirection: "row",
      marginLeft: 16,
      marginRight: 16,
    },
    image: {
      width: 50,
      height: 50,
      backgroundColor: "#128c7e",
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
    },
    chatContent: {
      flex: 5,
      borderBottomWidth: 0,
      marginLeft: 16,
      paddingBottom: 16,
      marginBottom: 15,
    },
    chatHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 2,
      marginTop: 4,
    },
    chatName: {
      fontSize: 16,
      fontWeight: "bold",
    },
    chatTime: {
      fontSize: 12,
      color: "#a0a09e",
    },
    messages: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    chatMessage: {
      fontSize: 14,
      color: "#a0a09e",
      width: "90%",
    },
    unreadContainer: {
      height: 20,
      width: 25,
      borderRadius: 25,
      backgroundColor: "#25d366",
      alignItems: "center",
      justifyContent: "center",
    },
    totalUnread: {
      fontSize: 10,
      fontWeight: "600",
      color: "#fff",
    },
    chatButton: {
      position: "absolute",
      bottom: 30,
      right: 20,
      backgroundColor: "#0e806a",
      height: 60,
      width: 60,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30,
    },
  });