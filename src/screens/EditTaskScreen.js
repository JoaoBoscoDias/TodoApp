
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button} from 'react-native';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const EditTaskScreen = ({ route, navigation }) => {
  const { taskId } = route.params;
  const [task, setTask] = useState('');

  useEffect(() => {
    const fetchTask = async () => {
      const taskDocRef = doc(db, 'tasks', taskId);
      const taskDocSnapshot = await getDoc(taskDocRef);
      if (taskDocSnapshot.exists()) {
        const taskData = taskDocSnapshot.data();
        setTask(taskData.nome);
      }
    };

    fetchTask();
  }, [taskId]);

  const handleUpdateTask = async () => {
    const taskDocRef = doc(db, 'tasks', taskId);
    await updateDoc(taskDocRef, { nome: task });

    // Volta para a página anterior (Home)
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa"
        value={task}
        onChangeText={text => setTask(text)}
      />
      {/* <Button title="Atualizar" onPress={handleUpdateTask} /> */}
    </View>
  );
};



export default EditTaskScreen;
