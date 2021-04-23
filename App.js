import React, {useState, useEffect} from 'react';
import { Button } from 'react-native';
import { Platform, StatusBar, StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";
import Main from "./Main.js";

export default function App() {

  const {landscape} = useDeviceOrientation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    input: {
      height: 40,
      margin: 16,
      borderWidth: 1,
      width: landscape ? "60%" : "70%",
      marginLeft: "auto",
      marginRight: "auto"
    },
    button: {
      marginBottom: 24,
      fontSize: 15,
      width: 100,
      marginLeft: "auto",
      marginRight: "auto"
    }, 
    smallButtonContainer: {
      width: "20%",
      marginTop: 7,
      marginBottom: 7
    },
    smallButton: {
      fontSize: 14
    }, 
    text: {
      textAlign: "center",
      fontSize: 14,
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 7,
      width: "60%",
      marginRight: 7,
      padding: 7
    },
    thingContainer: {
      flexDirection: "row",
      marginLeft: "auto",
      marginRight: "auto"
    },
    vibrationButton: {
      padding: 19,
      backgroundColor: "dodgerblue",
      fontSize: 19,
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: 20,
      borderRadius: 50,
      color: "white"
    }
  });
  return (
    <SafeAreaView style={styles.container}>
      <Main styles = {styles}/>
    </SafeAreaView>
  );
}
