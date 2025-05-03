import { Text, View, Image, StyleSheet } from "react-native";
import logo from "../assets/images/fokus-logo.png";
import imageHome from "../assets/images/imageHome.png";
import Footer from "../components/Footer";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <View>
        <Text style={styles.txtHome}>
          Otimize sua{"\n"}produtividade,{"\n"}
          <Text style={styles.txtHome2}>mergulhe no que{"\n"}importa</Text>
        </Text>
        <Link href={{ pathname: "/pomodoro" }} style={styles.getStartBtn}>
          <Text style={styles.btnTxt}>Quero iniciar!</Text>
        </Link>
        <Image style={styles.imgHome} source={imageHome} />
      </View>
      <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    alignItems: "center",
    justifyContent: "center",
  },
  txtHome: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "100",
    marginTop: 40,
  },
  getStartBtn: {
    backgroundColor: "#B872FF",
    borderRadius: 32,
    color: "#021123",
    fontSize: 18,
    padding: 8,
    marginVertical: 16,
    width: 264,
    marginHorizontal: "auto",
    display: "flex",
    justifyContent: "center",
  },
  btnTxt: {
    fontWeight: "700",
    textAlign: "center",
  },
  txtHome2: {
    fontWeight: "500",
  },
  imgHome: {
    width: 300,
    height: 250,
    marginHorizontal: "auto",
    marginBottom: 40,
  },
});
