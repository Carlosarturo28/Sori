import React, { useRef } from "react";
import { StyledTouchableOpacity, StyledImage, Title, Subtitle } from "./style";
import { Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Button = ({
  onPress,
  to,
  color,
  title,
  subtitle,
  iconPath,
  id,
  postType,
  ...props
}) => {
  const animatedValue = useRef(new Animated.Value(1)).current;

  const navigation = useNavigation();

  const goTo = (destination, postType) => {
    navigation.navigate(destination, { postType: postType });
  };

  const goToDetails = (destination, id, postType) => {
    navigation.navigate(destination, { id: id, postType: postType });
  };

  const handlePressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 10,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <StyledTouchableOpacity
      {...props}
      onPress={() => (id ? goToDetails(to, id, postType) : goTo(to, postType))}
      style={{ transform: [{ scale: animatedValue }] }}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
      color={color}
    >
      <StyledImage source={iconPath} />
      <Title>{title}</Title>
      <Subtitle style={{ fontWeight: "bold" }}>{subtitle}</Subtitle>
    </StyledTouchableOpacity>
  );
};

export default Button;
