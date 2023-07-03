import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    color: "#000000",
    backgroundColor: "#495057",
    flex: 1,
    // alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 14,
    color: "#ffffff",
    paddingTop: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: "#ffffff",
    borderColor: "#ffffff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  tasks: {
    marginTop: 10,
    fontSize: 14,
    color: "#ffffff",
    paddingTop: 10,
    borderWidth: 1,
    paddingHorizontal: 8,
    borderColor: "#ffffff",
    paddingBottom: 10,
  },
  content_tasks: {
    flex: 1,
    marginTop: 10,
  },
});

export default styles;
