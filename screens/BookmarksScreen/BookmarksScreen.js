import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerList,
  LoadingContainer,
  Image,
  EmptyState,
  Title,
  Subtitle,
} from "./style";
import { GeneralHeader } from "../../components/GeneralHeader";
import { getItemFromLocal, splitStringsByFirstHyphen } from "../../utils";
import axiosInstance from "../../axios";
import { ArticleCard } from "../../components/ArticleCard";
import { ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";
import { emptyState } from "../../assets";

const BookmarksScreen = () => {
  const isFocused = useIsFocused();
  const [data, setData] = useState(null);
  const [localBookmarks, setLocalBookmarks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();

    if (isFocused) {
      setLoading(true);
      fetchData();
    }
  }, [isFocused]);

  const fetchData = async () => {
    const bookmarks = await getItemFromLocal("bookmarks");

    if (JSON.stringify(bookmarks) === JSON.stringify(localBookmarks)) {
      setLoading(false);
      return;
    }

    setLocalBookmarks(bookmarks);

    const dataSplitted = splitStringsByFirstHyphen(bookmarks);
    let dataArray = [];
    dataSplitted.forEach(async (element, index) => {
      try {
        const response = await axiosInstance.get(
          `api/${element[1]}/${element[0]}?populate=author&populate=cover`
        );

        response.data.data["postType"] = element[1];
        dataArray.push(response.data.data);

        if (index === dataSplitted.length - 1) {
          setData(dataArray);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    });

    if (dataSplitted.length === 0) {
      setLoading(false);
      setData(null);
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
      {!data && (
        <EmptyState>
          <Title>Vacío, muy vacío...</Title>
          <Subtitle>Guarda aquí los artículos que quieras</Subtitle>
          <Image source={emptyState} />
        </EmptyState>
      )}
      <GeneralHeader isMain title="Bookmarks" />
      <ContainerList
        data={data}
        renderItem={({ item }) => (
          <ArticleCard
            screenName="Bookmarks Details"
            postType={item.postType}
            item={item}
          />
        )}
        keyExtractor={(item) => `${item.id}${item.postType}`}
      />
      <StatusBar />
    </Container>
  );
};

export default BookmarksScreen;
