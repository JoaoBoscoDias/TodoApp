import { View } from "react-native";
import { Paragraph, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function Home() {
  return (
    <View style={styles.container_home}>
      <Paragraph style={styles.title_home}>Home Screen</Paragraph>
      <Text style={styles.subtitle_home}>Todas as suas tasks vão aparecer aqui</Text>
    </View>
  );
};