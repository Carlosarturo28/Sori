import React from "react";
import { Container, QuoteText } from "./style";
import Svg, { Circle } from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import { View, TouchableOpacity, Text } from "react-native";
import { colors, quotes } from "../../utils";

const Quote = React.forwardRef((props, ref) => {
  const { selectedColor, selectedQuote, isShareable, share } = props;

  return (
    <View
      ref={ref}
      style={{
        backgroundColor: isShareable
          ? colors[selectedColor].strong
          : "transparent",
      }}
    >
      <Container
        isShareable={isShareable}
        style={{ backgroundColor: colors[selectedColor].middle }}
      >
        <View style={{ position: "absolute", top: 20, left: 40 }}>
          <Icon
            name="quote-left"
            size={60}
            color={colors[selectedColor].light}
          />
        </View>
        <Svg height="200%" width="200%" style={{ position: "absolute" }}>
          <Circle
            cx="46%"
            cy="20%"
            r="100"
            stroke={colors[selectedColor].light}
            strokeWidth="10"
            fill="transparent"
          />
          <Circle
            cx="40%"
            cy="80%"
            r="90"
            stroke={colors[selectedColor].light}
            strokeWidth="10"
            fill="transparent"
          />
        </Svg>
        <QuoteText style={{ color: colors[selectedColor].strong }}>
          {quotes[selectedQuote]}
        </QuoteText>
        {isShareable ? (
          <Text
            style={{
              color: colors[selectedColor].strong,
              fontFamily: "FrauncesBold",
              position: "absolute",
              bottom: 20,
              right: 20,
            }}
          >
            Sori - Crianza responsable
          </Text>
        ) : (
          <TouchableOpacity
            onPress={share}
            activeOpacity={0.8}
            style={{ position: "absolute", bottom: 20, right: 20 }}
          >
            <FeatherIcon
              name="share"
              size={22}
              color={colors[selectedColor].strong}
            />
          </TouchableOpacity>
        )}
      </Container>
    </View>
  );
});

export default Quote;
