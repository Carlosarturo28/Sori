import Onboarding from "react-native-onboarding-swiper";
import { Text, TouchableOpacity } from "react-native";
import { Image, Title, TitleContainer, Subtitle } from "./style";
import { useNavigation } from "@react-navigation/native";
import { ob1, ob2, ob3, ob4 } from "../../assets";
import { setItemToLocal, AppleAuth } from "../../utils";

const Done = ({ isLight, ...props }) => (
  <TouchableOpacity
    style={{
      marginRight: 20,
    }}
    {...props}
  >
    <Text style={{ fontFamily: "Montserrat", fontSize: 16, color: "#3a433f" }}>
      No, gracias
    </Text>
  </TouchableOpacity>
);

const OnboardingScreen = () => {
  const navigation = useNavigation();
  return (
    <Onboarding
      transitionAnimationDuration={200}
      skipToPage={3}
      DoneButtonComponent={Done}
      skipLabel={<Text style={{ fontFamily: "Montserrat" }}>Saltar</Text>}
      nextLabel={<Text style={{ fontFamily: "Montserrat" }}>Siguiente</Text>}
      onDone={async () => {
        await setItemToLocal("firstTime", "false");
        navigation.reset({
          index: 0,
          routes: [{ name: "TabNavigator" }],
        });
      }}
      pages={[
        {
          backgroundColor: "#0765A7",
          image: <Image source={ob1} />,
          title: (
            <TitleContainer>
              <Title>Aprende</Title>
              <Subtitle>
                Sobre crianza positiva y ponla en práctica con tus hijos.
              </Subtitle>
            </TitleContainer>
          ),
          subtitle: "",
        },
        {
          backgroundColor: "#F9BF3C",
          image: <Image source={ob2} />,
          title: (
            <TitleContainer>
              <Title>Reconoce</Title>
              <Subtitle>
                Comportamientos y obtén herramientas para afrontarlos.
              </Subtitle>
            </TitleContainer>
          ),
          subtitle: "",
        },
        {
          backgroundColor: "#3AA075",
          image: <Image source={ob3} />,
          title: (
            <TitleContainer>
              <Title>Juega</Title>
              <Subtitle>
                Con las actividades pensadas para el día a día de tus hijos.
              </Subtitle>
            </TitleContainer>
          ),
          subtitle: "",
        },
        {
          backgroundColor: "white",
          image: <Image source={ob4} />,
          title: (
            <TitleContainer>
              <Title isCentered={true}>Para una experiencia más completa</Title>
              <AppleAuth navigation={navigation} />
            </TitleContainer>
          ),
          subtitle: "",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
