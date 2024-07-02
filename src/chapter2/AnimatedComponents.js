import React, {useRef} from 'react';
import {Animated, Text, Button} from 'react-native';

// opacity 1 ---> 0 timing animation
export default function AnimatedComponents() {
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const onPressOpacity0 = () => {
    Animated.timing(opacityAnim, {
      toValue: 0,
      useNativeDriver: true,
      // react-native Animate는 js로 작동하고 setNativeProps라는 자체 함수를 이용해서 브릿지를 통해
      // native쪽으로 Animate value를 전달하는데 원활하게 전달되지 않을 때가 있다.
      // useNativeDriver: true로 해두면 애니메이션이 시작하기전에 관련 value를 미리 전송해두기에
      // 브릿지를 통하지 않고 실핼하게 되어 부하를 줄이고 안정적으로 사용할 수 있다.
    }).start();
  };

  const onPressOpacity1 = () => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Animated.Text style={{fontSize: 70, opacity: opacityAnim}}>
        🖤
      </Animated.Text>
      <Button title="사라져라!" onPress={onPressOpacity0} />
      <Button title="나타나라!" onPress={onPressOpacity1} />
    </>
  );
}
