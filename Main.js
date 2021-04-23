import React from "react";
import {ScrollView, View, TextInput,Button,StatusBar, Text, Vibration, Pressable} from "react-native";

export default class Main extends React.Component{
    constructor(props){
        super(props);

        this.inputRef = React.createRef();

        this.state = {
            currentNewTask: "",
            toDoList: [],
            ifVibrate: true
        };

        this.setNewTask = this.setNewTask.bind(this);
        this.getRidOfATask = this.getRidOfATask.bind(this);
        this.changeTheRigntone = this.changeTheRigntone.bind(this);
    }

    setNewTask(text){
        this.setState({
            currentNewTask: text
        }, () => {});
    }
    askForTheNewTask(){
        let operand = this.state.toDoList;
        operand.push(this.state.currentNewTask);
        if(this.state.ifVibrate === true){
            Vibration.vibrate(500);
        }
        this.setState({
            toDoList: operand,
            currentNewTask: ""
        }, () => {this.inputRef.current.clear();});
    }
    getRidOfATask(index){
        let operand = this.state.toDoList;
        operand = operand.filter(function(value, ind){
            return ind !== index;
        });
        this.setState({
            toDoList: operand
        }, () => {if(this.state.ifVibrate === true){Vibration.vibrate(700);}});
    }
    changeTheRigntone(){
        this.setState({
            ifVibrate: !this.state.ifVibrate
        }, () => {});
    }

    render(){
        return  <ScrollView>
                <Pressable style = {this.props.styles["vibrationButton"]} onPress = {() => {this.changeTheRigntone()}}>
                    <Text>{this.state.ifVibrate ? "🔈" : "🔇"}</Text>
                </Pressable>
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
        </ScrollView>;
    }
}