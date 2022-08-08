/** @format */

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import theme from "../../globalStyles/theme";

export const Home = () => {
  const navigation = useNavigation();

  const showPagina2 = () => {
    navigation.navigate("Pagina2");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindos à Gebitech</Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={showPagina2}>
        <Text style={styles.buttonText}>Ir para Página 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    color: theme.color.primary,
    fontWeight: "bold",
    marginVertical: 15,
  },
  button: {
    backgroundColor: theme.color.primary,
    width: "100%",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: theme.color.light,
    fontSize: 18,
  },
});
