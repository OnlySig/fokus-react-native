import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import pomodoroImg from "../assets/images/pomodoro.png";
import { useState } from "react";
import HeaderPomo from "../components/headerPomo";
import Timer from "../components/Timer";
import { pomodoro } from "../utils";

export default function Index() {
  const [currentPomodoro, setCurrentPomodoro] = useState(pomodoro[0]);

  return (
    <View style={styles.container}>
      <Image source={currentPomodoro?.image || pomodoroImg} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((item, index) => (
            <HeaderPomo
              key={index}
              value={item}
              currentPomodoro={currentPomodoro}
              setCurrentPomodoro={setCurrentPomodoro}
              index={index}
            />
          ))}
        </View>
        <Timer totalSeconds={currentPomodoro?.time} />
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
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
