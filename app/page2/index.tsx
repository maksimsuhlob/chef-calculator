import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
const Page2 = () => {
  return (
    <View style={styles.container}>
      <Text>page 2</Text>
      <Link href="/">page 1</Link>

      <StatusBar style="auto" />
    </View>
  )
}

export default Page2
