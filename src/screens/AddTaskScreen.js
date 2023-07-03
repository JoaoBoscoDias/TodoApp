import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
// import { TasksContext } from '../components/TasksContext';


const AddTaskScreen = ({ navigation }) => {
//   const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    // Aqui você pode adicionar a lógica para salvar a tarefa em algum lugar
    // Por exemplo, você pode chamar uma API ou atualizar o estado global
    // setTasks(prevTasks => [...prevTasks, tasks]);

    const tasksCollectionRef = collection(db, 'tasks');
    
    addDoc(tasksCollectionRef, {
      nome : tasks,
    });
    navigation.navigate('Home', { newTask: tasks });

    setTasks('');
    // Após salvar a tarefa, você pode navegar de volta para a tela anterior
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa"
        value={tasks}
        onChangeText={text => setTasks(text)}
      />
      <Button title="Adicionar" onPress={handleAddTask}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default AddTaskScreen;
