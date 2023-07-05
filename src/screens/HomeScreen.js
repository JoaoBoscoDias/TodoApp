import { ScrollView, View } from "react-native";
import { Paragraph, Text,  Button } from "react-native-paper";
import styles from "../utils/styles";
import React, { useState, useEffect } from "react";
// import { deleteDoc } from "firebase/firestore";
import { collection, doc, onSnapshot } from "firebase/firestore"; //query talvez
import { db } from "../config/firebase";

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksCollectionRef = collection(db, "tasks");
    const unsubscribe = onSnapshot(tasksCollectionRef, (snapshot) => {
      const taskList = snapshot.docs.map((doc) => doc.data().nome);
      setTasks(taskList);
      // const taskList = snapshot.docs.map((doc) => doc.data());
      const tasksListsWithIds = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTasks(tasksListsWithIds);
    });

    return () => unsubscribe();
  }, []);

  const handleEditTask = (taskId) => {
    console.log(taskId);
    navigation.navigate("EditTask", { taskId });
  };

  const handleDeleteTask = async (taskId) => {
    const taskDocRef = doc(db, "tasks", taskId);
    await deleteDoc(taskDocRef);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Paragraph style={styles.subtitle}>
        Aqui você pode ver as suas tarefas!!!
      </Paragraph>
      {/* <ScrollView>
        <View style={styles.content_tasks}>
          {tasks.map((task, index) => (
            <Text style={styles.tasks} key={index}>
              {task}
            </Text>
          ))}
        </View>
      </ScrollView> */}
      {tasks.map((task, index) => (
        <View key={index}>
          {console.log(task)}
          <Text key={index}>{task.nome}</Text>
          <View>
            <Button onPress={() => handleEditTask(task.id)}> Editar </Button>
            <Button onPress={() => handleDeleteTask(task.id)}> Excluir</Button>
          </View>
        </View>
      ))}
    </View>
  );
};

export default HomeScreen;
