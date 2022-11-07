
import { StyleSheet, Text, TouchableOpacity, View, FlatList, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import Days from './src/components/Days'
import Data from './src/Data/data'
import Tasks from './src/components/Tasks';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.top_part}>
            <TouchableOpacity style={styles.button_all}>
              <Text style={{color:'#ffffff', fontSize:15}}>All</Text>
              <AntDesign name="down" size={15} color="#ffffff"/>   
            </TouchableOpacity>
            <Text>Today</Text>
            <FontAwesome name="lightbulb-o" size={24} color="black" />
          </View>
          <View style = {styles.weekday}>
            <Days text="M"/>
            <Days text="T"/>
            <Days text="W"/>
            <Days text="T"/>
            <Days text="F"/>
            <Days text="S"/>
            <Days text="R"/>
          </View>

      </View>
      {/* <View>
        <Tasks Data= {Data}></Tasks>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:5, 
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  header:{
    flexDirection:'column',
    alignItems:'center',
  },
  button_all:{
    backgroundColor:'#FCAE1E',
    flexDirection:'row',
    width:40 ,
    height:25,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'45%'
  },
  top_part:{
    flexDirection:'row',
    width:'100%',
    height:'20%',
    marginTop: 10,
    marginBottom:20,
    justifyContent:'space-around',
    alignContent:'center',
    // backgroundColor:'#4f4f4f',
  },
  weekday:{
    flexDirection:'row',
    padding: 10,
    width:'100%',
    alignContent:'center',

  },
  
});
