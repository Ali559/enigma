import { StyleSheet, Text, View } from "react-native";

export default function VaultScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Vault screen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000",
  },
});
