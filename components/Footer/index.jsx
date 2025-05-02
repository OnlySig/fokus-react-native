import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.txtFooter}>
        Projeto fictício e sem fins comerciais. Desenvolvido por Alura e Gabriel
        C Pereira :).
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: "80%",
  },
  txtFooter: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5,
  },
});

export default Footer;
