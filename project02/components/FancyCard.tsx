import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <ScrollView horizontal={true}>
      <View style={[styles.card,styles.cardElevated]}>
        <Image 
         source={{
            uri:"https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2814,w_4241,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_400068991_qpukq2.jpg"

         }}
         style={styles.cardImage}
         />
  
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLabel}>Crown Palace</Text>
            <Text style={styles.cardDiscription}>It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.</Text>
            <Text style={styles.cardLocation}>Agra,Uttar Pradesh</Text>
            <Text style={styles.cardPrice}>₹200</Text>
          </View>
      </View>
      <View style={[styles.card,styles.cardElevated]}>
        <Image 
         source={{
            uri:"https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2814,w_4241,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_400068991_qpukq2.jpg"

         }}
         style={styles.cardImage}
         />
  
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLabel}>Crown Palace</Text>
            <Text style={styles.cardDiscription}>It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.</Text>
            <Text style={styles.cardLocation}>Agra,Uttar Pradesh</Text>
            <Text style={styles.cardPrice}>₹200</Text>
          </View>
      </View>
      </ScrollView>
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
    card:{
      height:600,
      width:400,
      marginHorizontal:5,
      padding:10,
      marginBottom:10,
      borderRadius:6,
    },
    cardElevated:{
      backgroundColor:'black',
      elevation:4,
      shadowOffset:{width:1,height:1},
    },
    cardImage:{
        height:400,
        marginBottom:10,
        borderRadius:6,
    },
    cardBody:{
      flex:1,
      flexGrow:1,
      paddingHorizontal:3,
      paddingVertical:10,
    },
    cardTitle:{
      color:'white',
      fontSize:24,
      fontWeight:'bold',
      marginBottom:2,
    },
    cardLabel:{
      color:'white',
      fontSize:16,
      marginBottom:4,
    },
    cardDiscription:{
      color:'white',
      fontSize:14,
      marginBottom:4,
      
    },
    cardLocation:{
      color:'white',
      fontWeight:'medium',
      marginBottom:5,
    },
    cardPrice:{
      color:'white',
    }
})
