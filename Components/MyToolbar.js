import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text
} from "native-base";
import IonicsIcon from "react-native-vector-icons/Ionicons";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import AntDesigIcon from "react-native-vector-icons/AntDesign";

const arrowIcon = <AwesomeIcon name="rocket" size={30} color="#900" />;
const arrowrightIcon = (
  <AntDesigIcon name="arrowright" size={30} color="#fff" />
);

export default class MyToolbar extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.rowContainer}>
          <Left style={styles.leftStyle}>
            <Button transparent>{arrowIcon}</Button>
         
          </Left>
          <Body>
            <Button>
              <Text>LANG1</Text>
              {arrowrightIcon}
            </Button>
          </Body>
          <Right style={styles.rightStyle}>
          <Button transparent>
            <Text>LANG2</Text>
            </Button>
            <Button transparent>
              <Icon name="settings" />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: "row",
    alignContent: "space-around"
  },
  leftStyle: {
    flex:0.4,

  },
  rightStyle: {
    flex:0.5
  }
});
