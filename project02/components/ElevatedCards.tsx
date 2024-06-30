import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class ElevatedCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>ElevatedCards</Text>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card,styles.cardElevated]}>
                <Text style={styles.text} >Tap</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text style={styles.text} >me</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text style={styles.text} >to</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text style={styles.text} >Scroll</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text style={styles.text} >more..</Text>
            </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headingText : {
        fontSize :24,
        fontWeight:'bold',
        paddingHorizontal:14,
        paddingVertical:10,
        color:'black'
    },
    container:{
        padding:8,

    },
    card:{
        flex:2,
        alignItems:'center',
        justifyContent:'center',
        margin:8,
        padding:4,
        width:100,
        height:100,
        borderRadius:8,
    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowOpacity:0.4,
        shadowColor:'orange'
    },
    text:{
        color:'black',
        fontSize:20,
        fontWeight:'bold'
    }
})