import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>MY Todo Tasks</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        backgroundColor: 'blue',
        height: 80
    },
    title: {
      textAlign: "center",
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      fontStyle: 'italic'
    }
  });

export default Header