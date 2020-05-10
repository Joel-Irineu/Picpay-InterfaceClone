import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

export default function Pay(){
    return(
        <View style={styles.container}>
            <Text>Pay</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });