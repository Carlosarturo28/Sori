import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AppleAuthentication from "expo-apple-authentication";
import axiosInstance from "./axios";

export const addToLocalStorage = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};

export const addToBookmark = async (id) => {
  let added = false;
  try {
    // Retrieve the existing array from AsyncStorage
    const existingData = await AsyncStorage.getItem("bookmarks");
    let parsedData = existingData ? JSON.parse(existingData) : [];

    // Check if the newString is already in the array
    const index = parsedData.indexOf(id);
    if (index !== -1) {
      // If it's in the array, remove it
      parsedData.splice(index, 1);
      added = false;
      console.log("String removed from the array.");
    } else {
      // If it's not in the array, add it

      added = true;
      parsedData.push(id);
      console.log("String added to the array.");
    }

    // Save the updated array back to AsyncStorage
    const dataToSave = JSON.stringify(parsedData);
    await AsyncStorage.setItem("bookmarks", dataToSave);
    console.log("Array saved successfully!");
    return added;
  } catch (error) {
    console.error("Error adding/removing string from the array:", error);
  }
};

const isStringInArray = (array, searchString) => {
  return array.includes(searchString);
};

export const checkIfArticleIsBookmarked = async (searchString) => {
  try {
    // Retrieve the existing array from AsyncStorage
    const existingData = await AsyncStorage.getItem("bookmarks");
    let parsedData = [];
    if (existingData !== null) {
      parsedData = JSON.parse(existingData);
    }

    // Check if the searchString is already in the array
    const isStringPresent = isStringInArray(parsedData, searchString);
    // Return the result
    return isStringPresent;
  } catch (error) {
    console.error("Error checking if string exists in the array:", error);
    return false;
  }
};

export const getItemFromLocal = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      // Parse the data from JSON to an array
      const parsedData = JSON.parse(data);
      return parsedData;
    } else {
      console.log("Array not found in AsyncStorage.");
      return [];
    }
  } catch (error) {
    console.error("Error retrieving array from AsyncStorage:", error);
    return [];
  }
};

export const setItemToLocal = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error("Error setting item in local db:", err);
  }
};

export const splitStringsByFirstHyphen = (arr) => {
  return arr.map((s) => s.split(".", 2));
};

const getUser = async (appleId) => {
  try {
    const user = await axiosInstance.get(
      `api/users?filters[appleId][$eq]=${appleId}`
    );
    return user.data.length > 0 ? user.data[0] : false;
  } catch (error) {
    console.error("Error retrieving user:", error);
  }
};

const setUser = async (appleId, username) => {
  try {
    await AsyncStorage.setItem(
      "user",
      JSON.stringify({
        id: appleId,
        username: username,
      })
    );
  } catch (err) {
    console.error("Error creating user in local db:", err);
  }
};

export const validateUser = async (appleUser) => {
  try {
    const userIsInDb = await getUser(appleUser?.user);
    if (userIsInDb) {
      setItemToLocal("firstTime", "false");
      setUser(appleUser.user, userIsInDb.username);

      return true;
    } else {
      const response = await axiosInstance.post("api/users", {
        username: appleUser?.fullName?.givenName,
        email: appleUser?.email,
        password: appleUser?.user,
        appleId: appleUser?.user,
        role: {
          connect: [{ id: 1 }],
        },
      });
      if (response.data) {
        setItemToLocal("firstTime", "false");
        await setUser(appleUser.user, response.data.username);
        return true;
      }
    }
  } catch (error) {
    console.error("Error validating user:", error);
  }
};

export const AppleAuth = ({ navigation }) => (
  <AppleAuthentication.AppleAuthenticationButton
    buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
    buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
    cornerRadius={5}
    style={{
      marginTop: 16,
      width: "100%",
      height: 50,
    }}
    onPress={async () => {
      try {
        const credential = await AppleAuthentication.signInAsync({
          requestedScopes: [
            AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
            AppleAuthentication.AppleAuthenticationScope.EMAIL,
          ],
        });
        const isAuthenticated = await validateUser(credential);
        if (isAuthenticated) {
          navigation.reset({
            index: 0,
            routes: [{ name: "TabNavigator" }],
          });
        }
      } catch (e) {
        if (e.code === "ERR_REQUEST_CANCELED") {
          // handle that the user canceled the sign-in flow
        } else {
          // handle other errors
        }
      }
    }}
  />
);

export const colors = [
  { strong: "#91AF5F", middle: "#E7F5DF", light: "#FAFFEF" },
  { strong: "#AF5F5F", middle: "#F5DFDF", light: "#FFEFEF" },
  { strong: "#5FAFA5", middle: "#DFF5F4", light: "#EFFFFC" },
  { strong: "#615FAF", middle: "#DFDFF5", light: "#F0EFFF" },
  { strong: "#ADAF5F", middle: "#F5F5DF", light: "#FFFEEF" },
  { strong: "#A95FAF", middle: "#F3DFF5", light: "#FBEFFF" },
];

export const quotes = [
  "La crianza es un desafío constante que nos enseña a ser más pacientes y comprensivos.",
  "Cada niño es único, y lo que funciona con uno puede no funcionar con otro.",
  "Los momentos más difíciles en la crianza también pueden ser los más gratificantes.",
  "No hay una fórmula perfecta para ser padres, todos aprendemos sobre la marcha.",
  "Los padres también pueden aprender valiosas lecciones de sus hijos.",
  "La crianza implica tomar decisiones difíciles y confiar en nuestro instinto parental.",
  "Es normal sentirse agotado o abrumado, todos los padres pasan por momentos así.",
  "El tiempo de calidad con los hijos es más importante que la cantidad de tiempo.",
  "Los niños aprenden más a través de nuestras acciones que de nuestras palabras.",
  "La empatía y el amor incondicional son fundamentales para una crianza positiva.",
  "Los límites claros y consistentes brindan seguridad y estructura a los niños.",
  "El autocuidado de los padres es esencial para poder cuidar bien de los hijos.",
  "El juego es una herramienta poderosa para el aprendizaje y la conexión con los niños.",
  "La crianza también implica aprender a dejar ir gradualmente a medida que los hijos crecen.",
  "Los momentos más preciosos en la crianza son aquellos que compartimos en familia.",
  "Los padres pueden cometer errores, pero pedir disculpas y corregirlos es valioso para los niños.",
];
