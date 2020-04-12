import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Provider} from 'react-redux';
import rootReducer from './redux/reducers'
import {createStore} from 'redux';

import TestComponent from './Components/TestComponent';
import TestComponent2 from './Components/TestComponent2';
import RRModal from './Components/RRModal';


export default function App() {

  const store = createStore(rootReducer);


  return (
    <Provider store={store}>

    <View>
      <TestComponent/>
      <TestComponent2/>
      <RRModal/>
    </View>
</Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
