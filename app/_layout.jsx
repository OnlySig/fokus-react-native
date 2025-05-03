import "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
    </GestureHandlerRootView>
  );
}
