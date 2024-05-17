import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { FontAwesome5 } from "react-native-vector-icons";
  
  import STATUSDATA from "../Data/statusdata";
  
  const Status = () => {
    const [statusData, setStatusData] = useState(STATUSDATA);
  
    useEffect(() => {
      setStatusData(STATUSDATA);
    }, []);
  
    const combinedStatusData = [
      {
        title: "Recent updates",
        data: statusData.filter((item) => item.viewed === false),
      },
      {
        title: "Viewed updates",
        data: statusData.filter((item) => item.viewed === true),
      },
    ];
    return (
      <View style={styles.container}>
        <View style={styles.myStatusContainer}>
          <View>
            <Image
              source={require("../../assets/male-1.jpg")}
              style={styles.image}
            />
          </View>
          <View>
            <Text style={styles.myStatusHeading}>My status</Text>
            <Text style={styles.myStatusSubtext}>Tap to add status</Text>
          </View>
        </View>
        <FlatList
          data={combinedStatusData}
          keyExtractor={(item, index) => {
            index.toString();
          }}
          renderItem={({ item }) => (
            <>
              <Text style={styles.viewdStatus}>{item.title}</Text>
              <FlatList
                data={item.data}
                keyExtractor={(item) => {
                  item.id.toString();
                }}
                renderItem={({ item }) => (
                  <View style={styles.viewedStatusContainer}>
                    <View>
                      <Image source={item.photos} style={styles.image} />
                    </View>
                    <View>
                      <Text style={styles.myStatusHeading}>{item.name}</Text>
                      <Text style={styles.myStatusSubtext}>{item.time}</Text>
                    </View>
                  </View>
                )}
              />
            </>
          )}
        />
        <TouchableOpacity style={styles.writeButton} onPress={() => "#"}>
          <FontAwesome5
            name="pen"
            size={18}
            color="grey"
            // sty/le={styles.a}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraButton} onPress={() => "#"}>
          <FontAwesome5
            name="camera"
            size={20}
            color="white"
            // style={styles.a}
          />
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Status;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    myStatusContainer: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 16,
    },
    myStatusHeading: {
      fontSize: 16,
      fontWeight: "600",
    },
    myStatusSubtext: {
      fontSize: 14,
      color: "grey",
    },
    viewdStatus: {
      fontSize: 14,
      fontWeight: "600",
      color: "grey",
      marginBottom: 5,
      marginTop: 5,
      marginLeft: 16,
    },
    viewedStatusContainer: {
      flexDirection: "row",
      alignItems: "center",
      padding: 12,
    },
    writeButton: {
      position: "absolute",
      bottom: 100,
      right: 28,
      backgroundColor: "#e8e8e8",
      width: 50,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
    },
    cameraButton: {
      position: "absolute",
      bottom: 30,
      right: 20,
      backgroundColor: "#0e806a",
      width: 60,
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30,
    },
  });