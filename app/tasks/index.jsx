import { StyleSheet, Text, View } from "react-native";
import TaskCard from "../../components/TaskCard";
import { IconPlus } from "../../components/Icons";
import Button from "../../components/Button";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Tasks() {
  const { navigate } = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.h1Page}>Lista de Tarefas:</Text>
      <View style={styles.taskContent}>
        <TaskCard text={"task de teste kkkkkkkkkkk"} />
        <TaskCard text={"task de completa"} completed={true} />
      </View>
      <Button
        icon={<IconPlus />}
        text={"Adicionar nova tarefa"}
        onPress={() => navigate("/add-task")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    backgroundColor: "#021123",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  h1Page: {
    color: "#fff",
    fontSize: 26,
    textAlign: "center",
  },
  taskContent: {
    gap: 8,
  },
});
