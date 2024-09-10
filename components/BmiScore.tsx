import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Text, View, StyleSheet } from 'react-native';

const BmiScore = () => {
  const bmiAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animationSequence = Animated.sequence([
      Animated.timing(bmiAnim, {
        toValue: -20,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(bmiAnim, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(bmiAnim, {
        toValue: -20,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(bmiAnim, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]);

    animationSequence.start();
  }, [bmiAnim]);

  return (
    <View style={styles.container}>
      <Animated.Text style={{ transform: [{ translateY: bmiAnim }] }}>
        🧍
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    
  },
});

export default BmiScore;
