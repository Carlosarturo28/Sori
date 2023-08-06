import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { ArticleCard } from "../ArticleCard";
import { ActivityIndicator, View } from "react-native";
import axiosInstance from "../../axios";

export const ArticlesList = ({ postType }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`api/${postType}/`);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Container
      data={data}
      renderItem={({ item }) => <ArticleCard postType={postType} item={item} />}
      keyExtractor={(item) => item.id}
    ></Container>
  );
};
