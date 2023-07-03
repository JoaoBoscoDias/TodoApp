import { View } from "react-native";
import { Paragraph, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function EditTaskScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Paragraph style={styles.title}>Edit Screen</Paragraph>
      <Text style={styles.subtitle}>
        Aqui você pode editar as tarefas que você criou.
      </Text>
    </View>
  );
}
