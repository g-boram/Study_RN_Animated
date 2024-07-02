import React, {useRef} from 'react';
import {Animated, Button, Easing, Text, View} from 'react-native';

// y축 -100 ---> 100으로 이동하는 spring 애니메이션
export default function AnimatedSpring() {
  const translateYAnim = useRef(new Animated.Value(-100)).current;

  const onPressButton = () => {
    translateYAnim.setValue(-100);

    Animated.spring(translateYAnim, {
      toValue: 100,
      // 옵션은 한번에 사용하지 않고 정해진 그룹별로 사용해야 한다.

      // Group1.
      // bounciness: 20,    : 탄력제어
      // speed: 12,         : 속도

      // Group2.
      // friction: 2,       : 에너지를 소비 (값이 높을수록 많이 소비되는 느낌)
      // tension: 40,       : 스프링이 얼마나 많은 에너지를 가졌는가

      // Group3.
      stiffness: 100, // : 스프링의 강도
      damping: 2, // : 마찰력
      mass: 5, // : 용수철 끝에 매달려있는 물체의 질량

      velocity: 10, // 스프링이 부착된 물체의 초기속도
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <Animated.Text
        style={{fontSize: 70, transform: [{translateY: translateYAnim}]}}>
        🖤
      </Animated.Text>
      <Button title="스프링으로 움직이기!" onPress={onPressButton} />
    </View>
  );
}
