import { StyleSheet, Text, View,ScrollView,FlatList,Pressable,TextInput,Button,SafeAreaView,Image} from 'react-native';
const Data=
[
{id:0,
  title:"Exercise",
  task:"12 Tasks",
  image:require("./assets/young woman working online.png")
},
{id:1,
  title:"study",
  task:"12 Tasks",
  image:require("./assets/young woman working at desk.png")


},
{id:2,
  title:"code",
  task:"12 Tasks",
  image:require("./assets/young woman working online.png")
},
{id:3,
  title:"cloth",
  task:"12 Tasks",
  image:require("./assets/young woman working at desk.png")


},
{id:4,
  title:"Exercise",
  task:"12 Tasks",
  image:require("./assets/young woman working online.png")
},
{id:5,
  title:"study",
  task:"12 Tasks",
  image:require("./assets/young woman working at desk.png")


},
{id:6,
  title:"Exercise",
  task:"12 Tasks",
  image:require("./assets/young woman working online.png")
},
{id:7,
  title:"study",
  task:"12 Tasks",
  image:require("./assets/young woman working at desk.png")


},
];


const data2=[
{
  id:0,
  name:'Mobile App development'
},
{
  id:1,
  name:'Web development'
},
{
  id:2,
  name:'Python dev'
},
{
  id:3,
  name:'Java App development'
},
{
  id:4,
  name:'flutter development'
},
{
  id:5,
  name:'html development'
},
{
  id:6,
  name:'Game development'
},
{
  id:7,
  name:'NETWORKING'
},
{
  id:8,
  name:' App development'
},
{
  id:9,
  name:'ANDRIOD App development'
},
{
  id:10,
  name:'IOS App development'
},

{
  id:11,
  name:'CSS development'
},
{
  id:12,
  name:'JS development'
},

];

export default function App() {
  return (
<SafeAreaView style={styles.container}>
<ScrollView>
  <View style={styles.TopView}>
    <View>
      <Text style={styles.TextEdit}>
      Hello , Devs 
      </Text>
      <Text>
        14 tasks day
      </Text>
    </View>
    <Pressable>
      <Image source={require("./assets/pro.png")} />
    </Pressable>
  </View>
  
  <View  style={styles.TopView}>
    <View style={styles.search}>
      <Image source={require('./assets/Vector.png')}/>
   <TextInput style={styles.TextInputEdit} placeholder='Search'/>

    </View> 
    <View>
      <Image source={require('./assets/Group 2.png')}/>
    </View>





  </View>
  <View  style={styles.TopView}>
  <View>
    <Text  style={styles.TextEdit2}>Categories</Text>
  </View>



  </View>
  <View  style={styles.TopView}>

    <FlatList
    
    data={Data}
    keyExtractor={item => item.id.toString()}
    renderItem={({item})=>( 
     <View  style={styles.flat} >
        <View >
          <Text style={styles.TextEdit3}>{item.title}</Text>
          <Text  style={styles.TextEdit3}>{item.task}</Text>
        </View>
        <View>
          <Image source={item.image}/>
        </View>
  


    </View>
    )}
    horizontal 
    contentContainerStyle={{columnGap: 15}}/>


  
  </View>
  <View  style={styles.TopView}>
  <Text  style={styles.TextEdit2}>
    Ongoing Task
  </Text>

  </View>
  
  <View  style={styles.TopView}>

<FlatList

data={data2}
keyExtractor={item => item.id.toString()}
renderItem={({item})=>( 
 <View  style={styles.flat2} >
    <View >
      <Text style={styles.TextEdit3}>{item.name}</Text>
     
    </View>
   



</View>
)}

contentContainerStyle={{rowGap: 15}}/>



</View> 
 


</ScrollView>









</SafeAreaView>




  );
}

const styles = StyleSheet.create({
  container: { 
    flex:1,
    flexDirection:"row",
    backgroundColor:"#F7F0E8",
   
    

   },

   TextEdit:{
    
    fontWeight:"bold",
    fontSize:"24px"
   },
   TextEdit2:{
    
    fontWeight:"bold",
    fontSize:"14px"
   },
   TextEdit3:{
    
    fontWeight:"bold",
    fontSize:"14.5px"
   },

   TopView:{
    justifyContent:'space-between',
    flex:1,
    flexDirection:"row",
    marginTop:24,
   },
   TextInputEdit:{   
 
    width: 274,
    marginLeft:10,
   


   },
   search:{
    display:"flex",
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    backgroundColor:'white',
    borderRadius:15,
  
   },
   flat:{
    backgroundColor:'white',
    borderRadius:12,
    padding:20,
  

   },
   flat2:{
    backgroundColor:'white',
    borderRadius:22,
    padding:50,
    borderColor:'#E8D1BA',
    border:'solid',
    borderWidth:2
  

   },
}); 
