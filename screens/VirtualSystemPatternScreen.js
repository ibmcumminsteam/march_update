import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, ActivityIndicator,Alert } from 'react-native';
import {Button} from 'react-native-elements' ;
import { Separator } from 'native-base';
// import Icon from 'react-native-vector-icons/AntDesign';
import { Icon } from 'react-native-elements'
import AntIcon from "react-native-vector-icons/AntDesign";
// import {Button} from 'react-native-paper'
// import { Table, TableWrapper, Row } from 'react-native-table-component';
import { Col, Row, Grid } from "react-native-easy-grid"; 
import { Card } from 'react-native-elements';
import {AccordionList} from "accordion-collapse-react-native";

 
export default class VirtualSystemPatternScreen extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   title:'Virtual System Patterns', 
  // })
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['App_Name','Creator'],
      widthArr: [80, 100 ],
      data: [{}],
      isLoggedIn : true,
      loading: true,
      username: '',
      password: '',
      hostname: '',
      url_received:'',
    }
   
  }

  componentDidMount = () => {
    fetch('http://<Insert your IP address>//ibm/menu.php',  {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
    
        // username: 'swanand',
    
        // password: 'L0ngl1vecps',
    
        // hostname: '10.76.125.214',

        url_received: 'virtsys',
        
    
      })
    
    }).then((response) => response.json())
          .then((responseJson) => {

            this.setState({
              data: responseJson, loading: false 
              });
    
    // Showing response message coming from server after inserting records.
            // Alert.alert(responseJson);
            console.log(responseJson);
    
          }).catch((error) => {
            console.error(error);
          });
  
  
}

_head(item){
  return(
      <Separator bordered style={{}}>
        <Text style={{flexWrap: 'wrap'}}>{item.app_name}</Text>
      </Separator>
  );
}

_body(item){
  return (
      <View style={{padding:10}}>
        
        <Text style={{textAlign:'center'}}>Application ID : {item.app_id}</Text>
        <Text style={{textAlign:'center'}}>Application Type : {item.app_type}</Text>
        <Text style={{textAlign:'center'}}>Creator : {item.creator}</Text>
        <View style={{marginTop:30,flexDirection:'row'}}>
       
        <AntIcon  name="cloud" color="blue" size={20} style={{paddingLeft: 100}} />
        <AntIcon name="edit" color="blue" size={20} style={{paddingLeft: 10}} />
        <AntIcon name="export" color="blue" size={20} style={{paddingLeft: 10}}/>
        <AntIcon name="delete" color="blue" size={20} style={{paddingLeft: 10}}/>
        <AntIcon name="lock" color="blue" size={20} style={{paddingLeft: 10}}/>
    
        
        </View> 
      </View>
  );
}
 
  render() {

    var list = []; 
    list = this.state.data;
    


    let {isLoggedIn} = this.state;
    let getData = false ;
    let name ;
    let i = 1 ;
    const renderPattern = (app_name )=>{
      getData = true ;
      name = app_name ;
      alert(name.app_name)

      // if(isLoggedIn){
      //   return <Button title = "Logout"></Button>
      // } else{
      //   return <Button title = "Login"></Button>
      // }
      
    }
    if(this.state.loading){

      return (<> 
      <View style={{marginTop: 200}}>
      <Text>Please wait while{"\n"}the Virtual System Patterns{"\n"}are loading      
   
      </Text>
      <ActivityIndicator size="large" color="#0000ff" /> 
   
      </View>
      </>);
   
      // this.setState({loading:false});
      }

      else{
  
    return (
        
      <View style={{}}>
    
       
<ScrollView style={{
     margin: 20 }}>
<Grid  style={{}}>
    <Col> 
   
{/*     
{list.map(list =>  */}

<AccordionList
            list={list}
            header={this._head}
            body={this._body}
          />

{/* )} */}
    </Col>
</Grid>



</ScrollView>
{/* <Card title="Local Modules">
          <Text>
            This is a card from the react-native-elements
          </Text>
        </Card> */}


      </View>
    )
      
      } 
  }
}
 
const styles = StyleSheet.create({
  col1:{
    backgroundColor: '#D3D3D3',
    marginBottom: 15,
    
  },
  iconss:{
  paddingLeft: 8,
  width: 100,
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start'
  },
  submit:{},
  serverTable:{
      paddingTop: 20,
      paddingLeft: 15,
      paddingRight: 15,
      // paddingBottom: 120,
      marginBottom : 50,
    //   fontFamily: 'Helvetica,Verdana,Arial,sans-serif'
      
      
      // backgroundColor: 'red',
  },
  subhead: {
    fontSize: 20,
    // backgroundColor: '#D3D3D3',
    paddingBottom: 30,
    paddingLeft: 10,
    
  },
  scrollView: {
    // backgroundColor: Colors.lighter,
  },iconss:{
    paddingLeft: 8,
    width: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 210,
    },
  
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 2
  },
});
