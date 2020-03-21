import React, { useState, useContext} from 'react'
import { Container } from 'native-base'
import Toolbar from '../Components/MyToolbar'
import LanguagePage from '../MainComponents/LanguagePage';
import LanguageProvider from '../context/LanguageContext';

const AppContext = React.createContext({});

const MainPage = ({navigation}) => {
  
const [lang1, setLang1] = useState("english");
const [lang2, setLang2] = useState("german");

const store = {
  lang1: {get: lang1, set: setLang1},
  lang2: {get: lang2, set: setLang2},
};

l1="english";
l2="german";
const language = {
  languages:{
    l1,
    l2,
  }
};

const pressHandler1 =() => {
  navigation.navigate('MainSettings');
}

const pressHandler2=() => {
  navigation.navigate('MainSettings');
}

  return (
    <Container>
     {/* <AppContext.Provider value={store}> */}
     <LanguageProvider.Provider value={language}>
      <Toolbar navigate={navigation} />
      <Container>
        <Container>
          <LanguagePage />
        </Container>
        <Container>
          <LanguagePage />
        </Container>
      </Container>
      </LanguageProvider.Provider>
    {/*  </AppContext.Provider>*/}
    </Container>
  )
}

export default MainPage;
