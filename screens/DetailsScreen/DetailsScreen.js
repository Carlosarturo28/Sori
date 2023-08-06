import React, { useState, useEffect } from "react";
import { ArticleHeader } from "../../components/ArticleHeader";
import { Container, BottomWhite, LoadingContainer } from "./style";
import { ArticleSkeleton } from "../../components/ArticlePost";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";
import axiosInstance from "../../axios";

function DetailsScreen({ route }) {
  const { id, postType } = route.params;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(
        `api/${postType}/${id}?populate=author&populate=cover`
      );
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#FFF" />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <BottomWhite />
      <ArticleHeader id={`${id}.${postType}`} />
      <ArticleSkeleton data={data.attributes} />

      <StatusBar style="light" />
    </Container>
  );
}

export default DetailsScreen;
