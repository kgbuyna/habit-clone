import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Days = ({text}) => {
  return (
    <View>
        <TouchableOpacity style={styles.item} title={text}>
            <Text styles={{marginBottom:20}}>{text}</Text>
        </TouchableOpacity>
        
    </View>
  )
}

export default Days

const styles = StyleSheet.create({
  item:{
      borderRadius:'50%',
      height:17, 
      width:17 ,
      marginLeft: 16, 
      marginRight: 16,  
      backgroundColor:'#ffffff',
      justifyContent:'center', 
      alignItems:'center'
  }
})