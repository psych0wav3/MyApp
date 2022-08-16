import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Routes} from './src/routes/index.routes';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <Routes />
    </SafeAreaView>
  );
};

export default App;
