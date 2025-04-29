import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import pomodoro from "../assets/images/pomodoro.png";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={pomodoro} />
      <View style={styles.actions}>
        <Text style={styles.timer}>25:00</Text>
        <Pressable style={styles.btnComecar}>
          <Text style={styles.txtBtnComecar}>Começar</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.txtFooter}>
          Projeto fictício e sem fins comerciais. Desenvolvido por Alura e
          Gabriel C Pereira :).
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  actions: {
    gap: 32,
    padding: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    marginHorizontal: "auto",
  },
  timer: {
    fontSize: 54,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  btnComecar: {
    width: "100%",
    height: 40,
    backgroundColor: "#B872FF",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  txtBtnComecar: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#021123",
  },
  footer: {
    width: "80%",
  },
  txtFooter: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5,
  },
});
