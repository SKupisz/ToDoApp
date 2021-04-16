import React, {useState, useEffect} from 'react';
import { Button } from 'react-native';
import { Platform, StatusBar, StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';
import DialogAndroid from 'react-native-dialogs';
import prompt from "react-native-prompt-android";

export default function App() {

  const [toDoList,setToDoList] = useState([]);
  const [currentNewTask, setNewTask] = useState('');
  const alertName = "New task", alertContent = "Tap the name of the new task below";
  
  let renderOfTheTasks;

  React.useEffect(() => {
    renderOfTheTasks = toDoList.map(text => <Text key = {text}>{text}</Text>)
    console.log(renderOfTheTasks);
  },[]);

  const askForTheNewTask = () => {
    let operand = toDoList;
    operand.push(currentNewTask);
    setToDoList(operand);
    console.log(toDoList);
  };


  return (
    <SafeAreaView style={styles.container}>
      <TextInput onChangeText = {text => setNewTask(text)} style = {styles.input} />
      <Button title = "New task" onPress = {() => {askForTheNewTask();}}/>
      {renderOfTheTasks}
      <StatusBar style="auto" />
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
    margin: 12,
    width: 200,
    borderWidth: 1
  }
});
