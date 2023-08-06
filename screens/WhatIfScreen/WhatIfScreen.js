import React from "react";
import { Container } from "./style";
import { GeneralHeader } from "../../components/GeneralHeader";
import { ArticlesList } from "../../components/ArticlesList";

const WhatIfScreen = ({ route }) => {
  const { postType } = route.params;
  return (
    <Container>
      <GeneralHeader title="Qué hacer sí..." />
      <ArticlesList postType={postType} />
    </Container>
  );
};

export default WhatIfScreen;
