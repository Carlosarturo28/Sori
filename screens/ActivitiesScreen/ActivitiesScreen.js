import React from "react";
import { Container } from "./style";
import { GeneralHeader } from "../../components/GeneralHeader";
import { ArticlesList } from "../../components/ArticlesList";

const ActivitiesScreen = ({ route }) => {
  const { postType } = route.params;
  return (
    <Container>
      <GeneralHeader title="Actividades" />
      <ArticlesList postType={postType} />
    </Container>
  );
};

export default ActivitiesScreen;
