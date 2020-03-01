import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Page extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> test dzialania </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
	container: {
color:"#fff"
    },
  
});