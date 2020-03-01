import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Quotes extends Component {
    render() {
        return (
            <View>
              <Text onClick={this.showRandom}style={styles.text}>    </Text>
    <Text style={styles.language}>{this.state.english}</Text> 
     <Text style={styles.language}>{this.state.french}</Text>
     <Text style={styles.language}>{this.state.polish}</Text> 
      <Text style={styles.language}>{this.state.german}</Text>
     <Button onClick={this.showRandom}style={styles.button} title="Next!"> </Button>
            </View>
        )
    }
}
