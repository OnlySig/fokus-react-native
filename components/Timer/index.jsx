import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { IconPause, IconPlay } from "../Icons";

const Timer = ({ totalSeconds }) => {
  const [timer, setTimer] = useState(totalSeconds);
  const [play, setPlay] = useState(false);
  const [recomecar, setRecomecar] = useState(false);
  useEffect(() => {
    setTimer(totalSeconds);
    setPlay(false);
  }, [totalSeconds]);
  const data = new Date(timer * 1000);
  const options = {
    minute: "2-digit",
    second: "2-digit",
  };
  useEffect(() => {
    if (play) {
      const interval = setInterval(() => {
        setTimer((prevData) => {
          if (prevData === 0) {
            setPlay(false);
            setRecomecar(true);
            return 0;
          }
          return prevData - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [play, timer]);
  const displayBtn = () => {
    if (recomecar) return "Recomeçar";
    if (play) return "Pausar";
    if (!play) return "Comecar";
  };
  return (
    <>
      <Text style={styles.timer}>
        {data.toLocaleTimeString("pt-BR", options)}
      </Text>
      <Pressable
        style={styles.btnComecar}
        onPress={() => {
          if (recomecar) {
            setRecomecar(false);
            setTimer(totalSeconds);
          }
          setPlay(!play);
        }}
      >
        <Text>
          {play ? <IconPause /> : recomecar ? <IconPlay /> : <IconPlay />}
        </Text>

        <Text style={styles.txtBtnComecar}>{displayBtn()}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
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
    flexDirection: "row",
    gap: 8,
  },
  txtBtnComecar: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#021123",
  },
});

export default Timer;
