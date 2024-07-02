import React, {useRef} from 'react';
import {Animated, Button, Easing, Text} from 'react-native';

// Easing ease / back / bounce / elastic / circle
export default function AnimatedTiming() {
  const translateXAnim = useRef(new Animated.Value(-100)).current;

  const onPressButton = () => {
    translateXAnim.setValue(-100);

    // timing 기능은 아래의 옵션이 있다.
    Animated.timing(translateXAnim, {
      toValue: 100,
      duration: 1000,
      delay: 0,
      easing: Easing.inOut(Easing.ease), // 기본값: 한결같은 속도
      // easing: Easing.inOut(Easing.back(3)),    숫자값에 따라 뒤로 당겨졌다 감 (in, out, inout)
      // easing: Easing.in(Easing.bounce),    바운스 되는 느낌  (in, out, inout)
      // easing: Easing.in(Easing.elastic(2)),   화면밖으로 나갔다 돌아옴  (in, out, inout)
      // easing: Easing.in(Easing.circle),  처음에 느리고 뒤에빨라짐  (in, out, inout)
      // 더 많은 속도는 사이트 참고하기
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Animated.Text
        style={{fontSize: 70, transform: [{translateX: translateXAnim}]}}>
        🖤
      </Animated.Text>
      <Button title="움직여라!" onPress={onPressButton} />
    </>
  );
}
