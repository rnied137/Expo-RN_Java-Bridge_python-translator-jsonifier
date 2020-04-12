import React from 'react'
import { View, Text, Button} from 'react-native'

import {Picker} from '@react-native-community/picker';

import {useSelector, useDispatch, useState} from 'react-redux';

import {setLanguage1, setLanguage2} from '../redux/actions';

import germanyIcon from '../images/german.png';
import frenchIcon from '../images/french.png';
import polishIcon from '../images/polish.png';
import englishIcon from '../images/english.png';


import { Card } from 'react-native-elements'



const TestComponent2 = () => {
    
const language1 = useSelector(state=>state.lang1);
const language2 = useSelector(state=>state.lang2);
const dispatch = useDispatch();

const [pickVal1,setPickVal1] = React.useState(language1);
const [pickVal2,setPickVal2] = React.useState(language2);
const [iconLan1, setIconLan1] = React.useState('../images/'+language1+'.png');
const [iconLan2, setIconLan2] = React.useState(language2+"Icon");

const setLanguage1Function=(itemValue)=>{

   // setPickerValue1(itemValue);
    dispatch(setLanguage1(itemValue));
    setPickVal1(itemValue);
    setIconLan1('../images/'+itemValue+'.png');
    console.log(iconLan1);
}


const setLanguage2Function=(itemValue)=>{

    // setPickerValue1(itemValue);
     dispatch(setLanguage2(itemValue));
     setPickVal2(itemValue);
     setIconLan2(itemValue +"Icon");

 }

 const returnFlag=(language)=>{

    switch(language){
        case('german'):
        return require('../images/german.png');
        break;
        case('polish'):
        return require('../images/polish.png');
        break;
        case('french'):
        return require('../images/french.png');
        break;
        case('english'):
        return require('../images/english.png');
        break;

    }
    
 }

    return (
        <View>
            <Text>Language1:</Text>
            <Card title={language1}
                  image={returnFlag(language1)}
                  />
                <Text>{iconLan1}</Text>
                <Text>Language2:</Text>
            <Card title={language2}
                  image={returnFlag(language2)} />
 

      <Picker
  selectedValue={pickVal1}
  style={{height: 50, width: 200}}
  onValueChange={(itemValue,itemIndex)=>setLanguage1Function(itemValue)
  }>
  <Picker.Item label="German" value="german" />
  <Picker.Item label="Polish" value="polish" />
  <Picker.Item label="French" value="french" />
  <Picker.Item label="English" value="english" />
</Picker>


<Picker
  selectedValue={pickVal2}
  style={{height: 50, width: 200}}
  onValueChange={(itemValue,itemIndex)=>setLanguage2Function(itemValue)
  }>
  <Picker.Item label="German" value="german" />
  <Picker.Item label="Polish" value="polish" />
  <Picker.Item label="French" value="french" />
  <Picker.Item label="English" value="english" />
</Picker>

      <Text>Language 2: {language2}</Text>

       
        </View>
    )
}

export default TestComponent2
