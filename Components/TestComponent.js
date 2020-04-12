import React from "react";
import { View, Text, Button } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import {
  getLanguage1,
  getLanguage2,
  setLanguage1,
  setLanguage2,
} from "../redux/actions";
import Json from "../Components/Results";

import {germany} from '../images/german.png';

const TestComponent = () => {
  const language1 = useSelector((state) => state.lang1);
  const language2 = useSelector((state) => state.lang2);
  const dispatch = useDispatch();

  const [german, setGerman] = React.useState(Json[5]);
  const [randomValue, setRandomValue] = React.useState(0);
const [iconLan1, setIconLan1] = React.useState('');
const [iconLan2, setIconLan2] = React.useState('');

  const setNewRandomValue=()=>{
    setRandomValue(Math.floor(Math.random() * Json.length));
  }
  const SetRandomStateLan = (language) => {
    let languageResult = "";
    switch (language) {
      case "german":
        languageResult = Json[randomValue].german;
        break;
      case "polish":
        languageResult = Json[randomValue].polish;
        break;
      case "french":
        languageResult = Json[randomValue].french;
        break;
      case "english":
        languageResult = Json[randomValue].english;
        break;
    }
    return languageResult;
  };


  return (
    <View>
     
      <Text>
        Lang1:
        {SetRandomStateLan(language1)}
      </Text>

      <Text>
          Lang2:
          {SetRandomStateLan(language2)}
          {germany}
      </Text>
      <Button title="Zmiana" onPress={setNewRandomValue}/>
    </View>
  );
};

export default TestComponent;
