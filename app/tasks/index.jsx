import { FlatList, StyleSheet, Text, View } from "react-native";
import TaskCard from "../../components/TaskCard";
import { IconPlus } from "../../components/Icons";
import Button from "../../components/Button";
import { useState } from "react";
import { useRouter } from "expo-router";
import useTaskContext from "../../hooks/useTaskContext";

export default function Tasks() {
  const { navigate } = useRouter();
  const { tasks, deleteTasks, toggleTaskCompleted } = useTaskContext();
  return (
    <View style={styles.container}>
      {
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskCard
              completed={item.completed}
              text={item.description}
              onPressDelet={() => deleteTasks(item.id)}
              setToogleCompleted={() => toggleTaskCompleted(item.id)}
              onPressEdit={() => navigate(`/edit-task/${item.id}`)}
            />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          ListHeaderComponent={
            <Text style={styles.h1Page}>Lista de Tarefas:</Text>
          }
          ListFooterComponent={
            <View style={{ marginTop: 30 }}>
              <Button
                icon={<IconPlus />}
                text={"Adicionar nova tarefa"}
                onPress={() => navigate("/add-task")}
              />
            </View>
          }
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  h1Page: {
    color: "#fff",
    fontSize: 26,
    textAlign: "center",
    marginBottom: 30,
  },
});
