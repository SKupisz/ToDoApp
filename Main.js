import React from "react";
import {View, TextInput,Button,StatusBar, Text} from "react-native";

export default class Main extends React.Component{
    constructor(props){
        super(props);

        this.inputRef = React.createRef();

        this.state = {
            currentNewTask: "",
            toDoList: []
        };

        this.setNewTask = this.setNewTask.bind(this);
    }

    setNewTask(text){
        this.setState({
            currentNewTask: text
        }, () => {});
    }
    askForTheNewTask(){
        let operand = this.state.toDoList;
        operand.push(this.state.currentNewTask);
        this.setState({
            toDoList: operand,
            currentNewTask: ""
        }, () => {this.inputRef.current.clear();});
    }

    render(){
        return  <View>
                 <TextInput onChangeText = {text => this.setNewTask(text)} style = {this.props.styles.input} ref = {this.inputRef} />
        <Button title = "New task" onPress = {() => {this.askForTheNewTask();}} style = {this.props.styles.button}/>
        {this.state.toDoList.map((text,index) => <Text key = {"text"+index} style = {this.props.styles.text}>{text}</Text>)}
        <StatusBar style="auto" />
        </View>;
    }
}