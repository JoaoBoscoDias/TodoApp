import { ScrollView, View } from "react-native";
import { Paragraph, Text } from "react-native-paper";
import styles from "../utils/styles";
import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksCollectionRef = collection(db, "tasks");
    const unsubscribe = onSnapshot(tasksCollectionRef, (snapshot) => {
      const taskList = snapshot.docs.map((doc) => doc.data().nome);
      setTasks(taskList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Paragraph style={styles.subtitle}>
        Aqui você pode ver as suas tarefas!!!
      </Paragraph>
      <ScrollView>
        <View style={styles.content_tasks}>
          {tasks.map((task, index) => (
            <Text style={styles.tasks} key={index}>
              {task}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
