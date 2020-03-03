import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {Container, Card, CardItem, Badge} from 'native-base'
import MyToolbar from '../Components/MyToolbar';
import Json from '../Components/Result';



export default class SettingsAndApp extends Component {
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

<TouchableOpacity onPress={this.SetRandomState} style={styles.textNodeCss}>
    <Container style={styles.wrapper}>
                        

        <Card><Text>Polish:</Text>
        <Badge style={{ backgroundColor: 'blue' }}><Text>1</Text></Badge>
            <CardItem style={styles.singleCard}>
            <Text  style={styles.myfont}> 
            {this.state.polish}
                </Text>
            </CardItem>
        </Card>
        <Card><Text>English:</Text>
        <Badge style={{ backgroundColor: 'yellow' }}><Text>2</Text></Badge>
            <CardItem style={styles.singleCard}>
            <Text  style={styles.myfont}> 
            {this.state.english}
                </Text>
            </CardItem>
        </Card>
        <Card><Text>French:</Text>
        <Badge style={{ backgroundColor: 'green' }}><Text>3</Text></Badge>
            <CardItem style={styles.singleCard}>
            <Text  style={styles.myfont}> 
            {this.state.french}
                </Text>
            </CardItem>
        </Card>
        <Card><Text>German:</Text>
        <Badge><Text>4</Text></Badge>
            <CardItem style={styles.singleCard}>
            <Text style={styles.myfont}> 
            {this.state.german}
                </Text>
            </CardItem>
        </Card>
    
        </Container>
           </TouchableOpacity>
       )
    }
}


const styles = StyleSheet.create({
	container: {
 
    }
});