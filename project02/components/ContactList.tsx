import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useImperativeHandle } from 'react'

export default function ContactList() {
    const contacts=[
        {
        uid:1,
        name: 'Kota Manohar',
        phone: '7396107241',
        status:"active",
        imageUrl:"https://avatars.githubusercontent.com/u/150522892?s=400&u=d8d488857c157a8d119e2fe73cf03cbfc75365b5&v=4"
        },
        {
            uid:2,
            name: 'Prabhas',
            phone: '8074985705',
            status:"active",
            imageUrl:"https://d12d6l12s3d372.cloudfront.net/prabhas_b05186fa7a.jpeg"
        },
    ]
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map((item)=>(
            <View key={item.uid} style={styles.userCard}>
                <Image 
                source={{uri:item.imageUrl}}
                style={styles.userImage}            
                />
                <View>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userStatus}>{item.status}</Text>
                </View>
            </View>
        ))}
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
    container:{
        paddingHorizontal:10,
        height:200,
        width:400,
        marginBottom:10
    },
    userCard:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:'#8D3DAA',
        marginBottom:10,
        borderRadius:10,
        borderWidth:2,
        borderColor:'black',
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60/2,
        margin:11,
    },
    userName:{
        fontSize:18,
        fontWeight:'600',
        color:'#FFF'
    },
    userStatus:{
        fontSize:14,
        fontWeight:'600',
        color:'#000'
    },
    userPhone:{}
})