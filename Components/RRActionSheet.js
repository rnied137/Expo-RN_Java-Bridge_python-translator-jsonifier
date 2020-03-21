import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Button} from 'native-base';
var BUTTONS = [
    { text: "Polish", icon: "american-football", iconColor: "#2c8ef4" },
    { text: "English", icon: "analytics", iconColor: "#f42ced" },
    { text: "French", icon: "aperture", iconColor: "#ea943b" },
    { text: "German", icon: "aperture", iconColor: "#fa213b" },
    { text: "Cancel", icon: "close", iconColor: "#25de5b" }
  ];
  
  var CANCEL_INDEX = 4;
export class RRActionSheet extends Component {
    render() {
        return (
            <View>
                <Button
        title="Przycisk"
          onPress={() =>
          ActionSheet.show(
            {
              options: BUTTONS,
              cancelButtonIndex: CANCEL_INDEX,
              title: "Choose language",
            },
            buttonIndex => {
              console.log(BUTTONS[buttonIndex].text);
             ActionSheet.hide();
            }
          )}
        >
          <Text>{this.props.lang1}</Text>
        </Button>
            </View>
        )
    }
}

export default RRActionSheet
