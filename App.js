import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import Days from './src/components/Days'

const DATA = [
  {
    key: 1,
    title: 'Probability',
    len : 2, 
    fulfilled : 0,
    unit:'h'
  },
  {
    key: 2,
    title: 'Writing',
    fulfilled : 0,
    len : 1, 
    unit:''
  },
  {
    key: 3,
    title: 'Algorithm',
    fulfilled : 0,
    len : 1, 
    unit:'h',
  },
  {
    key: 4,
    title: 'System',
    fulfilled : 0,
    len : 1, 
    unit:'h',
  },
  {
    key: 5,
    title: 'Computer Graphics',
    fulfilled : 0,
    len : 1, 
    unit:'h',
  },
  {
    key: 6,
    title: 'M/W Dev',
    fulfilled : 0,
    len : 1, 
    unit:'h',
  },
  {
    key: 7,
    title: 'Stretch',
    fulfilled: 0,
    len : 15, 
    unit:'m',
  },
  {
    key: 8,
    title: 'Reading a book',
    fulfilled: 0,
    len : 30, 
    unit:'m',
  },
  {
    key: 9,
    title: 'Meditation',
    fulfilled: 0,
    len : 30, 
    unit:'m'
  },
  {
    key: 10,
    title: 'Piano',
    fulfilled: 0,
    len : 1, 
    unit:''
  },
  {
    key: 11,
    title: 'Diary',
    fulfilled: 0,
    len : 1, 
    unit:'',
  },
];


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View styles={styles.top_part}>
            <Text>Today</Text>
            <TouchableOpacity style={{backgroundColor:'#FCAE1E', flexDirection:'row', width:65 , height:25, justifyContent:'center', alignItems:'center', borderRadius:'45%'}}>
              <Text style={{color:'#ffffff', fontSize:15}}>All</Text>
              <AntDesign name="down" size={13} color="#ffffff" />            
            </TouchableOpacity>
          </View>
          <View style = {styles.weekday}>
            {/* <Days></Days> */}
            <Days text="M"></Days>
            <Days text="T"></Days>
            <Days text="W"></Days>
            <Days text="T"></Days>
            <Days text="F"></Days>
            <Days text="S"></Days>
            <Days text="S"></Days>
          </View>
      </View>
      <View style = {styles.flatlist}>
        <FlatList data = {DATA} renderItem={({item})=>(
          <View style={styles.items}>
            <Text>{item.title}</Text>
            <Text>{item.fulfilled}/{item.len}{item.unit}</Text>
          </View>
        )}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flexDirection:'column',
  },
  weekday:{
    flexDirection:'row',
    width:'100%'
  },
  top_part:{
    width:'100%',
    height:'60',
    flexDirection:'column',
  },
  flatlist:{
    flex:1,
    width:'100%',
    height:'100%',
    margin:15
  },
  items:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:15,
    fontSize: 16,
    backgroundColor:'#ffffff',
  }
});
