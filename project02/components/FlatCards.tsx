import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>   
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
            <Text style={styles.cardText}>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text style={styles.mCardText}>white</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text style={styles.cardText}>orange</Text>
        </View>
      </View>
    </View>
  )
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
        flex:1,
        flexDirection:'row',
        padding:3
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:5,
        margin:8,
        borderWidth:2,
        borderColor:'black'
    },
    cardOne:{
        backgroundColor:"#FF671F"
    },
    cardTwo:{
        backgroundColor:"#FFFFFF",
    },
    cardThree:{
        backgroundColor:"#046A38"
    },
    mCardText:{
        color:'#06038D',
        fontSize:20,
        fontWeight:'bold'
    },
    cardText:{
        fontSize:20,
        fontWeight:'bold',
    }
})