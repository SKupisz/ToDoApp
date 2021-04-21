import React, {useState, useEffect} from 'react';
import { Button } from 'react-native';
import { Platform, StatusBar, StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';
import Main from "./Main.js";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Main styles = {styles}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  input: {
    height: 40,
    margin: 16,
    borderWidth: 1,
    width: 300
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
  }
});
