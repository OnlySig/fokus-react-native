import { Ionicons } from "@expo/vector-icons";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

export default function AddTask() {
  return (
    <SafeAreaView>
      <Text>Adicionar tarefa:</Text>
      <View>
        <Text>Em que você está trabalhando?</Text>
        <TextInput />
        <Pressable>
          <Ionicons name="save" size={16} color={"#021123"} />
          <Text>Salvar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
