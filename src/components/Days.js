import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Days = ({text}) => {
  return (
    <View>
        <TouchableOpacity style={{borderRadius:'50%', height:40, width:40 , margin:15, backgroundColor:'#ffffff', justifyContent:'center', alignItems:'center'}} title={text}>
            <Text>{text}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity></TouchableOpacity> */}
        
    </View>
  )
}

export default Days

const styles = StyleSheet.create({

})