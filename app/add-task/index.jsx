import { Ionicons } from "@expo/vector-icons";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { IconPlus } from "../../components/Icons";
import Button from "../../components/Button";
import useTaskContext from "../../hooks/useTaskContext";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function AddTask({ id }) {
  const { addTask, tasks } = useTaskContext();
  const currentTask = tasks?.find((task) => task.id === Number(id));
  const [description, setDescription] = useState(
    id ? currentTask.description : ""
  );
  const { navigate } = useRouter();
  const handleSubmit = () => {
    if (!description.trim()) return;
    if (id) {
      addTask(description, Number(id));
      navigate("/tasks");
      return;
    }
    addTask(description);
    setDescription("");
    navigate("/tasks");
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>{id ? "Editar" : "Adicionar"} tarefa:</Text>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <Text style={styles.txtContent}>
            Em que você está{"\n"}trabalhando?
          </Text>
          <TextInput
            style={styles.input}
            numberOfLines={10}
            multiline={true}
            value={description}
            onChangeText={setDescription}
          />
          <View style={styles.actions}>
            <Pressable style={styles.btnEdit} onPress={handleSubmit}>
              <Ionicons name="save" size={16} color={"#021123"} />
              <Text style={styles.btnAction}>Salvar</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Button icon={<IconPlus />} text={"Adicionar nova tarefa"} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    padding: 24,
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    color: "#fff",
    marginBottom: 20,
  },
  content: {
    gap: 32,
    backgroundColor: "#98A0A8",
    padding: 16,
    borderRadius: 8,
    marginBottom: 40,
  },
  txtContent: {
    fontSize: 18,
    fontWeight: 600,
    color: "#021123",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    height: 120,
  },
  actions: {
    alignItems: "flex-end",
  },
  btnEdit: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  btnAction: {
    color: "#021123",
    fontWeight: 700,
  },
});
