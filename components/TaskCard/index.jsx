import { Pressable, StyleSheet, Text, View } from "react-native";
import { IconCheck, IconDelete, IconEdit } from "../Icons";

const TaskCard = ({
  completed,
  setToogleCompleted,
  text,
  onPressEdit,
  onPressDelet,
}) => {
  return (
    <View
      style={
        completed
          ? [styles.container, styles.containerCompleted]
          : styles.container
      }
    >
      <View style={styles.contentLeftSide}>
        <Pressable onPress={setToogleCompleted}>
          <IconCheck isChecked={!!completed} />
        </Pressable>
        <Text style={styles.taskTxt}>{text}</Text>
      </View>
      <View style={styles.contentActions}>
        <Pressable onPress={onPressEdit}>
          <IconEdit />
        </Pressable>
        <Pressable onPress={onPressDelet}>
          <IconDelete />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#98A0A8",
    paddingHorizontal: 8,
    borderRadius: 8,
    height: 64,
  },
  containerCompleted: {
    backgroundColor: "#0F725C",
  },
  contentLeftSide: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  taskTxt: {
    fontWeight: "600",
    fontSize: 16,
    color: "#021123",
  },
  contentActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});

export default TaskCard;
