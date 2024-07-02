import React, {useEffect, useRef} from 'react';
import {Animated, Button} from 'react-native';

// setValue();              강제로 value값을 넣어준다.
// addListner(callback);    실시간으로 value를 확인할수 있는 함수. 잘 동작하는지 테스트하기좋음. 다른 이벤트들과 함께 사용하면 좋은 시너지가 될수있다.
// removeAllListner();      Listner들을 삭제하는 함수, 사용하지않으면 메모리 누수가 있을 수 있기에 사용해준다.
// stopAnimation();         애니메이션을 멈추는 함수
// resetAnimation();        애니메이션을 멈추고 초기값으로 돌아가는 함수
// setOffset();             value에 추가된 값을 설정할 수 있는 기능
// flattenOffset();
// extractOffset();

// 왼(-100) ---> 오(100) x값이 변화하는 애니메이션
export default function AnimatedValue() {
  const translateXAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    return () => translateXAnim.removeAllListeners();
  });

  const onPressButton = () => {
    translateXAnim.setValue(-100);
    translateXAnim.addListener(({value}) => console.log(value));

    setTimeout(() => {
      // translateXAnim.stopAnimation();
      translateXAnim.resetAnimation();
    }, 500);

    Animated.timing(translateXAnim, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Animated.Text
        style={{fontSize: 70, transform: [{translateX: translateXAnim}]}}>
        🖤
      </Animated.Text>
      <Button title="움직여라! setValue" onPress={onPressButton} />
    </>
  );
}
