import React, { Component } from 'react';
import { Alert, View, SafeAreaView, FlatList, ActivityIndicator,StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right } from 'native-base';
import { getNews } from '../service/news';
import firebase from 'firebase';

export default class tabTWO extends Component{
    constructor(props){
    super(props);
    this.state={ 
    list:[],
    } }
     componentDidMount(){
       firebase.database().ref('haber').on('value', (snapshot) =>{
         var li = []
         snapshot.forEach((child)=>{
          li.push({
           key: child.key,
           name:child.val().name,
           age: child.val().title,
           thumbnail: child.val().thumbnail
         })
       })
      this.setState({list:li})
     })
    }
    render(){
     return(
       <View style={{flex:1, alignSelf:'center', justifyContent:'center'}}>
          <FlatList style={{width:'100%'}}
             data={this.state.list}
             keyExtractor={(item)=>item.key}
             renderItem={({item})=>{
                return(
                   <View>
                      <Text>{item.name}  {item.age}</Text>
                   </View>)
                }}/>
        </View>
     )}
   }