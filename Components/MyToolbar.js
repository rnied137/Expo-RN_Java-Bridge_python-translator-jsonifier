import React, {useContext} from "react";
import { StyleSheet} from "react-native";
import { Container, Header, Button, Text } from "native-base";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import AntDesigIcon from "react-native-vector-icons/AntDesign";
import LanguageContext from '../context/LanguageContext';


const arrowIcon = <AwesomeIcon name="rocket" size={30} color="white" />;
const arrowrightIcon = (
  <AntDesigIcon name="arrowright" size={30} color="#fff" />
);

const context = LanguageContext;
const MyToolbar = (navigate) => {

const language = useContext(LanguageContext);



  return (
    <Container style={styles.container}>
      <Container style={styles.bodyStyle}>
        <Header>
          <Button>{arrowIcon}</Button>
          <Button onPress={()=>navigate.navigate.navigate("MainSettings") }>
  <Text>{language.languages.l1}</Text>
          </Button>
          <Button>{arrowrightIcon}</Button>
          <Button >
            <Text>{language.languages.l2}</Text>
          </Button>
        </Header>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "space-between"
  },
  rowContainer: {
    flexDirection: "row",
    alignContent: "space-around"
  },
  leftStyle: {
    flex: 0.4
  },
  rightStyle: {
    flex: 0.4
  },
  bodyStyle: {
    justifyContent: "center",
    flexDirection: "row",
    alignContent: "center"
  }
});

export default MyToolbar;
