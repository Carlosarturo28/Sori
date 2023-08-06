import * as React from "react";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Button from "../BigButton";
import { lightBulb, thinkingFace, book, activities } from "../../assets";

const ScrollableMenu = () => {
  const width = Dimensions.get("window").width;

  const baseOptions = {
    vertical: false,
    width: width,
    height: width * 0.6,
  };

  const Buttons = [
    {
      to: "Details",
      postType: "articles",
      id: 1,
      title: "Consejo del día",
      iconPath: lightBulb,
      subtitle: "Te compartimos un articulo sobre crianza diariamente",
      color: "#0765A7",
    },
    {
      to: "Qué hacer sí",
      postType: "what-ifs",
      id: 1,
      title: "Qué hacer si...",
      iconPath: thinkingFace,
      subtitle: "Despeja tus dudas ante una situación desafiante",
      color: "#F15E3D",
    },
    {
      to: "Learn More",
      postType: "articles",
      id: 1,
      title: "Aprende más",
      iconPath: book,
      subtitle: "Encuentra publicaciones variadas sobre crianza",
      color: "#F9BF3C",
    },
    {
      to: "Actividades",
      postType: "activities",
      title: "Actividades",
      iconPath: activities,
      subtitle: "Encuentra actividades fáciles para realizar con tu hijo",
      color: "#3AA075",
    },
  ];

  return (
    <View>
      <Carousel
        loop
        {...baseOptions}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        autoPlay={false}
        data={Buttons}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxScrollingOffset: 150,
          parallaxAdjacentItemScale: 0.7,
        }}
        withAnimation={{
          type: "spring",
          config: {
            damping: 13,
          },
        }}
        scrollAnimationDuration={300}
        // onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Button
              to={item.to}
              postType={item.postType}
              id={item.id && item.id}
              title={item.title}
              iconPath={item.iconPath}
              subtitle={item.subtitle}
              color={item.color}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ScrollableMenu;
