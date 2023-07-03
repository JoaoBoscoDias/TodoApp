import { View } from "react-native";
import { Paragraph, Text } from "react-native-paper";
import styles from "../utils/styles";
import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksCollectionRef = collection(db, 'tasks');
    const unsubscribe = onSnapshot(tasksCollectionRef, snapshot => {
      const taskList = snapshot.docs.map(doc => doc.data().nome);
      setTasks(taskList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      {tasks.map((task, index) => (
        <Text key={index}>{task}</Text>
      ))}
    </View>
  );

  return (
    <View style={styles.container_home}>
      <Paragraph style={styles.title_home}>Home Screen</Paragraph>
      <Text style={styles.subtitle_home}>Todas as suas tasks vão aparecer aqui</Text>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <View style={styles.container_home}>
      <Paragraph style={styles.title_home}>Home Screen</Paragraph>
      <Text style={styles.subtitle_home}>Todas as suas tasks vão aparecer aqui</Text>
    </View>
  );
};