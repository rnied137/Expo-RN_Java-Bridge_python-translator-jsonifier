import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {Container, Card, CardItem, Badge} from 'native-base'
import MyToolbar from '../Components/MyToolbar';
import Json from '../Components/Result';
import AntDesigIcon from "react-native-vector-icons/AntDesign";

const doubleRightIcon = <AntDesigIcon name="doubleright" size={50} color="#0074D9" />;
const doubleLeftIcon = <AntDesigIcon name="doubleleft" size={50} color="#0074D9" />;
const playIcon = <AntDesigIcon name="playcircleo" size={50} color="#0074D9" />;


const doubleRightIconLower = <AntDesigIcon name="doubleright" size={50} color="##DDDDDD" />;
const doubleLeftIconLower = <AntDesigIcon name="doubleleft" size={50} color="##DDDDDD" />;
const playIconLower = <AntDesigIcon name="playcircleo" size={50} color="##DDDDDD" />;


export default class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
polish: '',
english: '',
french: '',
german: ''
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
        })
    }
    
    render() {
    return (


   
    <Container>
<Container style={styles.upper}>
<Container style={styles.fifth}></Container>


<Container style={styles.oneFifth}>
{doubleLeftIcon}
{playIcon}
{doubleRightIcon}
</Container>

</Container>

<Container style={styles.lower}>
<Container style={styles.fifth}></Container>


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
        borderBottomWidth:2,
    },
    lower: {
        backgroundColor:"#01FF70",
        borderWidth:1.5,
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

    }
});