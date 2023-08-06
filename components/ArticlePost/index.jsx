import { Container, ScrollContainer } from "./style";
import React, { useState } from "react";
import { Content } from "./Content";

export const ArticleSkeleton = ({ data }) => {
  const [borderRadius, setBorderRadius] = useState(24);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const decreasingValue = Math.floor(offsetY / 5); // Adjust the value to your preference

    setBorderRadius((prevNumber) => {
      const newValue = prevNumber - decreasingValue;
      return newValue < 0 ? 0 : newValue > 24 ? 24 : newValue;
    });
  };

  return (
    <Container onScroll={handleScroll} scrollEventThrottle={24}>
      <ScrollContainer style={{ flex: 1 }} borderRadius={borderRadius}>
        <Content data={data} />
      </ScrollContainer>
    </Container>
  );
};
