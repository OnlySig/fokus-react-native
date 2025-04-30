import { Pressable, StyleSheet, Text } from "react-native";

const HeaderPomo = ({ currentPomodoro, value, setCurrentPomodoro, index }) => {
  return (
    <>
      <Pressable
        onPress={() => {
          setCurrentPomodoro(value);
        }}
        style={styles.btnContext}
      >
        <Text
          style={
            currentPomodoro?.id === index
              ? [styles.txtBtnContext, styles.txtAtivado]
              : styles.txtBtnContext
          }
        >
          {value?.display}
        </Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  btnContext: {},
  txtBtnContext: {
    color: "#fff",
    fontSize: 12.5,
    padding: 8,
  },
  txtAtivado: {
    fontWeight: "bold",
    backgroundColor: "#144480",
    borderRadius: 8,
  },
});

export default HeaderPomo;
