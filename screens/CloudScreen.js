import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text,ActivityIndicator } from 'react-native';
import {Button} from 'react-native-elements' ;
import { Separator } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid"; 
import { Card } from 'react-native-elements';
import {AccordionList} from "accordion-collapse-react-native";
import { Container, Header, Content, Accordion } from "native-base";
import MyHeader from "./MyHeader";

export default class CloudScreen extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   title:'Environment Profiles', 
  // })
  constructor(props) {
    super(props);
    this.state = {
      data: [{}],
      isLoggedIn : true,
      loading: true,
    }
  }
  //https://api.myjson.com/bins/6esx8

  componentDidMount = () => {
    fetch('http://<Insert your IP address>/ibm/menu.php',  {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
    
        // username: 'swanand',
    
        // password: 'L0ngl1vecps',
    
        // hostname: '10.76.125.214',

        url_received: 'cloud',
        
    
      })
    
    }).then((response) => response.json())
          .then((responseJson) => {
    
    // Showing response message coming from server after inserting records.
            // Alert.alert(responseJson);
            // console.log(responseJson);
            // console.log(typeof(responseJson));
            this.setState ({
                data:responseJson, loading: false,
            })
            // console.log(this.props.children);
          }).catch((error) => {
            console.error(error);
          });
  
  
}

_head(item){
  return(
      <Separator bordered style={{}}>
        <Text style={{textAlign:'left'}} >{item.name}</Text>
      </Separator>
  );
}

_body(item){
  return (
      <View style={{padding:15}}>
        <Text style={{textAlign:'left'}}>Application ID : {item.id}</Text>
        <Text style={{textAlign:'left'}}>Storage Reserved : {item.productid}</Text>
        {/* <Text style={{textAlign:'center'}}>Memory Reserved : {item.memory_reserved}</Text>
        <Text style={{textAlign:'center'}}>Current Message : {item.currentmessage}</Text> */}

      </View>
  );
}
 
  render() {

 
    var list = []; 
    list = this.state.data;
    var dataArray = [] ;
    // console.log(typeof(list));
    var new_arr = [];
    new_arr = list[0].licenses_limits;
    // console.log(new_arr);

    

    let {isLoggedIn} = this.state;
    let getData = false ;
    let name ;
    let i = 1 ;
    const renderPattern = (app_name )=>{
      getData = true ;
      name = app_name ;
      alert(name.app_name)
      
    }

    if(this.state.loading){

      return (<> 
      <View style={{marginTop: 200}}>
      <Text style={{margin:50}}>Please wait while{"\n"}the Environment Profiles{"\n"}are loading      
   
      </Text>
      <ActivityIndicator size="large" color="#0000ff" /> 
   
      </View>
      </>);
   
      // this.setState({loading:false});
      }
else{

    return (
        
      <View style={{paddingBottom:300}}>
        <MyHeader/>
        <Text style={{ fontSize: 25, backgroundColor: '#F0F0F0',}}>Environment Profiles</Text>
      
<Text style={{ fontSize: 20,margin:20}}>Data for: {list[0].name}</Text>
<ScrollView style={{marginLeft:20,marginRight:20,marginTop:20,alignSelf:'flex-end' }}>





<AccordionList
            list={new_arr}
            header={this._head}
            body={this._body}
        />


</ScrollView>

      </View>
    )
      }

  }}
 
const styles = StyleSheet.create({
  
  
  // separator: {
  //   marginVertical: 8,
  //   borderBottomColor: '#737373',
  //   borderBottomWidth: StyleSheet.hairlineWidth,
  //   marginLeft: 2
  // },
});
