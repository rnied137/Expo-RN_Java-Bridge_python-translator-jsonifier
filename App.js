import React from "react";
import { StyleSheet } from "react-native";
import { AppLoading } from "expo";
import { Container, Text, Root } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Navigator from './routes/MainStack';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      // <Root style={styles.container}>
      //	<MainPage  />
      //</Root>
     
    <Container>

<Text>Dupa</Text>
      <Navigator />
      </Container>
     

    );
  }
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "blue"
  },
  containerHeader: {
    marginTop: 40,
    flex: 0.1,
    justifyContent: "space-between"
  },
  containeryellow: {
    backgroundColor: "yellow",
    flex: 0.3
  },
  halfScreen: {
    flex: 0.9,
  }
});
