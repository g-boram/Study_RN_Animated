import React from 'react';
import {SafeAreaView} from 'react-native';

// import AnimatedComponents from './src/chapter2/AnimatedComponents';
// import AnimatedValue from './src/chapter2/AnimatedValue';
import AnimatedTiming from './src/chapter2/AnimatedTiming';
import AnimatedSpring from './src/chapter2/AnimatedSpring';

function App() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* opacity 1 ---> 0 */}
      {/* <AnimatedComponents /> */}

      {/* 왼(-100) ---> 오(100) x값 */}
      {/* <AnimatedValue /> */}

      {/* Easing */}
      {/* <AnimatedTiming /> */}

      <AnimatedSpring />
    </SafeAreaView>
  );
}

export default App;
