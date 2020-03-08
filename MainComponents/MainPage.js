import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {Container, Card, CardItem, Badge} from 'native-base'
import MyToolbar from '../Components/MyToolbar';
import Json from '../Components/Result';
import AntDesigIcon from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const doubleRightIcon = <SimpleLineIcons name="arrow-right" size={50} color="white" />;
const doubleLeftIcon = <SimpleLineIcons name="arrow-left" size={50} color="white" />;
const playIcon = <SimpleLineIcons name="volume-2" size={50} color="white" />;


const doubleRightIconLower = <SimpleLineIcons name="arrow-right" size={50} color="white" />;
const doubleLeftIconLower = <SimpleLineIcons name="arrow-left" size={50} color="white" />;
const playIconLower = <SimpleLineIcons name="volume-2" size={50} color="white" />;


export default class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
polish: '',
english: '',
french: '',
german: '',
number:0
        }             
    }

    componentDidMount=()=> {
        this.SetRandomState();
    }

    SetRandomState=()=> {
        let rand = Math.floor(Math.random() * Json.length);
        this.setState({
            polish: Json[rand].polish,
            german: Json[rand].german,
            french: Json[rand].french,
            english: Json[rand].english,
            number:rand,
        })
    }
    
    render() {
    return (


   
    <Container style={styles.main}>
<Container press={this.SetRandomState} style={styles.upper}>
    <Container style={styles.stickyNote}>
     
  
  
<Container style={styles.fifth}>
    <Text> #{this.state.number}</Text>
<Text style={styles.decoratedText}>{this.state.english}</Text>
</Container>
</Container>

<Container style={styles.lower}>
<Container style={styles.stickyNote}>
<Container style={styles.fifth}>
<Text> #{this.state.number}</Text>
<Text style={styles.decoratedText}>{this.state.german}</Text>

</Container>
</Container>
</Container>


<Container style={styles.Icons}>
    
    <TouchableOpacity onPress={this.SetRandomState} style={{padding:"10%"}}    >
    {doubleLeftIconLower}
    </TouchableOpacity>

    <TouchableOpacity style={{padding:"10%"}}>
    {playIconLower}
    </TouchableOpacity>

    <TouchableOpacity onPress={this.SetRandomState} style={{padding:"10%"}}>
    {doubleRightIconLower}
    </TouchableOpacity>




</Container>
</Container>

    </Container>
       )
    }
}



const styles = StyleSheet.create({
    main: {
        backgroundColor:"blue",
    },
    upper: {
    },
    lower: {
        backgroundColor:"#01FF70",
    },
    Icons: {
        flex:0.4,
        flexDirection:"row",
        alignContent:"center",
        justifyContent:"space-around",
        backgroundColor:"#3D9970",
        alignItems:"center",
        

    },
    fifth: {
        flex:5,
        backgroundColor:"rgb(255, 255, 136)",
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",

       
    



    },
    decoratedText:{
        fontSize:30,
        color:"black",
        textTransform:"uppercase",


    },
    stickyNote: {
        backgroundColor: "rgba(243,245,228,0.5)",
        borderStyle: "solid",
        borderWidth:15,
        borderColor: "rgba(255,255,255,0.5)",
        borderWidth:14,
        
       
    },
});