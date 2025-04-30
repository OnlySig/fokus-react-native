import { StyleSheet, Text } from "react-native";

const Timer = ({ totalSeconds }) => {
  const data = new Date(totalSeconds * 1000);
  const options = {
    minute: "2-digit",
    second: "2-digit",
  };
  return (
    <Text style={styles.timer}>
      {data.toLocaleTimeString("pt-BR", options)}
    </Text>
  );
};

const styles = StyleSheet.create({
  timer: {
    fontSize: 54,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});

export default Timer;
