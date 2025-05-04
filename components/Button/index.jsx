import { Pressable, StyleSheet, Text, View } from "react-native";

const Button = ({ onPress, text, icon, outline = false }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.btnAddTask, outline && styles.btnAddTaskOutline]}
    >
      {icon ? (
        <View style={styles.content}>
          {icon}
          <Text
            style={[styles.txtAddTask, outline && styles.txtAddTaskOutline]}
          >
            {text}
          </Text>
        </View>
      ) : (
        <Text style={[styles.txtAddTask, outline && styles.txtAddTaskOutline]}>
          {text}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnAddTask: {
    paddingVertical: 10,
    borderRadius: 32,
    borderColor: "#B872FF",
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    gap: 8,
  },
  txtAddTask: {
    color: "#B872FF",
    fontSize: 18,
    fontWeight: "600",
  },
  btnAddTaskOutline: {
    backgroundColor: "#B872FF",
  },
  txtAddTaskOutline: {
    color: "#021123",
  },
});

export default Button;
