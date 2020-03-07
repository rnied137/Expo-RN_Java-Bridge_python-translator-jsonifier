import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {Container, Card, CardItem, Badge} from 'native-base'
import MyToolbar from '../Components/MyToolbar';
import Json from '../Components/Result';
import AntDesigIcon from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const doubleRightIcon = <SimpleLineIcons name="arrow-right" size={50} color="#0074D9" />;
const doubleLeftIcon = <SimpleLineIcons name="arrow-left" size={50} color="#0074D9" />;
const playIcon = <SimpleLineIcons name="volume-2" size={50} color="#0074D9" />;


const doubleRightIconLower = <SimpleLineIcons name="arrow-right" size={50} color="##DDDDDD" />;
const doubleLeftIconLower = <SimpleLineIcons name="arrow-left" size={50} color="##DDDDDD" />;
const playIconLower = <SimpleLineIcons name="volume-2" size={50} color="##DDDDDD" />;


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


   
    <Container>
<Container press={this.SetRandomState} style={styles.upper}>
<Container style={styles.fifth}>
    <Text> #{this.state.number}</Text>
<Text style={styles.decoratedText}>{this.state.english}</Text>
</Container>
</Container>

<Container style={styles.lower}>
<Container style={styles.fifth}>
<Text> #{this.state.number}</Text>
<Text style={styles.decoratedText}>{this.state.german}</Text>

</Container>


<Container style={styles.oneFifth}>
    <TouchableOpacity>
    {doubleLeftIconLower}
    </TouchableOpacity>

    <TouchableOpacity>
    {playIconLower}
    </TouchableOpacity>

    <TouchableOpacity>
    {doubleRightIconLower}
    </TouchableOpacity>




</Container>
</Container>

    </Container>
       )
    }
}


const styles = StyleSheet.create({  
    upper: {
        backgroundColor:"#001f3f",
    },
    lower: {
        backgroundColor:"#01FF70",
    },
    oneFifth: {
        flex:2,
        flexDirection:"row",
        alignContent:"center",
        justifyContent:"space-around",
        backgroundColor:"#3D9970",
        alignItems:"center",

    },
    fifth: {
        flex:5,
        backgroundColor:"#01FF70",
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",

       
    



    },
    decoratedText:{
        fontSize:25,
        color:"#fff",


    },
});