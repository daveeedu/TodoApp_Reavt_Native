import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, TextInput, Button} from 'react-native';

const AddTask = ({addTask}) => {
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }
  return (
    <View>
        <TextInput
        style={styles.input}
        placeholder="Add new Task"
        onChangeText={changeHandler}
        />
        <Button title='add task' color="blue" onPress={() => 
        addTask(text)} />
    </View>
  )
}


const styles = StyleSheet.create({
    input: {
        margin: 10,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
  });

export default AddTask