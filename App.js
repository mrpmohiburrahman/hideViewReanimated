// @ts-nocheck
import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function App() {
  const toggleIsVisible = () => {
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 1000);
  };

  const [isVisible, setIsVisible] = useState(true);

  const animatedStyle = useAnimatedStyle(() => ({
    height: isVisible ? withTiming(100, 1000) : withTiming(0, 1000),
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedViewContainer, animatedStyle]}>
        <TouchableOpacity onPress={toggleIsVisible}>
          <Text style={styles.textStyle}>{`Subscribe`}</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF5E4",
    paddingTop: SCREEN_HEIGHT * 0.5,
    paddingLeft: SCREEN_WIDTH * 0.25,
    // alignItems: "center",
    // justifyContent: "center",
  },
  animatedViewContainer: {
    backgroundColor: "#F47C7C",
    height: 100,
    width: 200,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "#180A0A",
    fontSize: 20,
  },
});
