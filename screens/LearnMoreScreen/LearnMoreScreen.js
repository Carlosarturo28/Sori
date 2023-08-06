import React from "react";
import { Container } from "./style";
import { GeneralHeader } from "../../components/GeneralHeader";
import { ArticlesList } from "../../components/ArticlesList";

const LearnMoreScreen = ({ route }) => {
  const { postType } = route.params;
  return (
    <Container>
      <GeneralHeader title="Aprende más" />
      <ArticlesList postType={postType} />
    </Container>
  );
};

export default LearnMoreScreen;
