import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import AddTask from "../add-task";

export default function EditTask() {
  const { id } = useLocalSearchParams();
  return <AddTask id={id} />;
}
