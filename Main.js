import React from "react";
import {View, TextInput,Button,StatusBar, Text, Vibration} from "react-native";

export default class Main extends React.Component{
    constructor(props){
        super(props);

        this.inputRef = React.createRef();

        this.state = {
            currentNewTask: "",
            toDoList: []
        };

        this.setNewTask = this.setNewTask.bind(this);
        this.getRidOfATask = this.getRidOfATask.bind(this);
    }

    setNewTask(text){
        this.setState({
            currentNewTask: text
        }, () => {});
    }
    askForTheNewTask(){
        let operand = this.state.toDoList;
        operand.push(this.state.currentNewTask);
        Vibration.vibrate(500);
        this.setState({
            toDoList: operand,
            currentNewTask: ""
        }, () => {this.inputRef.current.clear();});
    }
    getRidOfATask(index){
        let operand = this.state.toDoList;
        operand = operand.filter(function(value){
            return value !== operand[index];
        });
        this.setState({
            toDoList: operand
        }, () => {Vibration.vibrate(700);});
    }

    render(){
        return  <View>
                 <TextInput onChangeText = {text => this.setNewTask(text)} style = {this.props.styles["input"]} ref = {this.inputRef} />
        <View style = {this.props.styles["button"]}>
            <Button title = "New task" onPress = {() => {this.askForTheNewTask();}}/>
        </View>
        {this.state.toDoList.map((text,index) => <View key = {"nr"+index} style = {this.props.styles["thingContainer"]}>
            <Text key = {"text"+index} style = {this.props.styles["text"]}>{text}</Text>
            <View style = {this.props.styles["smallButtonContainer"]}>
                <Button title = "❌" key = {"button"+index} onPress = {() => {this.getRidOfATask(index);}} style = {this.props.styles["smallButton"]}/>
            </View>
        </View>)}
        <StatusBar style="auto" />
        </View>;
    }
}