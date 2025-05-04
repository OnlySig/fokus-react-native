import "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TasksProvider } from "../context/TaskProvider";

export default function RootLayout() {
  const { navigate } = useRouter();
  return (
    <TasksProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <Drawer
            screenOptions={{
              headerStyle: {
                backgroundColor: "#021123",
              },
              headerTintColor: "#fff",
              drawerStyle: {
                backgroundColor: "#021123",
              },
              drawerLabelStyle: {
                color: "#fff",
              },
            }}
          >
            <Drawer.Screen
              name="index"
              options={{
                headerShown: false,
                drawerItemStyle: {
                  display: "none",
                },
              }}
            />
            <Drawer.Screen
              name="add-task/index"
              options={{
                drawerItemStyle: {
                  display: "none",
                },
                title: "",
                headerLeft: () => {
                  return (
                    <Ionicons
                      name="arrow-back"
                      size={24}
                      color={"#fff"}
                      style={{ marginLeft: 16 }}
                      onPress={() => navigate("/tasks")}
                    />
                  );
                },
              }}
            />
            <Drawer.Screen
              name="pomodoro"
              options={{
                drawerLabel: "Timer",
                title: "", //? header do drawer vazio, gambiarra da poxa kkkk
              }}
            />
            <Drawer.Screen
              name="tasks/index"
              options={{
                drawerLabel: "Lista de tarefas",
                title: "",
              }}
            />
          </Drawer>
        </SafeAreaView>
      </GestureHandlerRootView>
    </TasksProvider>
  );
}
