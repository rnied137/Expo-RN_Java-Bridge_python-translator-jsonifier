import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class SingleQuote extends Component {
    render() {
        return (
            <View>
                <Text> {this.props.language1}</Text>
                <Text>{this.props.language2}</Text>
                <Text>{this.props.children}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      height:'100%',
      width:"100%",
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      color:'black'
    }
});