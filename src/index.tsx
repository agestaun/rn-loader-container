import React, { ReactNode, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

type Props = {
  children: ReactNode;
  total?: number;
  opacity?: number;
  duration?: number;
};

const DEFAULT_OPACITY = 0.5;
const DEFAULT_DURATION = 700;

const LoaderContainer = ({
  children,
  total,
  opacity = DEFAULT_OPACITY,
  duration = DEFAULT_DURATION,
}: Props) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: opacity,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim, opacity, duration]);

  const getItems = () => {
    if (total) {
      const items = [];

      for (let i = 0; i < total; i++) {
        items.push(children);
      }
      return items.map((item) => item);
    } else {
      return children;
    }
  };

  return (
    <Animated.View style={{ opacity: fadeAnim }}>{getItems()}</Animated.View>
  );
};

export default LoaderContainer;
