import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

const width = Dimensions.get("window").width;

const isSmallScreen = width < 376;

export const StyledTouchableOpacity = styled(TouchableOpacity)`
  background-color: ${(props) => (props.color ? props.color : "#0765A7")};
  padding: ${isSmallScreen ? "14px" : "18px"};
  border-radius: 12px;
  margin: 14px 0;
  width: ${isSmallScreen ? "68%" : "70%"};
  align-items: center;
`;

export const Title = styled.Text`
  color: white;
  font-family: "FrauncesBold";
  text-align: center;
  font-size: 24px;
`;

export const Subtitle = styled.Text`
  color: white;
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  margin-top: 8px;
  font-family: "Montserrat";
`;

export const StyledImage = styled.Image`
  margin-top: -40px;
  width: ${isSmallScreen ? "50px" : "70px"};
  height: ${isSmallScreen ? "50px" : "70px"};
`;
