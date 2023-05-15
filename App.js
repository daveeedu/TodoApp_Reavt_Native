import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';
import { v4 as uuidv4 } from 'uuid';
import { getRandomBytes } from 'react-native-get-random-values';

export default function App() {
  const [tasks, setTasks] = useState([
{"task":"HTML I","done":true, "id": "1"},
{"task":"CSS","done":true, "id": "2"},
{"task":"Responsive design","done":true, "id": "3"},
{"task":"Git","done":true, "id": "4"},
])

const addTask = (text) => {
  if (!text) {
    Alert.alert('No Task', 'Please add a task', {text: "ok"})
  } else {
    setTasks(prevTasks => {
      return [{task:text, id:uuidv4({ random: getRandomBytes })}, ...prevTasks]
    })
  }
}

const deleteTask = id => {
  setTasks(prevTasks => {
    return prevTasks.filter(task => task.id !== id)
  })

}

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTask addTask={addTask}/>
        <View style={styles.list}>
        <FlatList
          data={tasks}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Task item={item} deleteTask={deleteTask}/>
         )}
        />
        </View>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: "black",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 30,
  },
  list: {
    marginTop: 30,
    flex: 1
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  }
});
